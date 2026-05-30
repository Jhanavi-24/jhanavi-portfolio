import { Mic, Trophy, Code } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const achievements = [
  {
    icon: Mic,
    color: "sky",
    title: "ML Speaker",
    description: "Delivered an engaging machine learning-focused talk to an audience of",
    highlight: "200+ students",
    suffix: ", sharing insights on AI/ML concepts and career paths. Received a Letter of Appreciation for knowledge sharing and presentation excellence.",
  },
  {
    icon: Trophy,
    color: "purple",
    title: "ML Competition Winner",
    description: "Secured",
    highlight: "3rd place",
    suffix: " in a competitive ML challenge by developing a production-grade AI solution, demonstrating strong problem-solving skills and ability to deliver practical, deployable models under pressure.",
  },
  {
    icon: Code,
    color: "cyan",
    title: "Institutional Interface Developer",
    description: "Built a comprehensive platform that streamlined assignment submissions and improved academic workflows for the institution, showcasing",
    highlight: "full-stack development",
    suffix: " capabilities and user-centric design thinking.",
  },
]

const colorMap: Record<string, { iconBg: string; icon: string; highlight: string; border: string; glow: string }> = {
  sky:    { iconBg: "bg-sky-400/10",    icon: "text-sky-400",    highlight: "text-sky-300 font-semibold",    border: "hover:border-sky-400/40",    glow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]" },
  purple: { iconBg: "bg-purple-400/10", icon: "text-purple-400", highlight: "text-purple-300 font-semibold", border: "hover:border-purple-400/40", glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]" },
  cyan:   { iconBg: "bg-cyan-400/10",   icon: "text-cyan-400",   highlight: "text-cyan-300 font-semibold",   border: "hover:border-cyan-400/40",   glow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]" },
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const c = colorMap[achievement.color]
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`space-card p-6 h-full group transition-all duration-300 hover:-translate-y-1 ${c.border} ${c.glow}`}>
                  <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`h-6 w-6 ${c.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {achievement.description}{" "}
                    <span className={c.highlight}>{achievement.highlight}</span>
                    {achievement.suffix}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
