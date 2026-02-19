'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, href, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    )
  }

  return <div onClick={onClick} className="inline-block">{content}</div>
}
