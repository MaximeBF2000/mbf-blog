import Link from 'next/link'
import moment from 'moment'

export function ArticlesList({ title, posts, hasMorePosts = false }) {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-medium mb-12">{title}</h2>
      <ul>
        {posts.map(post => (
          <li className="mb-12 last:mb-0" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="cursor-pointer text-gray-100 text-3xl mb-2 underline underline-offset-4">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-300 text-md">
              ({moment(new Date(post.date)).format('YYYY/MM/DD')})
            </p>
            <p className="text-gray-300 text-md">{post.desc}</p>
          </li>
        ))}
      </ul>
      {hasMorePosts && <Link href="/blog">See more</Link>}
    </section>
  )
}
