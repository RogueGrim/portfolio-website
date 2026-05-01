import React from "react"
import { motion } from "framer-motion"
import { container, item } from "./stagger"

const skills: string[] = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TypeScript",
  "Git",
]

function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <motion.div
            variants={container}
            initial="hidden"
            whileInView="show" 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto"
        >
        {skills.map((skill: string) => (
          <motion.div
            key={skill}
            variants={item}
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills