import { useState } from "react"
import React from "react"
import { motion } from "framer-motion"
import darkMode from "../assets/dark.svg"
import lightMode from "../assets/light.svg"

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

function Navbar(): React.JSX.Element {
  const [active, setActive] = useState<string>("")
  const [Mode, setMode] = useState<string>("Dark")

  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="fixed w-full top-0 z-50 backdrop-blur"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-md">EA.</h1>

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
           {Mode == "Dark" ? <img src={lightMode} alt="Dark Mode"  className="max-w-8"/> 
            : <img src={darkMode} alt="Dark Mode"  className="max-w-8"/>  }
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar