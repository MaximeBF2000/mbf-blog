import { Head } from 'src/components/seo'
import { MDXRemote } from 'next-mdx-remote'
import { blogComponents } from '../../components/blog'
import { getSlugs } from '../../utils/blogApi.utils'
import { getMdx } from '../../utils/mdx.utils'
import 'highlight.js/styles/atom-one-dark.css'

export default function Article({ post }) {
  return (
    <>
      <Head title={post.meta.title} metas={{ description: post.meta.desc }} />
      <h1 className="text-6xl font-bold mb-12">{post.meta.title}</h1>
      <MDXRemote {...post.source} components={blogComponents} />
      <div className="h-24 w-full" />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const post = await getMdx(slug, 'articles')

  return { props: { post } }
}

export const getStaticPaths = async () => {
  const paths = getSlugs('articles').map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
