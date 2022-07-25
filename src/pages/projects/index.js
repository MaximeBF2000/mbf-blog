import { Projects } from 'src/components/partials'
import { getAllPosts } from 'src/utils/blogApi.utils'

export default function Articles({ projects }) {
  return <Projects title="All my projects here" projects={projects} />
}

export async function getStaticProps() {
  const projects = getAllPosts('projects').map(post => post.meta)

  return { props: { projects } }
}
