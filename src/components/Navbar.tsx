import { useState } from "react"
import React from "react"
import { motion } from "framer-motion"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

function Navbar(): React.JSX.Element {
  const [active, setActive] = useState<string>("")

  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">grimRogue</h1>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`transition ${
                active === item.label
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar