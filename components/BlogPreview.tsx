'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from './MagneticButton'
import type { PostMeta } from '@/lib/posts'

export default function BlogPreview({ posts }: { posts: PostMeta[] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-sm uppercase tracking-wider text-foreground/60">
            Recent Posts
          </h2>
          <MagneticButton href="/blog">
            <span className="text-sm text-accent hover:underline">View all →</span>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="border border-foreground/10 rounded-2xl p-6 h-full hover:border-accent/50 transition-all duration-300 group-hover:translate-y-[-4px]">
                  <time className="text-xs text-foreground/40 mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/60 line-clamp-3">{post.excerpt}</p>
                  <motion.div
                    className="mt-4 flex items-center text-accent text-sm"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    Read more →
                  </motion.div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
