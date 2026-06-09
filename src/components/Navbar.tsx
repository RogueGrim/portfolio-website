import { useState, useEffect } from "react"
import React from "react"
import { motion } from "framer-motion"
import MobileNav from "./mobileNav"

type NavItem = {
  label: string
  href: string
}

type props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const navItems: NavItem[] = [
  {label:'Home', href:'#home'},
  { label: "Technologies", href:"#skills"},
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
]

function Navbar({darkMode, setDarkMode}: props): React.JSX.Element {

  const [active, setActive] = useState<string>("")

  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
  const sections = document.querySelectorAll("section")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        switch (entry.target.id) {
          case "home":
            setActive('Home')
            break
          case "skills":
            setActive("Technologies")
            break

          case "projects":
            setActive("Projects")
            break

          case "resume":
            setActive("Resume")
            break
        }
      })
    },
    {
      rootMargin: "-20% 0px -60% 0px",
    }
  )

  sections.forEach(section =>
    observer.observe(section)
  )

  return () => observer.disconnect()
}, [])

  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="fixed w-full top-0 z-50 backdrop-blur  dark:text-white" 
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-md">EA.</h1>

        <div className="flex space-x-5 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`dark:bg-white bg-black  md:block hidden ${
                active === item.label
                  ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                  : "hover:bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              }`}
            >
              {item.label}
            </a>
          ))}
            {darkMode == true ? 
            <button
              onClick={()=>setDarkMode(false)}
            >
              <img src="/light.png" alt="" className="w-6 h-6 dark:invert cursor-pointer"/>
            </button>:
            <button
              onClick={()=>setDarkMode(true)}
            >
              <img src="/dark.png" alt="" className="w-6 h-6 cursor-pointer"/>
            </button>}
          <div 
            className="
              md:hidden
              border 
              border-black
              dark:border-white
              rounded-sm 
              h-6 w-6 
              flex 
              flex-col 
              justify-evenly 
              items-center 
              cursor-pointer
              on
            "
            onClick={()=> isVisible == true ? setIsVisible(false) : setIsVisible(true)}
          >
            <span className="w-6/10 border border-black dark:border-white"></span>
            <span className="w-6/10 border border-black dark:border-white"></span>
            <span className="w-6/10 border border-black dark:border-white"></span>
          </div>
        </div>
      </div>
      <MobileNav navItems={navItems} isVisible={isVisible} setIsVisible={setIsVisible} active={active}/>
    </motion.nav>
  )
}

export { type NavItem ,Navbar }  