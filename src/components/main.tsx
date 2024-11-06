import Navbar from "./Navbar"
import Hero from "./hero"
import Projects from "./projects"
import Skills from "./skills"
import Footer from "./footer"
const main = () => {
  return (
    <div className="bg-red-600">
        <Navbar />
        <Hero/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default main
