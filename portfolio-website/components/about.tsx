import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Rocket } from "lucide-react"
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
              I&apos;m a <Highlight>Machine Learning Engineer</Highlight> with a Master&apos;s degree in AI from the
              University at Buffalo, focused on building intelligent systems that solve real-world problems at
              scale. My expertise spans <Highlight>computer vision</Highlight>, <Highlight>deep learning</Highlight>, and
              end-to-end ML pipeline development—from data preprocessing to production deployment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              I&apos;ve worked on AI solutions ranging from industrial inspection systems processing millions of daily
              items to market segmentation models driving business strategy. I thrive at the intersection of research
              and application, leveraging tools like <Highlight>TensorFlow</Highlight>, <Highlight>PyTorch</Highlight>,
              and <Highlight>AWS</Highlight> to deliver measurable outcomes.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
