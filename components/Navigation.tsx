'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MagneticButton from './MagneticButton'

function SSHKeyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const res = await fetch('/id_rsa.pub')
      const text = await res.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs px-3 py-1.5 border border-foreground/20 rounded-full text-foreground/60 hover:text-foreground hover:border-accent transition-colors"
    >
      {copied ? 'Copied!' : 'Copy SSH Key'}
    </button>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <MagneticButton href="/">
          <motion.div
            className="text-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Dan Brown
          </motion.div>
        </MagneticButton>

        <div className="flex items-center gap-8">
          {links.map((link, index) => (
            <MagneticButton key={link.href} href={link.href}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative text-sm transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                )}
              </motion.div>
            </MagneticButton>
          ))}
          <SSHKeyButton />
        </div>
      </div>
    </motion.nav>
  )
}
