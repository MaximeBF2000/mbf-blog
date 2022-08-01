import { Projects } from 'src/components/partials'
import { Head } from 'src/components/seo'
import { getAllPosts } from 'src/utils/blogApi.utils'

export default function Articles({ projects }) {
  return (
    <>
      <Head
        title="Projects - Maxime FERRET"
        metas={{
          image: '/assets/profilPic.jpeg',
          description:
            'Find here the projects of Maxime FERRET, remote React.js / Javascript developer'
        }}
      />
      <Projects title="All my projects here" projects={projects} searchable />
    </>
  )
}

export async function getStaticProps() {
  const projects = getAllPosts('projects').map(post => post.meta)

  return { props: { projects } }
}
