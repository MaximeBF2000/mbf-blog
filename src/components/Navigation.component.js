import Link from 'next/link'

const linkClass = (asPath, path) =>
  `${
    asPath === path && 'bg-gray-700'
  } py-2 px-4 rounded hover:bg-gray-600 cursor-pointer`

export const Navigation = ({ currentPath }) => {
  return (
    <div className="mb-8 flex justify-between">
      <p className="bg-gray-900 p-2 rounded w-fit italic text-yellow-600 hidden sm:block">
        {currentPath === '/' ? '/home' : currentPath}
      </p>
      <ul className="flex gap-3">
        <Link href="/">
          <li className={linkClass(currentPath, '/')}>Home</li>
        </Link>
        <Link href="/blog">
          <li className={linkClass(currentPath, '/blog')}>Blog</li>
        </Link>
        <Link href="/projects">
          <li className={linkClass(currentPath, '/projects')}>Projects</li>
        </Link>
      </ul>
    </div>
  )
}
