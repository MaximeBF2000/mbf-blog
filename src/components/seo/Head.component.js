import { Fragment } from 'react'
import NextHead from 'next/head'

export const Head = ({ title, metas }) => {
  const metasEntries = metas ? Object.entries(metas) : null

  return (
    <NextHead>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {metasEntries.map(([metaName, metaContent]) => (
        <Fragment key={metaName}>
          <meta name={metaName} content={metaContent} />
          <meta
            property="og:url"
            content={metaContent || process.env.NEXT_PUBLIC_BASE_URL}
          />
          {metaName === 'description' && (
            <meta property="og:description" content={metaContent} />
          )}
          {metaName === 'image' && (
            <meta property="og:image" content={metaContent} />
          )}
        </Fragment>
      ))}
      <meta property="og:locale" content="fr_FRANCE" />
      <meta property="og:type" content="website" />
    </NextHead>
  )
}
