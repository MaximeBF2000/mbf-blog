import Image from 'next/image'

export const blogComponents = {
  Image,
  p: props => <p {...props} className="leading-8 text-lg text-gray-300 mb-4" />,
  h1: props => <h1 {...props} className="text-3xl font-bold" />,
  h2: props => <h2 {...props} className="text-4xl mt-12 mb-8" />,
  pre: props => <pre {...props} className="rounded overflow-hidden my-8" />
}
