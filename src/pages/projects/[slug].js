import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { blogComponents } from '../../components/blog'
import { getPostFromSlug, getSlugs } from '../../utils/blogApi.utils'
import 'highlight.js/styles/atom-one-dark.css'

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>{project.meta.title}</title>
      </Head>
      <h1>{project.meta.title}</h1>
      <MDXRemote {...project.source} components={blogComponents} />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { content, meta } = getPostFromSlug(slug, 'projects')
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight
      ]
    }
  })

  return { props: { project: { source: mdxSource, meta } } }
}

export const getStaticPaths = async () => {
  const paths = getSlugs('projects').map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
