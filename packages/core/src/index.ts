import { z } from 'zod'
export * from './markdown.js'
export * from './confluence.js'

export const ConfigSchema = z.object({
  confluenceUrl: z.string().url(),
  auth: z.object({
    username: z.string(),
    token: z.string()
  })
})

export type Config = z.infer<typeof ConfigSchema>
