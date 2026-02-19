import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogPostContent from './BlogPostContent'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <BlogPostContent post={post} />
        </div>
      </main>
      <Footer />
    </>
  )
}
