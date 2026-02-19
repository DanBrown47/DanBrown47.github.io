'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/blog"
        className="text-sm text-foreground/40 hover:text-accent transition-colors mb-12 block"
      >
        ← Back to Blog
      </Link>

      <time className="text-sm text-foreground/40 mb-4 block">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>

      <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>

      <div className="flex flex-wrap gap-2 mb-12">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="border-t border-foreground/10 pt-12 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </motion.div>
  )
}
