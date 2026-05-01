import React from "react"
import { motion } from "framer-motion"

function About(): React.JSX.Element {
  return (
    <section className="py-24 px-6">
      <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }} 
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
        
        {/* Left side (text) */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 mb-4">
            I'm an MCA student and aspiring full-stack developer with a strong
            interest in building real-world applications.
          </p>

          <p className="text-gray-400 mb-4">
            I focus on writing clean, maintainable code and creating smooth user
            experiences. Currently, I'm improving my backend skills while building
            full-stack projects.
          </p>

          <p className="text-gray-400">
            My goal is to work on impactful products and help businesses turn ideas
            into scalable applications.
          </p>
        </div>

        {/* Right side (image / placeholder) */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-500">
            Your Image
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About