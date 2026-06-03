import { ArticlesList, SubscribeToNewsLetter } from 'src/components/partials'
import { Head } from 'src/components/seo'
import { getAllPosts } from 'src/utils/blogApi.utils'

export default function Articles({ posts }) {
  return (
    <>
      <Head
        title="Blog - Maxime FERRET"
        metas={{
          description:
            'I share my thoughts and experiences on web developement, marketing, and online businesses here',
          image: '/assets/profilPic.jpeg'
        }}
      />
      <ArticlesList title="All my articles here" posts={posts} searchable />
      <SubscribeToNewsLetter />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('articles').map(post => post.meta)

  return { props: { posts } }
}
