type Project = {
  title: string
  description: string
  live: string
  code: string
}

const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "Shopping app with cart and checkout",
    live: "#",
    code: "#",
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard with analytics",
    live: "#",
    code: "#",
  },
]

function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="space-x-4">
              <a href={project.live} className="text-blue-500">
                Live
              </a>
              <a href={project.code} className="text-blue-500">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects