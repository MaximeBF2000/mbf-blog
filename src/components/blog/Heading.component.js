const slugify = str =>
  str.replaceAll(' ', '-').replaceAll('-:-', '-').toLowerCase()

export const Heading = ({ as: As, children, className, ...props }) => {
  const slug = slugify(children)

  return (
    <As id={slug} {...props} className={className}>
      <a href={`#${slug}`}>{children}</a>
    </As>
  )
}
