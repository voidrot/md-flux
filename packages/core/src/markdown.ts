import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

export interface ParsedMarkdown {
  frontmatter: Record<string, unknown>;
  content: string; // The raw markdown content without frontmatter
  html: string;    // The rendered HTML
}

export class MarkdownParser {
  private md: MarkdownIt

  constructor() {
    this.md = new MarkdownIt()
  }

  parse(rawContent: string): ParsedMarkdown {
    const { data, content } = matter(rawContent)
    const html = this.md.render(content)

    return {
      frontmatter: data,
      content: content.trim(),
      html
    }
  }
}
