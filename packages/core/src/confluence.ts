import {
  Configuration,
  PageApi,
  SpaceApi,
  GetSpacesStatusEnum,
  PageBodyWriteRepresentationEnum,
  CreatePageRequestStatusEnum,
  CreatePageRequest
} from '@voidrot/confluence-client'
import { ParsedMarkdown } from './markdown.js'

/**
 * Configuration options for the ConfluenceClient.
 */
export interface ConfluenceConfig {
  /** The base URL of the Confluence instance. */
  baseUrl: string;
  /** Authentication credentials. */
  auth: {
    /** The email address associated with the Confluence account. */
    username: string;
    /** The API token for authentication. */
    apiToken: string;
  };
}

/**
 * A client for interacting with the Confluence API.
 * Handles space resolution, page searching, creation, and updates.
 */
export class ConfluenceClient {
  private pageApi: PageApi
  private spaceApi: SpaceApi

  /**
     * Creates an instance of ConfluenceClient.
     *
     * @param config - Configuration object containing URL and credentials.
     */
  constructor(config: ConfluenceConfig) {
    const apiConfig = new Configuration({
      basePath: config.baseUrl,
      username: config.auth.username,
      password: config.auth.apiToken
    })

    this.pageApi = new PageApi(apiConfig)
    this.spaceApi = new SpaceApi(apiConfig)
  }

  /**
     * Resolves a space Key to its internal Confluence numeric ID.
     *
     * @param spaceKey - The human-readable key of the space (e.g., "DS", "Eng").
     * @returns The numeric ID of the space as a string.
     * @throws {Error} If the space is not found or has no ID.
     */
  async resolveSpaceId(spaceKey: string): Promise<string> {
    const response = await this.spaceApi.getSpaces({
      keys: [spaceKey],
      limit: 1,
      status: GetSpacesStatusEnum.Current
    })

    if (response.results && response.results.length > 0) {
      const space = response.results[0]
      if (space && space.id) {
        return space.id
      }
    }

    throw new Error(`Space with key '${spaceKey}' not found.`)
  }

  /**
     * Publishes a Markdown page to Confluence.
     * Checks if the page exists:
     * - If yes, updates it (increments version).
     * - If no, creates a new page.
     *
     * @param page - The parsed Markdown object containing frontmatter and HTML.
     * @param spaceKey - The key of the target space.
     * @param parentId - (Optional) The ID of the parent page to nest this page under.
     * @throws {Error} If the page title is missing in frontmatter.
     */
  async publishPage(page: ParsedMarkdown, spaceKey: string, parentId?: string): Promise<void> {
    const title = page.frontmatter.title as string
    if (!title) {
      throw new Error('Page title is missing in frontmatter.')
    }

    const spaceId = await this.resolveSpaceId(spaceKey)

    // Check if page exists
    const searchResponse = await this.pageApi.getPages({
      spaceId: [parseInt(spaceId, 10)],
      title: title,
      limit: 1,
      status: ['current']
    })

    const existingPage = searchResponse.results && searchResponse.results.length > 0 ? searchResponse.results[0] : null

    if (existingPage && existingPage.id) {
      // Update
      const versionNumber = existingPage.version?.number ? existingPage.version.number + 1 : 2
      console.log(`Updating page '${title}' (id: ${existingPage.id}) to version ${versionNumber}...`)

      await this.pageApi.updatePage({
        id: parseInt(existingPage.id, 10),
        updatePageRequest: {
          id: existingPage.id,
          status: 'current',
          title: title,
          version: {
            number: versionNumber,
            message: 'Updated by md-flux'
          },
          body: {
            representation: PageBodyWriteRepresentationEnum.Storage,
            value: page.html
          }
        }
      })
    } else {
      // Create
      console.log(`Creating new page '${title}' in space '${spaceKey}'...`)

      const createPageBody: CreatePageRequest = {
        spaceId: spaceId,
        title: title,
        status: CreatePageRequestStatusEnum.Current,
        body: {
          representation: PageBodyWriteRepresentationEnum.Storage,
          value: page.html
        }
      }

      if (parentId) {
        createPageBody.parentId = parentId
      }

      await this.pageApi.createPage({
        createPageRequest: createPageBody
      })
    }
  }
}
