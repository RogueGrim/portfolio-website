import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { useState } from "react"

function App(): React.JSX.Element {

  const [ darkMode, setDarkMode ] =useState<boolean>(false)

  return (
    <div className ={darkMode == true ? 'dark' : 'bg-white'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills reverse={true}/>
      <Projects />
    </div>
  )
}

export default App