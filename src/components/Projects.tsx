import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  technologies: string[]
  live: string
  code: string
  image: string
}

const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "Shopping app with cart and checkout",
    technologies: ['React','TailwindCSS','Typescript'],
    live: "#",
    code: "#",
    image: '/stock.jpg'
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard with analytics",
    technologies: ['React','TailwindCSS','Typescript'],
    live: "#",
    code: "#",
    image: "/stock.jpg"
  },
   {
    title: "Portfolio Page",
    description: "PortFolio Page",
    technologies: ['React','TailwindCSS','Typescript'],
    live: "#",
    code: "#",
    image: "/stock.jpg"
  },
]

function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 max-w-6xl mx-auto place-items-center">
        {projects.map((project) => (
          <motion.div 
            key={project.title} 
            className="max-w-max" 
            whileHover={{scale:1.05}}
            transition={{ease:'linear'}}
            >
            <img src={project.image} alt={project.title}  className="mb-2 h-64 object-cover w-90"/>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex items-center gap-2">
              {project.technologies.map((tech)=>(
                <p className='bg-blue-500/10 text-blue-400 border border-blue500/20 px-2 text-sm rounded-full mb-4'>{tech}</p>
              ))}
            </div>

            <div className="space-x-4 flex ">
              <a href={project.live}>
                <button>
                  <img src="/link.png" alt="live" className='w-6 h-6'/>
                </button>
              </a>
              <a href={project.code} className='appearance-none'>
                <button>
                  <img src="/github.png" alt="github" className='w-6 h-6'/>
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects