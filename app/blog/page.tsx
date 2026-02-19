import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogList from './BlogList'
import { getAllPosts } from '@/lib/posts'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
