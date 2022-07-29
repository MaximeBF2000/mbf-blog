import Link from 'next/link'
import moment from 'moment'
import { useSearch } from 'src/utils/useSearch.hook'
import { Paginate } from '../Paginate.component'

export function ArticlesList({
  title,
  posts,
  hasMorePosts = false,
  searchable = false
}) {
  const [filteredPosts, searchInputProps] = useSearch(posts, ['title'])

  return (
    <section className="mb-24">
      <div className="flex justify-between mb-12 gap-5 flex-wrap">
        <h2 className="text-3xl font-medium">{title}</h2>
        {searchable && (
          <input
            placeholder="Search articles..."
            className="p-2 w-full sm:w-1/3 rounded text-gray-900 outline-none border border-gray-900"
            {...searchInputProps}
          />
        )}
      </div>
      <Paginate
        className="mb-12"
        data={filteredPosts}
        limit={8}
        layout={({ children }) => <ul>{children}</ul>}
        renderItem={post => (
          <li className="mb-12 last:mb-0" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="cursor-pointer text-gray-100 text-3xl mb-2 hover:underline focus:underline underline-offset-4">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-300 text-md">
              ({moment(new Date(post.date)).format('YYYY/MM/DD')})
            </p>
            <p className="text-gray-300 text-md">{post.desc}</p>
          </li>
        )}
      />
      {hasMorePosts && <Link href="/blog">See more posts</Link>}
    </section>
  )
}
