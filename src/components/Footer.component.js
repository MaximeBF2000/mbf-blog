import moment from 'moment'

export const Footer = () => {
  return (
    <div className="bg-gray-900 py-20 px-8 mt-24 text-center text-gray-300">
      &copy; Maxime FERRET 2018-{moment().format('YYYY')}
    </div>
  )
}
