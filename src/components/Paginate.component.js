import { useState, Fragment } from 'react'
import { chunkArr, range } from '../utils/array.utils'

export const Paginate = ({
  data,
  renderItem,
  limit = 5,
  layout,
  className
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedData = chunkArr(data, limit)
  const pagesRange = range(paginatedData.length, undefined, [true])
  const pages =
    pagesRange.length > 15
      ? [...pagesRange.slice(0, 15), '...', pagesRange.at(-1)]
      : pagesRange

  const Layout = layout ?? 'div'

  return (
    <div className={className}>
      <Layout>
        {paginatedData[currentPage - 1].map((item, index) =>
          renderItem(item, index)
        )}
      </Layout>
      {paginatedData.length > 1 && (
        <div className="mt-12 flex gap-12">
          <button
            className="underline underline-offset-4 text-white disabled:text-gray-300 disabled:cursor-not-allowed disabled:no-underline"
            onClick={() => setCurrentPage(ps => ps - 1)}
            disabled={!(currentPage > 1)}
          >
            Previous
          </button>
          <div className="flex gap-5">
            {pages.map(pageNumber => (
              <Fragment key={pageNumber}>
                <button
                  className={`text-gray-300 cursor-pointer underline-offset-4 ${
                    currentPage === pageNumber ? 'text-white underline' : ''
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                  disabled={typeof pageNumber === 'string'}
                >
                  {pageNumber}
                </button>
              </Fragment>
            ))}
          </div>
          <button
            className="underline underline-offset-4 text-white disabled:text-gray-300 disabled:cursor-not-allowed disabled:no-underline"
            onClick={() => setCurrentPage(ps => ps + 1)}
            disabled={!(currentPage - 1 < paginatedData.length - 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

// data.map((item, index) => renderItem(item, index))
