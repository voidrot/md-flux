import { z } from 'zod'
import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

/**
 * Zod schema for the CLI configuration.
 * Defines the structure for Confluence settings and file selection patterns.
 */
export const ConfigSchema = z.object({
  /** Confluence connection settings. */
  confluence: z.object({
    /** The base URL of the Confluence instance. */
    baseUrl: z.string().url(),
    /** Authentication credentials. */
    auth: z.object({
      /** Confluence username (email). */
      username: z.string(),
      /** Confluence API token. */
      apiToken: z.string()
    }),
    /** The key of the Confluence space to publish to. */
    spaceKey: z.string().min(1)
  }),
  /** File selection patterns. */
  files: z.union([
    /** Array of glob patterns to include. */
    z.array(z.string()).min(1),
    /** Object specifying include and exclude patterns. */
    z.object({
      /** Array of glob patterns to include. */
      include: z.array(z.string()).min(1),
      /** Array of glob patterns to exclude. */
      exclude: z.array(z.string()).optional()
    })
  ])
})

/**
 * Inferred TypeScript type for the CLI configuration.
 */
export type Config = z.infer<typeof ConfigSchema>

/**
 * Options for loading the configuration.
 */
export interface LoadConfigOptions {
  /** Path to a specific configuration file. */
  path?: string;
  /** Environment variables to override configuration defaults. */
  env?: NodeJS.ProcessEnv;
}

/**
 * Loads and validates the configuration.
 *
 * Search order for config file:
 * 1. `options.path` (if provided)
 * 2. `md-flux.config.yml` in current directory
 * 3. `md-flux.config.yaml` in current directory
 *
 * Environment variables (e.g., `CONFLUENCE_BASE_URL`) override file settings.
 *
 * @param options - Options for loading the configuration.
 * @returns The validated configuration object.
 * @throws {Error} If the config file is not found, cannot be parsed, or is invalid.
 */
export function loadConfig(options: LoadConfigOptions = {}): Config {
  const env = options.env || process.env

  const defaults = [
    'md-flux.config.yml',
    'md-flux.config.yaml'
  ]

  let fileToLoad = options.path

  if (!fileToLoad) {
    for (const defaultPath of defaults) {
      if (fs.existsSync(path.resolve(process.cwd(), defaultPath))) {
        fileToLoad = defaultPath
        break
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let parsedConfig: any = {}

  if (fileToLoad) {
    const absolutePath = path.resolve(process.cwd(), fileToLoad)

    if (fs.existsSync(absolutePath)) {
      const fileContent = fs.readFileSync(absolutePath, 'utf-8')
      try {
        parsedConfig = yaml.load(fileContent) || {}
      } catch (error) {
        if (error instanceof z.ZodError) {
          // rethrow zod errors later
        }
        throw new Error(`Failed to parse config file at ${fileToLoad}: ${(error as Error).message}`)
      }
    } else if (options.path) {
      throw new Error(`Config file not found at ${absolutePath}`)
    }
  }

  // Merge Env Vars
  // Structure: confluence.baseUrl, confluence.auth.username, etc.

  if (!parsedConfig.confluence) parsedConfig.confluence = {}
  if (!parsedConfig.confluence.auth) parsedConfig.confluence.auth = {}

  if (env.CONFLUENCE_BASE_URL) parsedConfig.confluence.baseUrl = env.CONFLUENCE_BASE_URL
  if (env.CONFLUENCE_USERNAME) parsedConfig.confluence.auth.username = env.CONFLUENCE_USERNAME
  if (env.CONFLUENCE_API_TOKEN) parsedConfig.confluence.auth.apiToken = env.CONFLUENCE_API_TOKEN
  if (env.CONFLUENCE_SPACE_KEY) parsedConfig.confluence.spaceKey = env.CONFLUENCE_SPACE_KEY

  try {
    return ConfigSchema.parse(parsedConfig)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', ')
      throw new Error(`Invalid configuration: ${issues}`)
    }
    throw error
  }
}
