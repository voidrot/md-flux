import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { loadConfig } from './config.js'
import fs from 'node:fs'


vi.mock('node:fs')

describe('loadConfig', () => {

  const mockConfig = {
    confluence: {
      baseUrl: 'https://example.atlassian.net/wiki',
      auth: {
        username: 'user@example.com',
        apiToken: 'token'
      },
      spaceKey: 'SPACE'
    },
    files: ['**/*.md']
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(process, 'cwd').mockReturnValue('/app')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('loads config from default path', () => {
    vi.mocked(fs.existsSync).mockImplementation((p) => {
      // Check absolute path
      return p === '/app/md-flux.config.yml'
    })
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (p === '/app/md-flux.config.yml') {
        return `
confluence:
  baseUrl: https://example.atlassian.net/wiki
  auth:
    username: user@example.com
    apiToken: token
  spaceKey: SPACE
files:
  - "**/*.md"
`
      }
      return ''
    })

    const config = loadConfig()
    expect(config).toEqual(mockConfig)
  })

  it('loads config from specified path', () => {
    vi.mocked(fs.existsSync).mockImplementation((p) => {
      return p === '/app/custom.yml'
    })
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (p === '/app/custom.yml') {
        return `
confluence:
  baseUrl: https://example.atlassian.net/wiki
  auth:
    username: user@example.com
    apiToken: token
  spaceKey: SPACE
files:
  - "**/*.md"
`
      }
      return ''
    })

    const config = loadConfig({ path: 'custom.yml' })
    expect(config).toEqual(mockConfig)
  })

  it('merges environment variables', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true)
    vi.mocked(fs.readFileSync).mockReturnValue(`
files: ["*.md"]
confluence:
  baseUrl: https://yaml.com
  spaceKey: YAML_SPACE
`)

    const env = {
      CONFLUENCE_USERNAME: 'env_user',
      CONFLUENCE_API_TOKEN: 'env_token',
      CONFLUENCE_SPACE_KEY: 'ENV_SPACE' // Should override? Current logic: only if missing. Wait, current logic: if (env) config = env.
      // Re-reading logic in config.ts:
      // if (env.X) parsedConfig.x = env.X
      // This OVERRIDES whatever was in parsedConfig if parsedConfig had it?
      // No, `parsedConfig` is an object. `parsedConfig.x = env.x` overwrites.
      // So Env takes precedence in my implementation.
      // Let's verify behavior.
    }

    const config = loadConfig({ env })

    expect(config.confluence.auth.username).toBe('env_user')
    expect(config.confluence.auth.apiToken).toBe('env_token')
    expect(config.confluence.spaceKey).toBe('ENV_SPACE') // Env overrides config in current implementation
    expect(config.confluence.baseUrl).toBe('https://yaml.com')
  })

  it('supports files include/exclude object', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true)
    vi.mocked(fs.readFileSync).mockReturnValue(`
confluence:
  baseUrl: https://e.com
  auth:
    username: u
    apiToken: t
  spaceKey: s
files:
  include: 
    - "src/**/*.md"
  exclude:
    - "test/**/*.md"
`)
    const config = loadConfig()
    expect(config.files).toEqual({
      include: ['src/**/*.md'],
      exclude: ['test/**/*.md']
    })
  })
})
