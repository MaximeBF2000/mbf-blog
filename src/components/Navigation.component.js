import Link from 'next/link'

const linkClass = (asPath, path) =>
  `${asPath === path && 'bg-gray-700'} py-2 px-4 rounded hover:bg-gray-600`

export const Navigation = ({ currentPath }) => {
  return (
    <div className="mb-8 flex justify-between">
      <p className="bg-gray-900 p-2 rounded w-fit italic text-yellow-600">
        {currentPath === '/' ? '/home' : currentPath}
      </p>
      <ul className="flex gap-3">
        <li className={linkClass(currentPath, '/')}>
          <Link href="/">Home</Link>
        </li>
        <li className={linkClass(currentPath, '/blog')}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={linkClass(currentPath, '/projects')}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  )
}
