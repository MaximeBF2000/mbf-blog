import { getNumberOfGithubRepositories } from 'src/utils/github.utils'
import {
  HomeHeading,
  HomeSocials,
  ArticlesList,
  Projects
} from '../components/partials'
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
      <HomeHeading />
      <HomeSocials numberOfGithubRepos={numberOfGithubRepositories} />
      <ArticlesList
        title="📝 Latest posts"
        posts={posts}
        hasMorePosts={hasMorePosts}
      />
      <Projects title="👨‍💻 Last projects I've worked on" projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const postLimit = 4
  const posts = getAllPosts('articles')
    .slice(0, postLimit)
    .map(post => post.meta)
  const projects = getAllPosts('projects')
    .slice(0, postLimit)
    .map(post => post.meta)

  const hasMorePosts = posts.length > postLimit
  const hasMoreProjects = posts.length > postLimit

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
