'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-foreground/60 mb-16">
        Thoughts on security, development, and technology
      </p>

      <div className="space-y-12">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="border-l-2 border-foreground/10 pl-6 py-4 hover:border-accent transition-colors">
                <time className="text-sm text-foreground/40 mb-2 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-3xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/60 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
