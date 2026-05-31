import { motion } from "framer-motion"

type reverse = {
  reverse?: boolean
}

function Skills({reverse}: reverse ): React.JSX.Element{

  type skills = {
    name:string
    image:string
  }

  const skills:skills[] = [
    {
      name: "React",
      image: "/react.png",
    },
    {
      name:"Node JS",
      image:"/node.png"
    },
    {
      name: "TypeScript",
      image: "/typescript.png",
    },
    {
      name: "Node",
      image: "/node.png",
    },
    {
      name: "Postgres",
      image: "postgre.png",
    },
    {
      name: "HTML",
      image: "/html.png",
    },
    {
      name:"CSS",
      image:"/css.png"
    },
    {
      name:'GitHub',
      image:'/github.png'
    },
    {
      name:"Git",
      image:"/git.png"
    }

  ]

  return (
    <section id="skills" className="py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto px-6 py-4">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 w-max"
              animate={{
              x: reverse
                ? ["-50%", "0%"]
                : ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    px-6
                    py-4
                    rounded-xl
                    bg-zinc-900
                    border
                    border-zinc-800
                  "
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8"
                  />

                  <span>{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      
    </section>
  )
}

export default Skills