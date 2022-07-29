const slugify = str => str.replaceAll(' ', '-').toLowerCase()

export const Heading = ({ as: As, children, className, ...props }) => {
  return (
    <As id={slugify(children)} {...props} className={className}>
      <a href={`#${slugify(children)}`}>{children}</a>
    </As>
  )
}
