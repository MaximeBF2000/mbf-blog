import { getNumberOfGithubRepositories } from 'src/utils/github.utils'
import {
  HomeHeading,
  HomeSocials,
  ArticlesList,
  Projects,
  SubscribeToNewsLetter
} from '../components/partials'
import { Head } from '../components/seo'
import { getAllPosts } from '../utils/blogApi.utils'

export default function Index({
  posts,
  hasMorePosts,
  numberOfGithubRepositories,
  projects,
  hasMoreProjects
}) {
  return (
    <>
      <Head
        title="React.js / Node.js developer - Maxime FERRET"
        metas={{
          description:
            'React.js / Node.js developer. I help you build your applications from scratch or help your team from around the world',
          image: '/assets/hero_screenshot.png'
        }}
      />
      <HomeHeading />
      <HomeSocials numberOfGithubRepos={numberOfGithubRepositories} />
      <ArticlesList
        title="📝 Latest posts"
        posts={posts}
        hasMorePosts={hasMorePosts}
      />
      <Projects
        title="👨‍💻 Last projects I've worked on"
        projects={projects}
        hasMoreProjects={hasMoreProjects}
      />
      <SubscribeToNewsLetter />
    </>
  )
}

export async function getStaticProps() {
  const postLimit = 3
  const projectLimit = 4

  const getLimitedMetas = (objects, limit) =>
    objects.slice(0, limit).map(post => post.meta)

  const allPosts = getAllPosts('articles')
  const posts = getLimitedMetas(allPosts, postLimit)

  const allProjects = getAllPosts('projects')
  const projects = getLimitedMetas(allProjects, projectLimit)

  const hasMorePosts = allPosts.length > postLimit
  const hasMoreProjects = allProjects.length > projectLimit

  const numberOfGithubRepositories = await getNumberOfGithubRepositories()

  return {
    props: {
      posts,
      hasMorePosts,
      numberOfGithubRepositories,
      projects,
      hasMoreProjects
    }
  }
}
