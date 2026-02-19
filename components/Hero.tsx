'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from './AnimatedText'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="block">Dan Brown</span>
          </motion.h1>

            <motion.div 
              className="flex flex-wrap justify-center items-baseline gap-x-4 mb-12 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
              }}
            >
              {[
                { label: "Dev", suffix: "-like", color: "text-cyan-400" },
                { label: "Sec", suffix: "-ish", color: "text-rose-500" },
                { label: "Ops", suffix: "-y", color: "text-amber-400" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  className="flex items-baseline"
                >
                  {/* The "Serious" Part */}
                  <span className="text-2xl md:text-4xl font-black  tracking-tighter text-foreground">
                    {item.label}
                  </span>

                  {/* The "Glitchy" Pun */}
                  <motion.span
                    animate={{ 
                      opacity: [1, 0.5, 1, 1, 0.8, 1],
                      x: [0, -1, 1, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      times: [0, 0.1, 0.2, 0.8, 0.9, 1] 
                    }}
                    className={`font-mono italic text-lg md:text-2xl ml-1 font-light ${item.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
                  >
                    {item.suffix}
                  </motion.span>

                  {/* Separator Slash */}
                  {i < 2 && (
                    <span className="ml-4 text-foreground/10 font-thin text-3xl hidden md:inline">/</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <MagneticButton href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg hover:bg-accent hover:text-white transition-colors"
              >
                About me
              </motion.button>
            </MagneticButton>

            <MagneticButton href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-foreground/20 rounded-full font-medium text-lg hover:border-accent hover:text-accent transition-colors"
              >
                Read Blog
              </motion.button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-foreground/40"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}
