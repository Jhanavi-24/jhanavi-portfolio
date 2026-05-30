import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chatbot"
import { StarfieldLoader } from "@/components/starfield-loader"
import { CursorLoader } from "@/components/cursor-loader"

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: "#020817" }}>
      {/* Animated space background */}
      <StarfieldLoader />

      {/* All content sits above the starfield */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="space-divider" />
        <About />
        <div className="space-divider" />
        <Skills />
        <div className="space-divider" />
        <Experience />
        <div className="space-divider" />
        <Projects />
        <div className="space-divider" />
        <Achievements />
        <div className="space-divider" />
        <Contact />
        <Footer />
      </div>

      {/* Floating chatbot */}
      <ChatBot />

      {/* Custom space cursor */}
      <CursorLoader />
    </main>
  )
}
