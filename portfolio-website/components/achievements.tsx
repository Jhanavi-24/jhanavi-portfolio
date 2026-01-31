import { Card, CardContent } from "@/components/ui/card"
import { Mic, Trophy, Code } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"

const achievements = [
  {
    icon: Mic,
    title: "ML Speaker",
    description: "Delivered an engaging machine learning-focused talk to an audience of",
    highlight: "200+ students",
    suffix:
      ", sharing insights on AI/ML concepts and career paths. Received a Letter of Appreciation for knowledge sharing and presentation excellence.",
  },
  {
    icon: Trophy,
    title: "ML Competition Winner",
    description: "Secured",
    highlight: "3rd place",
    suffix:
      "in a competitive ML challenge by developing a production-grade AI solution, demonstrating strong problem-solving skills and ability to deliver practical, deployable models under pressure.",
  },
  {
    icon: Code,
    title: "Institutional Interface Developer",
    description:
      "Built a comprehensive platform that streamlined assignment submissions and improved academic workflows for the institution, showcasing",
    highlight: "full-stack development",
    suffix: "capabilities and user-centric design thinking.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-border/50 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description} <Highlight>{achievement.highlight}</Highlight> {achievement.suffix}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
