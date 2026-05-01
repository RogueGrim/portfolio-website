import React from "react"

function Hero(): React.JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-2xl">
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
          <a
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero