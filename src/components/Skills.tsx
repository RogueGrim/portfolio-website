import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

type reverse = {
  reverse?: boolean
}

function Conveyor({reverse}:reverse): React.JSX.Element {

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
      name:"NodeJS",
      image:"/node.png"
    },
    {
      name: "TypeScript",
      image: "/typescript.png",
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
  const controls = useAnimationControls()

  useEffect(()=>{

    controls.start({
      x: reverse
      ? ["-50%", "0%"]
      : ["0%", "-50%"],
      transition:{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    })
  },[controls,reverse])

  return(
    <div 
      className="
        overflow-hidden
        white_90%,
        transparent
        mb-6
      ">
      <motion.div
        className="flex gap-8 w-max"
        onHoverStart={()=>controls.stop()}
        onHoverEnd={()=>{
          controls.start({
            x: reverse
            ? ["-50%", "0%"]
            : ["0%", "-50%"],
            transition:{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          })
        }}
        animate={controls}
        >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            className="
              flex
              items-center
              gap-3
              px-6
              py-4
              rounded-xl
              backdrop-blur-md
            bg-white/5
              border
            border-black/10
            "
            whileHover={{
              scale:1.1
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className={index == 6 ? 'w-8 h-8 dark:invert' : 'w-8 h-8'}
            />

            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )

}


function Skills(): React.JSX.Element{

  return (
    <section id="skills" className="py-20 px-6 dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold mb-10">Technologies</h2>
        <Conveyor/>
        <Conveyor reverse={true}/>
      </div>
      
    </section>
  )
}

export default Skills