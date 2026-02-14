
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ConfluenceClient } from './confluence.js'
import {
  PageApi,
  SpaceApi
} from '@voidrot/confluence-client'
import { ParsedMarkdown } from './markdown.js'

vi.mock('@voidrot/confluence-client')

describe('ConfluenceClient', () => {
  let client: ConfluenceClient
  const config = {
    baseUrl: 'https://test.com',
    auth: {
      username: 'user',
      apiToken: 'token'
    }
  }

  const mockPageApi = {
    getPages: vi.fn(),
    updatePage: vi.fn(),
    createPage: vi.fn()
  }

  const mockSpaceApi = {
    getSpaces: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(PageApi).mockImplementation(() => mockPageApi as unknown as PageApi)
    vi.mocked(SpaceApi).mockImplementation(() => mockSpaceApi as unknown as SpaceApi)

    client = new ConfluenceClient(config)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('resolves space ID', async () => {
    mockSpaceApi.getSpaces.mockResolvedValue({
      results: [{ id: '123', key: 'SPACE' }]
    })

    const spaceId = await client.resolveSpaceId('SPACE')
    expect(spaceId).toBe('123')
    expect(mockSpaceApi.getSpaces).toHaveBeenCalledWith(expect.objectContaining({ keys: ['SPACE'] }))
  })

  it('throws if space not found', async () => {
    mockSpaceApi.getSpaces.mockResolvedValue({ results: [] })
    await expect(client.resolveSpaceId('MISSING')).rejects.toThrow("Space with key 'MISSING' not found")
  })

  it('publishes new page', async () => {
    mockSpaceApi.getSpaces.mockResolvedValue({ results: [{ id: '123' }] })
    mockPageApi.getPages.mockResolvedValue({ results: [] }) // Not found

    const page = {
      frontmatter: { title: 'New Page' },
      content: 'content',
      html: '<p>content</p>'
    }

    await client.publishPage(page as unknown as ParsedMarkdown, 'SPACE')

    expect(mockPageApi.createPage).toHaveBeenCalledWith(expect.objectContaining({
      createPageRequest: expect.objectContaining({
        title: 'New Page',
        spaceId: '123',
        body: expect.objectContaining({ value: '<p>content</p>' })
      })
    }))
  })

  it('updates existing page', async () => {
    mockSpaceApi.getSpaces.mockResolvedValue({ results: [{ id: '123' }] })
    mockPageApi.getPages.mockResolvedValue({
      results: [{
        id: '456',
        version: { number: 1 },
        title: 'Existing Page'
      }]
    })

    const page = {
      frontmatter: { title: 'Existing Page' },
      content: 'new content',
      html: '<p>new content</p>'
    }

    await client.publishPage(page as unknown as ParsedMarkdown, 'SPACE')

    expect(mockPageApi.updatePage).toHaveBeenCalledWith(expect.objectContaining({
      id: 456,
      updatePageRequest: expect.objectContaining({
        version: expect.objectContaining({ number: 2 }),
        body: expect.objectContaining({ value: '<p>new content</p>' })
      })
    }))
  })
})
