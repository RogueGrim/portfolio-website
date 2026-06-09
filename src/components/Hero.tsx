import React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import Contact from "./Contact"

function GradientText() {
  const mouseX = useMotionValue(50)

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  })

  const backgroundImage = useMotionTemplate`
    radial-gradient(
      circle at ${smoothX}% 50%,
      #60a5fa 0%,
      #8b5cf6 25%,
      #ec4899 50%,
      #60a5fa 100%
    )
  `

const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const percentage =
      ((e.clientX - rect.left) / rect.width) * 100

    mouseX.set(percentage)
  }

  return (
    <div
      onMouseMove={handleMove}
      className="inline-block"
    >
      <motion.h1
        style={{
          backgroundImage,
          backgroundSize: "200% 200%",
        }}
        className="
          text-8xl
          md:text-9xl
          font-bold
          text-transparent
          bg-clip-text
          mb-6
          select-none
        "
      >
        Equan Asim
      </motion.h1>
    </div>
  )
}

function Hero(): React.JSX.Element {
  return (
    <section id="home" className="min-h-screen flex justify-center flex-col dark:bg-black dark:text-white">
      <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-6 py-6"
        >
        <p className="text-lg md:mb-4 mt-8">
          Hey, I'm
        </p>
        
        <GradientText/>

        {/* Subtext */}
        <p className="mb-6 text-lg text-balanced hidden md:block">
          I'm an MCA student and aspiring full-stack developer with a strong
          interest in building real-world applications.
          I focus on writing clean, maintainable code and creating smooth user
          experiences. Currently, I'm improving my backend skills while building
          full-stack projects.
          My goal is to work on impactful products and help businesses turn ideas
          into scalable applications.
        </p>
        <p className="md:hidden mb-4">
          I focus on writing clean, maintainable code and creating smooth user
          experiences.
        </p>

        <motion.a
          href="#projects"
          initial="rest"
          whileHover="hover"
          className="inline-flex items-center gap-2"
        >
          <motion.span
            whileHover={{scale:1.1}}
          >
          See More
          </motion.span>
        
          <motion.span
            variants={{
              rest:{
                x:0,
              },
              hover:{
                x:8,
                transition:{
                  x:{
                    type:"spring",
                    stiffness: 300,
                  },
                  y: {
                    duration: 0.4,
                  },
                },
              },
            }}
          >
          →
          </motion.span>
        </motion.a>
      </motion.div>
    <Contact/>
    </section>
  )
}

export default Hero