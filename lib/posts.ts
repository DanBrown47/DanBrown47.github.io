import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export type Post = PostMeta & {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date).slice(0, 10) : '',
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
      } as PostMeta
    })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fileNames = fs.readdirSync(postsDirectory)
  const fileName = fileNames.find((name) => name.endsWith(`-${slug}.md`) || name === `${slug}.md`)

  if (!fileName) return null

  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : '',
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    contentHtml,
  }
}
