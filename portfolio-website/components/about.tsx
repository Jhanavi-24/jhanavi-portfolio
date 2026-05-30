import { Brain, Database, Rocket, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const expertise = [
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Neural networks for computer vision, NLP, and predictive analytics",
    color: "sky",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Large-scale datasets and actionable insights",
    color: "purple",
  },
  {
    icon: Rocket,
    title: "ML Deployment",
    description: "Production-ready models with AWS and cloud infrastructure",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "Generative AI & LLMs",
    description: "Fine-tuning, RAG pipelines, and GenAI applications",
    color: "violet",
  },
]

const colorMap: Record<string, { border: string; glow: string; icon: string; bg: string }> = {
  sky:    { border: "border-sky-400/20 hover:border-sky-400/50",   glow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",   icon: "text-sky-400",    bg: "bg-sky-400/10" },
  purple: { border: "border-purple-400/20 hover:border-purple-400/50", glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]", icon: "text-purple-400", bg: "bg-purple-400/10" },
  cyan:   { border: "border-cyan-400/20 hover:border-cyan-400/50",   glow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",   icon: "text-cyan-400",   bg: "bg-cyan-400/10" },
  violet: { border: "border-violet-400/20 hover:border-violet-400/50", glow: "hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]", icon: "text-violet-400", bg: "bg-violet-400/10" },
}

export function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full mb-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <p className="text-lg text-slate-400 leading-relaxed text-pretty font-light">
                  I&apos;m a <span className="text-sky-400 font-semibold">Machine Learning Engineer</span> with a
                  Master&apos;s degree in Artificial Intelligence, specializing in building production-grade ML systems
                  that solve real-world problems.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed text-pretty font-light">
                  My expertise spans industrial inspection automation, predictive analytics, and LLM-backed
                  applications. I&apos;m passionate about model reliability, scalable data pipelines, and delivering
                  measurable business impact through intelligent systems.
                </p>
              </div>
            </ScrollReveal>
            <div className="flex justify-center">
              <ScrollReveal delay={150}>
                <div className="relative w-76 h-76 rounded-2xl overflow-hidden border-2 border-sky-400/30 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
                  <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-14">
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Expertise</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {expertise.map((item, i) => {
                const c = colorMap[item.color]
                return (
                  <ScrollReveal key={item.title} delay={100 + i * 50}>
                    <div
                      className={`space-card aspect-square flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 ${c.border} ${c.glow}`}
                    >
                      <div className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`h-7 w-7 ${c.icon}`} />
                      </div>
                      <h3 className="font-semibold text-white mb-3 text-base">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div className="mt-12">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full mb-4" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ScrollReveal delay={100}>
                <div className="space-card p-8 text-center h-full flex flex-col items-center justify-center group hover:border-sky-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all duration-300">
                  <div className="w-16 h-16 bg-sky-400/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 18.5c0 .667-.06 1.319-.175 1.95L12 14z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">M.S., Artificial Intelligence</h4>
                  <p className="text-sky-400 font-semibold mb-3">University at Buffalo</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Computer Vision · Deep Learning · Production ML Systems</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="space-card p-8 text-center h-full flex flex-col items-center justify-center group hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-400/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">B.S., Computer Science</h4>
                  <p className="text-purple-400 font-semibold mb-3">Vignana Bharathi Institute of Technology</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Algorithms · Machine Learning · AI Foundations</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
