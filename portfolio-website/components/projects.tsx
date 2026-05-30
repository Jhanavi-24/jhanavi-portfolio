import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Github, Eye, Bot, Dumbbell, Music, BarChart3, Sprout } from "lucide-react"

const projects = [
  {
    title: "Music Generator using Genetic Algorithm",
    icon: Music,
    color: "purple",
    problem: "Most music generators depend on large datasets, making it hard to personalize output without retraining.",
    solution: "Built a melody generator that evolves music using a genetic algorithm and improves based on iterative selection (fitness).",
    solutionHighlights: ["genetic algorithm", "evolves", "fitness"],
    tools: ["TypeScript", "Genetic Algorithms", "UI/Frontend"],
    outcome: "Generates evolving melodies with controllable variation and selection-driven improvement.",
    github: "https://github.com/Jhanavi-24/Music-Generator-using-Genetic-Algorithm",
  },
  {
    title: "Comparative Analysis of RL Algorithms",
    icon: BarChart3,
    color: "sky",
    problem: "Choosing the right RL algorithm depends heavily on the action space and environment dynamics.",
    solution: "Implemented and compared PPO, DQN, DDQN, and A2C across discrete and continuous action-space settings.",
    solutionHighlights: ["PPO", "DQN", "DDQN", "A2C"],
    tools: ["Python", "Reinforcement Learning", "Jupyter Notebook"],
    outcome: "Analysis highlights trade-offs in stability, sample efficiency, and performance by action space.",
    github: "https://github.com/Jhanavi-24/Comparative_Analysis_of_algorithms_in_discrete_and_continuous_action_spaces",
  },
  {
    title: "Crop Prediction using ThingSpeak",
    icon: Sprout,
    color: "cyan",
    problem: "Farmers need data-driven crop recommendations based on real-time environmental conditions.",
    solution: "Built a crop prediction workflow using ThingSpeak sensor data (temperature, pH, rainfall, humidity) to guide crop selection.",
    solutionHighlights: ["ThingSpeak", "real-time", "prediction"],
    tools: ["Python", "ThingSpeak", "Data Analysis", "Jupyter Notebook"],
    outcome: "Improved crop selection decisions using real-time sensor-driven insights.",
    github: "https://github.com/Jhanavi-24/Crop-Prediction-using-ThingSpeak",
  },
  {
    title: "Surya Namaskar Trainer",
    icon: Dumbbell,
    color: "violet",
    problem: "Beginners struggle to learn proper Surya Namaskara yoga poses without real-time guidance, leading to incorrect postures and potential injury.",
    solution: "Built an interactive platform that uses computer vision to provide real-time feedback on yoga pose correctness and alignment.",
    solutionHighlights: ["computer vision", "real-time feedback"],
    tools: ["Python", "OpenCV", "MediaPipe"],
    outcome: "Published research paper (DOI: JETIR2404467) demonstrating effective pose correction for yoga practitioners",
    github: "https://github.com/Jhanavi-24/Surya-Namaskar-Trainer",
  },
  {
    title: "Warehouse Robot using Q-Learning and SARSA",
    icon: Bot,
    color: "indigo",
    problem: "Warehouse logistics require efficient automated systems for picking up and delivering parcels between locations.",
    solution: "Developed a reinforcement learning agent using Q-Learning and SARSA algorithms to autonomously navigate warehouse environments.",
    solutionHighlights: ["reinforcement learning", "Q-Learning", "SARSA"],
    tools: ["Python", "Gymnasium", "Reinforcement Learning"],
    outcome: "Agent successfully learns optimal paths for parcel delivery in complex warehouse grid environments",
    github: "https://github.com/Jhanavi-24/Warehouse_robot_reinforcement_learning",
  },
  {
    title: "AI Recipe Generator",
    icon: Eye,
    color: "sky",
    problem: "Users often have ingredients but lack inspiration or knowledge to create recipes, especially from visual input.",
    solution: "Created an AI-powered application that generates food recipes from both image and text inputs, featuring an interactive chatbot powered by OpenAI.",
    solutionHighlights: ["AI-powered", "OpenAI"],
    tools: ["Python", "Flask", "OpenAI API"],
    outcome: "Delivers personalized recipe recommendations based on available ingredients through natural conversation",
    github: "https://github.com/Jhanavi-24/AI-Food-Bot",
  },
]

const colorMap: Record<string, { iconBg: string; icon: string; label: string; border: string; toolBadge: string; btn: string }> = {
  purple: { iconBg: "bg-purple-400/10", icon: "text-purple-400", label: "text-purple-400", border: "hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]", toolBadge: "bg-purple-400/10 border-purple-400/20 text-purple-300", btn: "border-purple-400/30 text-purple-300 hover:bg-purple-400/10 hover:border-purple-400/50" },
  sky:    { iconBg: "bg-sky-400/10",    icon: "text-sky-400",    label: "text-sky-400",    border: "hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]",    toolBadge: "bg-sky-400/10 border-sky-400/20 text-sky-300",       btn: "border-sky-400/30 text-sky-300 hover:bg-sky-400/10 hover:border-sky-400/50" },
  cyan:   { iconBg: "bg-cyan-400/10",   icon: "text-cyan-400",   label: "text-cyan-400",   border: "hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",    toolBadge: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300",     btn: "border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50" },
  violet: { iconBg: "bg-violet-400/10", icon: "text-violet-400", label: "text-violet-400", border: "hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]", toolBadge: "bg-violet-400/10 border-violet-400/20 text-violet-300", btn: "border-violet-400/30 text-violet-300 hover:bg-violet-400/10 hover:border-violet-400/50" },
  indigo: { iconBg: "bg-indigo-400/10", icon: "text-indigo-400", label: "text-indigo-400", border: "hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]", toolBadge: "bg-indigo-400/10 border-indigo-400/20 text-indigo-300", btn: "border-indigo-400/30 text-indigo-300 hover:bg-indigo-400/10 hover:border-indigo-400/50" },
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-slate-400">
              A selection of projects showcasing my work in ML, computer vision, and AI applications
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const c = colorMap[project.color]
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`space-card flex flex-col h-full group transition-all duration-300 hover:-translate-y-1 ${c.border}`}>
                  <div className="p-6 pb-2">
                    <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`h-6 w-6 ${c.icon}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>

                  <div className="px-6 pb-4 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.label}`}>Problem</h4>
                        <p className="text-sm text-slate-400">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.label}`}>Solution</h4>
                        <p className="text-sm text-slate-400">
                          {project.solution
                            .split(new RegExp(`(${project.solutionHighlights.join("|")})`, "gi"))
                            .map((part, i) =>
                              project.solutionHighlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                                <span key={i} className={`font-medium ${c.icon}`}>{part}</span>
                              ) : (
                                part
                              ),
                            )}
                        </p>
                      </div>
                      <div>
                        <h4 className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.label}`}>Outcome</h4>
                        <p className="text-sm text-slate-400">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tools.map((tool) => (
                          <span key={tool} className={`text-xs border rounded-md px-2.5 py-1 ${c.toolBadge}`}>
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${c.btn}`}
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
