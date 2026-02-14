import { Command } from 'commander'
import { MarkdownParser, ConfluenceClient } from '@voidrot/md-flux-core'
import { loadConfig } from './config.js'
import fg from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path'

export async function run(argv: string[]) {
  const program = new Command()

  program
    .name('md-flux')
    .description('Sync markdown docs to Confluence')
    .version('0.1.0')
    .option('-c, --config <path>', 'Path to configuration file')
    .exitOverride() // Important for testing

  program.command('publish')
    .action(async () => {
      try {
        const options = program.opts()
        const config = loadConfig({ path: options.config, env: process.env })


        const maskedToken = config.confluence.auth.apiToken ? '******' : '(missing)'
        console.log(`Loaded config for space: ${config.confluence.spaceKey}, baseUrl: ${config.confluence.baseUrl}, user: ${config.confluence.auth.username}, token: ${maskedToken}`)

        let filePatterns: string[] = []
        let ignorePatterns: string[] = []

        if (Array.isArray(config.files)) {
          filePatterns = config.files
        } else {
          filePatterns = config.files.include
          if (config.files.exclude) {
            ignorePatterns = config.files.exclude
          }
        }

        const files = await fg(filePatterns, { ignore: ignorePatterns, absolute: true })
        console.log(`Found ${files.length} files to process.`)

        const client = new ConfluenceClient({
          baseUrl: config.confluence.baseUrl,
          auth: config.confluence.auth
        })

        const parser = new MarkdownParser()

        for (const file of files) {
          console.log(`Processing ${path.relative(process.cwd(), file)}...`)
          const content = fs.readFileSync(file, 'utf-8')
          const parsed = parser.parse(content)

          const spaceKey = parsed.frontmatter.spaceKey || config.confluence.spaceKey

          console.log(`  -> Target Space: ${spaceKey} ${parsed.frontmatter.spaceKey ? '(from frontmatter)' : '(from config)'}`)
          try {
            await client.publishPage(parsed, spaceKey as string)
            console.log(`  -> Successfully processed ${file}`)
          } catch (err: unknown) {
            console.error(`  -> Failed to publish ${file}: ${(err as Error).message}`)
            throw err
          }
        }

      } catch (error: unknown) {
        console.error((error as Error).message)
        process.exit(1)
      }
    })

  await program.parseAsync(argv)
}
