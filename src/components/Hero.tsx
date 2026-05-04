import React from "react"
import { motion } from "framer-motion"

function Hero(): React.JSX.Element {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
        >
        {/* Availability badge */}
        <p className="text-sm text-green-400 mb-4">
          ● Available for freelance work
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          I build fast & scalable
          <span className="text-blue-500"> web apps</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 mb-8">
          MCA student & developer focused on creating clean, performant,
          and user-friendly applications using modern web technologies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero