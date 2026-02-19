import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import BlogPreview from '@/components/BlogPreview'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <BlogPreview posts={posts} />
      </main>
      <Footer />
    </>
  )
}
