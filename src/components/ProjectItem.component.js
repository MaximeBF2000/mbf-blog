import moment from 'moment'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export const ProjectItem = ({ title, slug, date, description }) => {
  return (
    <li className="cursor-pointer border transition-all hover:text-secondary focus:text-secondary hover:border-secondary focus:border-secondary">
      <Link href={`/projects/${slug}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl">{title}</h3>
            <BsArrowRight className="w-6 h-6" />
          </div>
          <p className="text-gray-300">
            {moment(new Date(date)).format('YYYY/MM/DD')}
          </p>
          <p className="text-gray-300">{description}</p>
        </div>
      </Link>
    </li>
  )
}
