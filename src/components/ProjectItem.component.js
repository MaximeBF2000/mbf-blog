import Link from 'next/link'
import { format as formatDate } from 'date-fns'
import { BsArrowRight } from 'react-icons/bs'

export const ProjectItem = ({ title, slug, date, description }) => {
  return (
    <li className="cursor-pointer border transition-all hover:text-primary focus:text-primary hover:border-primary focus:border-primary">
      <Link href={`/projects/${slug}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-2xl">{title}</h3>
            <BsArrowRight className="w-6 h-6" />
          </div>
          <p className="text-gray-300 mb-4 italic text-sm">
            {formatDate(new Date(date), 'dd/MM/yyyy')}
          </p>
          <p className="text-gray-300">{description}</p>
        </div>
      </Link>
    </li>
  )
}
