import { useState } from "react"
import React from "react"
import { motion } from "framer-motion"

type NavItem = {
  label: string
  href: string
}

type props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const navItems: NavItem[] = [
  { label: "Technologies", href:"#skills"},
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
]

function Navbar({darkMode, setDarkMode}: props): React.JSX.Element {
  const [active, setActive] = useState<string>("")
  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="fixed w-full top-0 z-50 backdrop-blur dark:bg-black dark:text-white" 
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-md">EA.</h1>

        <div className="flex space-x-5 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`transition ${
                active === item.label
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {item.label}
            </a>
          ))}
          {
            darkMode == true ? 
            <button
              onClick={()=>setDarkMode(false)}
            >
              <img src="/light.png" alt="" className="w-6 h-6 dark:invert"/>
            </button>:
            <button
              onClick={()=>setDarkMode(true)}
            >
              <img src="/dark.png" alt="" className="w-6 h-6"/>
            </button>
          }
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar