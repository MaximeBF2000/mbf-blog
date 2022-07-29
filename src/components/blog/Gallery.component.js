export const Gallery = ({ images, cols = 3, gap }) => {
  return (
    <div
      className={`w-full my-8 grid grid-cols-${cols} ${
        gap ? `gap-${gap}` : ''
      }`}
    >
      {images.map(image => {
        const imageProps = { src: image?.src ?? image, alt: image?.alt }

        return <img key={imageProps.src} {...imageProps} />
      })}
    </div>
  )
}
