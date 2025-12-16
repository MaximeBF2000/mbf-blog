import Link from 'next/link'
import { useSearch } from 'src/utils/useSearch.hook'
import { Paginate } from '../Paginate.component'
import { ProjectItem } from '../ProjectItem.component'

export function Projects({
  title,
  projects,
  hasMoreProjects = false,
  searchable = false
}) {
  const [filteredProjects, searchInputProps] = useSearch(projects, ['title'])

  return (
    <div className="mb-24">
      <div className="flex justify-between mb-12 gap-5 flex-wrap">
        <h2 className="text-3xl font-medium">{title}</h2>
        {searchable && (
          <input
            placeholder="Search articles..."
            className="p-2 w-full sm:w-1/3 rounded text-gray-900 outline-none border border-gray-900"
            {...searchInputProps}
          />
        )}
      </div>
      <Paginate
        className="mb-12"
        data={filteredProjects}
        limit={8}
        layout={({ children }) => (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">{children}</ul>
        )}
        renderItem={project => (
          <ProjectItem
            {...project}
            description={project.desc}
            key={project.slug}
          />
        )}
        renderEmpty={() => (
          <p>
            No projects to display for the search "{searchInputProps?.value}"
          </p>
        )}
      />
      {hasMoreProjects && <Link href="/projects">See more projects</Link>}
    </div>
  )
}
