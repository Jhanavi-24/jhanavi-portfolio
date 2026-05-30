import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "LLM & Generative AI",
    color: "purple",
    skills: [
      "LLM Fine-Tuning (LoRA, SFT)",
      "RAG",
      "BM25 + Dense Retrieval",
      "Hugging Face Transformers",
      "LLaMA",
      "Embeddings",
      "Prompt Engineering",
      "Pinecone",
      "LangChain",
      "LangGraph",
      "Multimodal Diffusion Models",
    ],
  },
  {
    title: "Machine Learning & AI",
    color: "sky",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "XGBoost",
      "LightGBM",
      "Deep Learning (PyTorch, TensorFlow)",
      "CNNs",
      "Transformers",
      "NLP",
      "Time-Series Forecasting",
      "Feature Engineering",
      "Hyperparameter Optimization",
      "A/B Testing",
      "Causal Inference",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    color: "cyan",
    skills: [
      "AWS S3",
      "EC2",
      "Lambda",
      "SageMaker",
      "RDS",
      "CloudWatch",
      "REST APIs",
      "Microservices Architecture",
    ],
  },
  {
    title: "Programming & Data",
    color: "violet",
    skills: [
      "Python (NumPy, Pandas)",
      "SQL",
      "PySpark",
      "Spark",
      "Kafka",
      "ETL",
      "Snowflake",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "MLOps & Deployment",
    color: "indigo",
    skills: [
      "Docker",
      "Kubernetes",
      "MLflow",
      "CI/CD (GitHub Actions)",
      "FastAPI",
      "Model Deployment",
      "Model Monitoring",
      "Drift Detection",
      "Grafana",
      "SHAP Explainability",
      "Model Versioning",
    ],
  },
]

const colorMap: Record<string, { dot: string; badge: string; header: string; border: string }> = {
  purple: {
    dot: "bg-purple-400",
    badge: "bg-purple-400/10 border-purple-400/25 text-purple-300 hover:bg-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)]",
    header: "text-purple-400",
    border: "hover:border-purple-400/40",
  },
  sky: {
    dot: "bg-sky-400",
    badge: "bg-sky-400/10 border-sky-400/25 text-sky-300 hover:bg-sky-400/20 hover:border-sky-400/50 hover:shadow-[0_0_8px_rgba(56,189,248,0.3)]",
    header: "text-sky-400",
    border: "hover:border-sky-400/40",
  },
  cyan: {
    dot: "bg-cyan-400",
    badge: "bg-cyan-400/10 border-cyan-400/25 text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_8px_rgba(6,182,212,0.3)]",
    header: "text-cyan-400",
    border: "hover:border-cyan-400/40",
  },
  violet: {
    dot: "bg-violet-400",
    badge: "bg-violet-400/10 border-violet-400/25 text-violet-300 hover:bg-violet-400/20 hover:border-violet-400/50 hover:shadow-[0_0_8px_rgba(139,92,246,0.3)]",
    header: "text-violet-400",
    border: "hover:border-violet-400/40",
  },
  indigo: {
    dot: "bg-indigo-400",
    badge: "bg-indigo-400/10 border-indigo-400/25 text-indigo-300 hover:bg-indigo-400/20 hover:border-indigo-400/50 hover:shadow-[0_0_8px_rgba(99,102,241,0.3)]",
    header: "text-indigo-400",
    border: "hover:border-indigo-400/40",
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const c = colorMap[category.color]
            return (
              <ScrollReveal key={category.title} delay={index * 100}>
                <div className={`space-card p-6 h-full transition-all duration-300 ${c.border}`}>
                  <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${c.header}`}>
                    <span className={`w-2 h-2 ${c.dot} rounded-full`} />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center border rounded-lg px-3 py-1.5 text-xs font-medium cursor-default transition-all duration-200 ${c.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
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
