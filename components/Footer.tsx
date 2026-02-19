'use client'

import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/DanBrown47' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/danwand' },
  { name: 'Twitter', url: 'https://twitter.com/danwand47' },
  { name: 'GitLab', url: 'https://gitlab.com/DanBrown47' },
  { name: 'Chess.com', url: 'https://chess.com/member/DanBrown47' },
]

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              X
            </motion.h3>
            <motion.p
              className="text-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering 
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.name}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-foreground/20 rounded-full text-sm hover:border-accent hover:text-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center text-sm text-foreground/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Dan Brown. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
