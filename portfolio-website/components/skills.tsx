import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL", "R", "Java", "HTML"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Scikit-Learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "NLTK", "SpaCy", "Flask", "Spark"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "MySQL", "Power BI", "Tableau"],
  },
  {
    title: "Cloud (AWS)",
    skills: ["EC2", "S3", "SageMaker", "Cognito", "API Gateway", "DynamoDB"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div className="bg-white border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
