import { Fragment } from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

export const Head = ({ title, metas }) => {
  const metasEntries = metas ? Object.entries(metas) : null
  const { asPath } = useRouter()

  return (
    <NextHead>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {metasEntries.map(([metaName, metaContent]) => (
        <Fragment key={metaName}>
          <meta name={metaName} content={metaContent} />
          {metaName === 'description' && (
            <meta property="og:description" content={metaContent} />
          )}
          {metaName === 'image' && (
            <meta property="og:image" content={metaContent} />
          )}
          {metaName === 'url' && (
            <meta property="og:url" content={metaContent} />
          )}
        </Fragment>
      ))}
      {!metasEntries.some(([metaName]) => metaName === 'url') && (
        <>
          <meta
            name="url"
            content={process.env.NEXT_PUBLIC_BASE_URL + asPath}
          />
          <meta
            property="og:url"
            content={process.env.NEXT_PUBLIC_BASE_URL + asPath}
          />
        </>
      )}
      <meta property="og:locale" content="fr_FRANCE" />
      <meta property="og:type" content="website" />
    </NextHead>
  )
}
