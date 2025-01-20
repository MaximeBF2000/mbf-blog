import { Image } from './Image.component'
import { Gallery } from './Gallery.component'
import { Heading } from './Heading.component'
import { SubscribeToNewsLetter } from '../SubscribeToNewsLetter.component'

export const blogComponents = {
  Image,
  Gallery,
  NewsLetter: () => <SubscribeToNewsLetter className="mt-24 mb-0" />,
  p: props => (
    <p
      {...props}
      className="!leading-10 text-base sm:text-lg md:text-xl text-gray-300 mb-6"
    />
  ),
  h2: props => (
    <Heading
      as="h2"
      {...props}
      className="text-4xl md:text-5xl mt-16 mb-8 !leading-tight"
    />
  ),
  h3: props => (
    <Heading as="h3" {...props} className="text-2xl md:text-3xl mt-12 mb-8" />
  ),
  pre: props => <pre {...props} className="rounded overflow-hidden my-8" />,
  ul: props => <ul {...props} className="list-disc ml-4 my-12" />,
  ol: props => (
    <ul {...props} className="list-decimal marker:text-xl ml-4 my-12" />
  ),
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
  ),
  blockquote: props => (
    <blockquote
      className="relative overflow-hidden bg-gray-700 pb-2 pt-6 pl-8 pr-4 my-8 rounded italic before:content-[''] before:absolute before:left-0 before:top-0 before:w-4 before:h-full before:bg-primary before:opacity-70 hover:before:opacity-100 before:transition-all"
      {...props}
    />
  )
}
