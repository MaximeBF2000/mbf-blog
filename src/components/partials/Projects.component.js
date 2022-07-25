import { ProjectItem } from '../ProjectItem.component'

export function Projects({ title, projects }) {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-medium mb-12">{title}</h2>
      <ul className="grid grid-cols-2 gap-5">
        {projects.map(project => (
          <ProjectItem
            {...project}
            description={project.desc}
            key={project.slug}
          />
        ))}
      </ul>
    </div>
  )
}
