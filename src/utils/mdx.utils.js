import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug } from './blogApi.utils'

export const getMdx = async (slug, object) => {
  const { content, meta } = getPostFromSlug(slug, object)
  const mdxSource = await serialize(content, {
    blockJS: false,
    blockDangerousJS: true,
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight]
    }
  })

  return { source: mdxSource, meta }
}
