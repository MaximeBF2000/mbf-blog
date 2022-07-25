import { useRouter } from 'next/router'
import { Navigation } from 'src/components/Navigation.component'
import '../global.css'

export default function NextApp({ Component, pageProps }) {
  const { asPath } = useRouter()

  return (
    <div className="bg-gray-800 min-h-screen text-white py-16">
      <div className="w-full md:w-2/3 lg:w-1/2 px-3 md:px-0 mx-auto">
        <Navigation currentPath={asPath} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
