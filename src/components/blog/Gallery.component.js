const GRID_COLS_CLASSES = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5'
]

export const Gallery = ({ images = [], cols = 3, gap }) => {
  const safeImages = Array.isArray(images) ? images : [images].filter(Boolean)
  const gridColsClass = GRID_COLS_CLASSES[cols - 1] ?? GRID_COLS_CLASSES[2]

  if (safeImages.length === 0) {
    return null
  }

  return (
    <div
      className={`w-full my-8 grid ${gridColsClass} ${gap ? `gap-${gap}` : ''}`}
    >
      {safeImages.map(image => {
        const imageProps = { src: image?.src ?? image, alt: image?.alt }

        return <img key={imageProps.src} {...imageProps} />
      })}
    </div>
  )
}
