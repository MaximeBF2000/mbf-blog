import { Image } from './Image.component'
import { Gallery } from './Gallery.component'
import { Heading } from './Heading.component'
import { SubscribeToNewsLetter } from '../SubscribeToNewsLetter.component'

export const blogComponents = {
  Image,
  Gallery,
  NewsLetter: () => <SubscribeToNewsLetter className="mt-24 mb-0" />,
  p: props => <p {...props} className="leading-8 text-xl text-gray-300 mb-4" />,
  h1: props => <h2 {...props} className="text-5xl mt-12 mb-8" />,
  h2: props => <Heading as="h2" {...props} className="text-5xl mt-12 mb-8" />,
  h3: props => <Heading as="h3" {...props} className="text-2xl mt-12 mb-8" />,
  pre: props => <pre {...props} className="rounded overflow-hidden my-8" />,
  ul: props => <ul {...props} className="list-disc ml-4 my-12" />,
  li: props => (
    <li className="mb-3">
      <p {...props} className="leading-8 text-xl text-gray-300" />
    </li>
  ),
  a: props => (
    <a
      {...props}
      target="_blank"
      className="text-white underline underline-offset-4"
    />
  )
}
