import { Head } from 'src/components/seo'
import { MDXRemote } from 'next-mdx-remote'
import { blogComponents } from '../../components/blog'
import { getSlugs } from '../../utils/blogApi.utils'
import { getMdx } from 'src/utils/mdx.utils'
import 'highlight.js/styles/atom-one-dark.css'

export default function Project({ project }) {
  return (
    <>
      <Head
        title={project.meta.title}
        metas={{ description: project.meta.desc }}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        {project.meta.title}
      </h1>
      <MDXRemote {...project.source} components={blogComponents} />
      <div className="h-24 w-full" />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const project = await getMdx(slug, 'projects')

  return { props: { project } }
}

export const getStaticPaths = async () => {
  const paths = getSlugs('projects').map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
