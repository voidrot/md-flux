import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest'
import { run } from './cli.js'
import * as configModule from './config.js'
import fg from 'fast-glob'
import fs from 'node:fs'

vi.mock('fast-glob')
vi.mock('node:fs')
vi.mock('./config.js')
vi.mock('@voidrot/md-flux-core', () => {
  const publishPageMock = vi.fn().mockResolvedValue(undefined)
  return {
    MarkdownParser: vi.fn().mockImplementation(() => ({
      parse: vi.fn().mockReturnValue({ frontmatter: {}, html: 'html', content: 'content' })
    })),
    ConfluenceClient: vi.fn().mockImplementation(() => ({
      publishPage: publishPageMock,
      resolveSpaceId: vi.fn()
    }))
  }
})

describe('CLI', () => {
  let consoleLogSpy: MockInstance
  let consoleErrorSpy: MockInstance

  // Mock config
  const mockConfig = {
    confluence: {
      baseUrl: 'https://test.com',
      auth: {
        username: 'user',
        apiToken: 'token'
      },
      spaceKey: 'SPACE'
    },
    files: ['**/*.md']
  }

  beforeEach(() => {
    vi.clearAllMocks()
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined)
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    // Mock process.exit to prevent termination
    vi.spyOn(process, 'exit').mockImplementation((code?: string | number | null | undefined) => {
      throw new Error(`Process exited with code ${code}`)
    })

    vi.mocked(configModule.loadConfig).mockReturnValue(mockConfig as unknown as configModule.Config)
    vi.mocked(fg).mockResolvedValue(['/test/file.md'])
    vi.mocked(fs.readFileSync).mockReturnValue('# Content')
  })

  afterEach(() => {
    // vi.restoreAllMocks() - caused issues with factory mocks
  })

  it('publishes files with default config', async () => {
    await run(['node', 'md-flux', 'publish'])

    expect(configModule.loadConfig).toHaveBeenCalledWith({ path: undefined, env: process.env })
    expect(fg).toHaveBeenCalledWith(['**/*.md'], expect.objectContaining({ absolute: true }))
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Found 1 files'))
  })

  it('accepts --config flag', async () => {
    await run(['node', 'md-flux', 'publish', '--config', 'custom.yml'])

    expect(configModule.loadConfig).toHaveBeenCalledWith({ path: 'custom.yml', env: process.env })
  })

  it('handles config loading failures', async () => {
    vi.mocked(configModule.loadConfig).mockImplementation(() => { throw new Error('Config error') })

    await expect(run(['node', 'md-flux', 'publish'])).rejects.toThrow('Process exited with code')

    expect(consoleErrorSpy).toHaveBeenCalledWith('Config error')
  })

  it('shows help', async () => {
    // commander throws when help is displayed if exitOverride is used, which is what we want to verify
    // to ensure it doesn't just exit process silently in tests
    await expect(run(['node', 'md-flux', '--help'])).rejects.toThrow()
  })
})
