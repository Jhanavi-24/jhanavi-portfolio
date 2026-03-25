import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "LLM & Generative AI",
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
