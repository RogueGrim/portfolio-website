import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"

function App(): React.JSX.Element {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App