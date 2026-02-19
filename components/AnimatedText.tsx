'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import SplitType from 'split-type'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  type?: 'words' | 'chars' | 'lines'
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'words'
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (ref.current && isInView) {
      const split = new SplitType(ref.current, { types: type })
      controls.start('visible')
    }
  }, [isInView, controls, type])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
      style={{ perspective: '1000px' }}
    >
      {text}
    </motion.div>
  )
}
