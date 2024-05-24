import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Achievements from "./components/achievements"
import Education from "./components/education"
import GetInTouch from "./components/getInTouch"
import Blog from "./components/blog"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

export default function Component() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About id="about"/>
        <Services id="services" />
        <Achievements id="achievements" />
        <Education id="education" />
        <Blog id="blog" />
        <GetInTouch id="contact" />
      </main>
      <Footer />
    </div>
  )
}
