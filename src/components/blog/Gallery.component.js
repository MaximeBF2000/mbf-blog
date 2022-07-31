const GRID_COLS_CLASSES = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5'
]

export const Gallery = ({ images, cols = 3, gap }) => {
  const gridColsClass = GRID_COLS_CLASSES[cols - 1]

  return (
    <div
      className={`w-full my-8 grid ${gridColsClass} ${gap ? `gap-${gap}` : ''}`}
    >
      {images.map(image => {
        const imageProps = { src: image?.src ?? image, alt: image?.alt }

        return <img key={imageProps.src} {...imageProps} />
      })}
    </div>
  )
}
