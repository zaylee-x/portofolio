import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/projects/projects"
import { AboutMe } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  )
}
