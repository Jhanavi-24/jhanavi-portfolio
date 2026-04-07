import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Rocket, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"

export function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty font-light">
                  I&apos;m a <Highlight>Machine Learning Engineer</Highlight> with a Master&apos;s degree in Artificial Intelligence, specializing in building production-grade ML systems that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty font-light">
                  My expertise spans industrial inspection automation, predictive analytics, and LLM-backed applications. I'm passionate about model reliability, scalable data pipelines, and delivering measurable business impact through intelligent systems.
                </p>
              </div>
            </ScrollReveal>
            <div className="flex justify-center">
              <ScrollReveal delay={150}>
                <div className="relative w-76 h-76 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="mb-14">
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Expertise</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ScrollReveal delay={100}>
              <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 aspect-square flex flex-col group">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-base">Deep Learning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Neural networks for computer vision, NLP, and predictive analytics
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 aspect-square flex flex-col group">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-base">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Large-scale datasets and actionable insights
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 aspect-square flex flex-col group">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-base">ML Deployment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Production-ready models with AWS and cloud infrastructure
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 aspect-square flex flex-col group">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-base">Generative AI & LLMs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fine-tuning, RAG pipelines, and GenAI applications
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          </div>

          <div className="mt-12">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ScrollReveal delay={100}>
                <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">M.S., Artificial Intelligence</h4>
                    <p className="text-primary font-semibold mb-3">University at Buffalo</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Computer Vision · Deep Learning · Production ML Systems</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <Card className="border-border/50 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 18.5c0 .667-.06 1.319-.175 1.95L12 14z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">B.S., Computer Science</h4>
                    <p className="text-primary font-semibold mb-3">Vignana Bharathi Institute of Technology</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Algorithms · Machine Learning · AI Foundations</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
