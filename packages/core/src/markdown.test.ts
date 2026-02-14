import { describe, it, expect } from 'vitest'
import { MarkdownParser } from './markdown.js'

describe('MarkdownParser', () => {
  const parser = new MarkdownParser()

  it('should parse basic markdown', () => {
    const markdown = '# Hello World'
    const result = parser.parse(markdown)

    expect(result.html).toContain('<h1>Hello World</h1>')
    expect(result.content).toBe('# Hello World')
    expect(result.frontmatter).toEqual({})
  })

  it('should parse frontmatter', () => {
    const markdown = `---
title: Test Title
tags: [a, b]
---
# Content`
    const result = parser.parse(markdown)

    expect(result.frontmatter).toEqual({
      title: 'Test Title',
      tags: ['a', 'b']
    })
    expect(result.content).toBe('# Content')
    expect(result.html).toContain('<h1>Content</h1>')
  })

  it('should handle missing frontmatter', () => {
    const markdown = 'Just content'
    const result = parser.parse(markdown)

    expect(result.frontmatter).toEqual({})
    expect(result.content).toBe('Just content')
    expect(result.html).toContain('<p>Just content</p>')
  })
})
