import moment from 'moment'

export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-gray-900 p-8 mt-24 h-48 flex justify-center items-center text-gray-300">
      &copy; Maxime FERRET 2018-{moment().format('YYYY')}
    </div>
  )
}
