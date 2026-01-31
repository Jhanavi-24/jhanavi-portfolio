"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Highlight } from "@/components/keyword-highlight"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,130,150,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,130,150,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm animate-fade-up">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance animate-fade-up-delay-1">
            Jhanavi Putcha
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-up-delay-2">
            Machine Learning Engineer | Data Scientist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-up-delay-3">
            Building <Highlight>AI-driven</Highlight> solutions that transform data into measurable business impact—from{" "}
            <Highlight>computer vision</Highlight> systems processing <Highlight>30M+ daily inspections</Highlight> to{" "}
            <Highlight>production-grade ML</Highlight> models.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up-delay-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/80 hover:bg-white">
              <a href="https://github.com/Jhanavi-24/Resume/blob/main/Jhanavi-Putcha-Resume.pdf">
                View Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up-delay-3">
            <a
              href="https://github.com/Jhanavi-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/jhanavi-putcha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:jhanaviputcha957@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
