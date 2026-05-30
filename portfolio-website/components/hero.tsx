"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"

const Constellation = dynamic(() => import("@/components/constellation").then((m) => ({ default: m.Constellation })), {
  ssr: false,
})

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Interactive constellation background */}
      <div className="absolute inset-0 z-10">
        <Constellation />
      </div>

      {/* Nebula accent glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none z-5" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none z-5" />

      <div className="container mx-auto px-6 relative z-20 pointer-events-none">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/5 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <p className="text-sky-400 font-medium tracking-wide uppercase text-xs">
              Machine Learning Engineer & Data Scientist
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance animate-fade-up-delay-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
              Jhanavi Putcha
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-6 animate-fade-up-delay-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
            Building AI-driven systems for computer vision, deep learning, and production ML
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-up-delay-3">
            I design and ship ML systems that turn data into measurable business outcomes — from high-throughput
            computer-vision pipelines to scalable model deployments and LLM-powered applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up-delay-3 pointer-events-auto">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white border-0 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              <Link href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-sky-400/30 bg-sky-400/5 text-sky-300 hover:bg-sky-400/15 hover:border-sky-400/60 hover:text-sky-200 transition-all duration-300"
            >
              <a href="https://github.com/Jhanavi-24/Resume/blob/main/Jhanavi%20Putcha%20-%20Resume.pdf" target="_blank">
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400/30 bg-purple-400/5 text-purple-300 hover:bg-purple-400/15 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-300"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up-delay-3 pointer-events-auto">
            <a
              href="https://github.com/Jhanavi-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jhanavi-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:jhanaviputcha957@gmail.com"
              className="text-slate-500 hover:text-sky-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="h-5 w-5 text-sky-400/60" />
      </div>
    </section>
  )
}
