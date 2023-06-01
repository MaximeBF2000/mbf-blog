import { Head } from 'src/components/seo'
import { MDXRemote } from 'next-mdx-remote'
import { get, split } from 'lodash'
import { blogComponents } from '../../components/blog'
import { getSlugs } from '../../utils/blogApi.utils'
import { getMdx } from '../../utils/mdx.utils'
import 'highlight.js/styles/atom-one-dark.css'
import { SubscribeToNewsLetter } from 'src/components/SubscribeToNewsLetter.component'

export default function Article({ post }) {
  const keywords = split(get(post, 'meta.keywords', ''), ', ')

  console.log({ keywords })

  return (
    <>
      <Head
        title={post.meta.title}
        metas={{ description: post.meta.desc, keywords }}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-12 !leading-normal">
        {post.meta.title}
      </h1>
      <MDXRemote {...post.source} components={blogComponents} />
      <div className="h-24 w-full" />
      <SubscribeToNewsLetter />
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
