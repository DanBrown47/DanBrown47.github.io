import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dan Brown - Security Analyst & Developer',
  description: 'Portfolio of Dan Brown - Security Analyst, Developer, and Writer',
  openGraph: {
    title: 'Dan Brown - Security Analyst & Developer',
    description: 'Portfolio of Dan Brown - Security Analyst, Developer, and Writer',
    url: 'https://danbrown47.github.io',
    siteName: 'Dan Brown Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  )
}
