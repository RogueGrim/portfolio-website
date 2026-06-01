import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App(): React.JSX.Element {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Skills reverse={true}/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App