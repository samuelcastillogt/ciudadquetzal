import BlogCard from '@/components/BlogCard'
import { apiService } from '@/services/api.service'
import Head from 'next/head'

export async function getServerSideProps() {
  const posts = await apiService.getPosts()

  return { props: { posts } }
}

function BlogIndex({ posts }: any) {
  return (
    <>
      <Head>
        <title>Blog | Ciudad Quetzal</title>
        <meta name="description" content="Entradas recientes del blog de Ciudad Quetzal." />
        <link rel="canonical" href="https://www.ciudadquetzal.com/blog" />
      </Head>
      <main className="container mx-auto max-w-6xl px-5 py-10">
        <h1 className="mb-8 text-center text-4xl">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-center">No hay entradas disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => <BlogCard data={post} key={post.data.id} />)}
          </div>
        )}
      </main>
    </>
  )
}

export default BlogIndex
