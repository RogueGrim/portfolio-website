import { Navbar }  from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { useState } from "react"

function App(): React.JSX.Element {

  const [ darkMode, setDarkMode ] =useState<boolean>(true)

  return (
    <div className ={`${darkMode == true ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App