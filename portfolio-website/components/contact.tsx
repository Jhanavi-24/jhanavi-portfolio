import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">
              I&apos;m always open to discussing new opportunities, AI/ML projects, or just connecting with fellow tech
              enthusiasts.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50 bg-white">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  <a
                    href="mailto:jhanaviputcha957@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">jhanaviputcha957@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/jhanavi-putcha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">linkedin.com/in/jhanavi-putcha</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Jhanavi-24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Github className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground">github.com/Jhanavi-24</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+1 (716) 957-9522</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Buffalo, NY, USA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <Button asChild size="lg" className="gap-2">
                    <a href="mailto:jhanaviputcha957@gmail.com">
                      <Mail className="h-4 w-4" />
                      Send me an email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
