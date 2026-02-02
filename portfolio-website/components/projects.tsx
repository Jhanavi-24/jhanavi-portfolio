import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"
import { ExternalLink, Github, Eye, Bot, Dumbbell, Music, BarChart3, Sprout } from "lucide-react"


const projects = [
  {
    title: "Music Generator using Genetic Algorithm",
    icon: Music,
    problem:
      "Most music generators depend on large datasets, making it hard to personalize output without retraining.",
    solution:
      "Built a melody generator that evolves music using a genetic algorithm and improves based on iterative selection (fitness).",
    solutionHighlights: ["genetic algorithm", "evolves", "fitness"],
    tools: ["TypeScript", "Genetic Algorithms", "UI/Frontend"],
    outcome:
      "Generates evolving melodies with controllable variation and selection-driven improvement.",
    github: "https://github.com/Jhanavi-24/Music-Generator-using-Genetic-Algorithm",
  },
  {
    title: "Comparative Analysis of RL Algorithms (Discrete & Continuous)",
    icon: BarChart3,
    problem:
      "Choosing the right RL algorithm depends heavily on the action space and environment dynamics.",
    solution:
      "Implemented and compared PPO, DQN, DDQN, and A2C across discrete and continuous action-space settings.",
    solutionHighlights: ["PPO", "DQN", "DDQN", "A2C"],
    tools: ["Python", "Reinforcement Learning", "Jupyter Notebook"],
    outcome:
      "Analysis highlights trade-offs in stability, sample efficiency, and performance by action space.",
    github:
      "https://github.com/Jhanavi-24/Comparative_Analysis_of_algorithms_in_discrete_and_continuous_action_spaces",
  },
  {
    title: "Crop Prediction using ThingSpeak",
    icon: Sprout,
    problem:
      "Farmers need data-driven crop recommendations based on real-time environmental conditions.",
    solution:
      "Built a crop prediction workflow using ThingSpeak sensor data (temperature, pH, rainfall, humidity) to guide crop selection.",
    solutionHighlights: ["ThingSpeak", "real-time", "prediction"],
    tools: ["Python", "ThingSpeak", "Data Analysis", "Jupyter Notebook"],
    outcome:
      "Improved crop selection decisions using real-time sensor-driven insights.",
    github: "https://github.com/Jhanavi-24/Crop-Prediction-using-ThingSpeak",
  },
  {
    title: "Surya Namaskar Trainer",
    icon: Dumbbell,
    problem:
      "Beginners struggle to learn proper Surya Namaskara (Sun Salutation) yoga poses without real-time guidance, leading to incorrect postures and potential injury.",
    solution:
      "Built an interactive platform that uses computer vision to provide real-time feedback on yoga pose correctness and alignment.",
    solutionHighlights: ["computer vision", "real-time feedback"],
    tools: ["Python", "OpenCV", "MediaPipe"],
    outcome:
      "Published research paper (DOI: JETIR2404467) demonstrating effective pose correction for yoga practitioners",
    github: "https://github.com/Jhanavi-24/Surya-Namaskar-Trainer",
  },
  {
    title: "Warehouse Robot using Q-Learning and SARSA",
    icon: Bot,
    problem:
      "Warehouse logistics require efficient automated systems for picking up and delivering parcels between locations.",
    solution:
      "Developed a reinforcement learning agent using Q-Learning and SARSA algorithms to autonomously navigate warehouse environments.",
    solutionHighlights: ["reinforcement learning", "Q-Learning", "SARSA"],
    tools: ["Python", "Gymnasium", "Reinforcement Learning"],
    outcome:
      "Agent successfully learns optimal paths for parcel delivery in complex warehouse grid environments",
    github: "https://github.com/Jhanavi-24/Warehouse_robot_reinforcement_learning",
  },
  {
    title: "AI Recipe Generator",
    icon: Eye,
    problem:
      "Users often have ingredients but lack inspiration or knowledge to create recipes, especially from visual input.",
    solution:
      "Created an AI-powered application that generates food recipes from both image and text inputs, featuring an interactive chatbot powered by OpenAI.",
    solutionHighlights: ["AI-powered", "OpenAI"],
    tools: ["Python", "Flask", "OpenAI API"],
    outcome:
      "Delivers personalized recipe recommendations based on available ingredients through natural conversation",
    github: "https://github.com/Jhanavi-24/AI-Food-Bot",
  },
]


export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">
              A selection of projects showcasing my work in ML, computer vision, and AI applications
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-border/50 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution
                          .split(new RegExp(`(${project.solutionHighlights.join("|")})`, "gi"))
                          .map((part, i) =>
                            project.solutionHighlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                              <Highlight key={i}>{part}</Highlight>
                            ) : (
                              part
                            ),
                          )}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Outcome</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs bg-secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-white hover:bg-secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
