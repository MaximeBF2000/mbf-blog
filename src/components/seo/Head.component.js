import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { get, join } from 'lodash'

const DEFAULT_KEYWORDS = [
  'React.js developer',
  'Node.js developer',
  'Next.js developer',
  'React.js freelance developer',
  'Node.js freelance developer',
  'Next.js freelance developer',
  'Lyon',
  'Développeur React.js',
  'Développeur Node.js',
  'Développeur Next.js',
  'Développeur freelance React.js',
  'Développeur freelance Node.js',
  'Développeur freelance Next.js'
]

export const Head = ({ title, metas }) => {
  const { asPath } = useRouter()
  const description = get(
    metas,
    'description',
    'Fullstack React.js / Node.js developer. I help you build efficiently your applications so you can focus on bringing value to your business.'
  )
  const image = get(metas, 'image', '/assets/hero_screenshot.png')
  const url = process.env.NEXT_PUBLIC_BASE_URL + asPath

  return (
    <NextHead>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
      />
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={join(
          [...get(metas, 'keywords', []), ...DEFAULT_KEYWORDS],
          ', '
        )}
      />
      <meta name="author" content="Maxime FERRET" />
      <meta name="url" content={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="fr_FRANCE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </NextHead>
  )
}
