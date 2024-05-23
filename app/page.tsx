import Link from "next/link"
import { Button } from "@/components/ui/button"
import {RocketIcon} from "./components/icons"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Achievements from "./components/achievements"
import Education from "./components/education"
import GetInTouch from "./components/getInTouch"
import Blog from "./components/blog"
import Footer from "./components/footer"

export default function Component() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <RocketIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Roberto Laura</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="hover:underline cursor-pointer transition-all duration-500 ease-in-out" href="#about">
            About
          </Link>
          <Link className="hover:underline cursor-pointer transition-all duration-500 ease-in-out" href="#services">
            Services
          </Link>
          <Link className="hover:underline" href="#achievements">
            Achievements
          </Link>
          <Link className="hover:underline" href="#education">
            Education
          </Link>
          <Link className="hover:underline" href="#blogs">
            Blogs
          </Link>
          <Link className="hover:underline" href="#contact">
            Contact
          </Link>
        </nav>
        <Button className="lg:hidden">
          Menu
        </Button>
      </header>

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
