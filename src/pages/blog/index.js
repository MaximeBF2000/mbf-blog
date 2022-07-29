import { ArticlesList } from 'src/components/partials'
import { getAllPosts } from 'src/utils/blogApi.utils'

export default function Articles({ posts }) {
  return <ArticlesList title="All my articles here" posts={posts} searchable />
}

export async function getStaticProps() {
  const posts = getAllPosts('articles').map(post => post.meta)

  return { props: { posts } }
}
