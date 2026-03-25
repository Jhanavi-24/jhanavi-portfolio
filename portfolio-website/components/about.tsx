import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Rocket, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center text-pretty">
              I&apos;m a <Highlight>Machine Learning Engineer</Highlight> (M.S., Artificial Intelligence) with experience
              building production-grade ML systems for industrial inspection, predictive analytics, and LLM-backed
              applications. I focus on model reliability, scalable data pipelines, and measurable business impact.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card className="border-border/50 bg-white hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Building neural networks for computer vision, NLP, and predictive analytics
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-border/50 bg-white hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Processing and analyzing large-scale datasets for actionable insights
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-border/50 bg-white hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">ML Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploying production-ready models with AWS and cloud infrastructure
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Card className="border-border/50 bg-white hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Generative AI & LLMs</h3>
                  <p className="text-sm text-muted-foreground">
                    Fine-tuning LLMs (LoRA, SFT), building RAG pipelines, embeddings, prompt engineering, and
                    deploying GenAI applications.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              </div>
            </ScrollReveal>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ScrollReveal>
                <Card className="border-border/50 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">M.S., Artificial Intelligence</h4>
                    <p className="text-sm text-muted-foreground mb-2">University at Buffalo</p>
                    <p className="text-sm text-muted-foreground">Focus: Computer Vision, Deep Learning, Production ML</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-border/50 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 18.5c0 .667-.06 1.319-.175 1.95L12 14z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">B.S., Computer Science (AI & ML)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Vignana Bharathi Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Relevant: Algorithms · Data Structures · Machine Learning · AI Foundations</p>
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
