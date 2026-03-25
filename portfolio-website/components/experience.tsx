import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"

const experiences = [
  {
    title: "AI/ML Engineer",
    company: "Triosoft LLC",
    type: "Hybrid — New York",
    date: "May 2025 — Present",
    location: "New York, NY (Hybrid)",
    bullets: [
      { text: "Constructed transformer-based NLP models for automated extraction of financial insights from 87+ unstructured reports per week, reducing analyst effort by 18% and improving signal-to-noise ratio in investment research pipelines.", highlights: ["87+ reports/week", "18% analyst effort reduction"], suffix: "" },
      { text: "Engineered reinforcement learning models for portfolio optimization, simulating 24+ market scenarios per asset class and achieving a 6% improvement in risk-adjusted returns.", highlights: ["reinforcement learning", "6% improvement"], suffix: "" },
      { text: "Implemented PyTorch/TensorFlow deep learning models for credit risk scoring and market anomaly detection, processing >15 million transaction records monthly and achieving 93% coverage of critical high-risk events.", highlights: [">15M transactions/month", "93% coverage"], suffix: "" },
      { text: "Deployed generative AI models and LLMs to automatically generate investment summaries from 80+ financial reports weekly, improving turnaround time by 20%.", highlights: ["80+ reports/week", "20% faster"], suffix: "" },
      { text: "Orchestrated end-to-end MLOps pipelines on AWS for training, evaluation, deployment, and drift monitoring, supporting 95+ automated retraining cycles per quarter with <5s latency for real-time scoring.", highlights: ["AWS", "95+ retraining cycles/quarter"], suffix: "" },
      { text: "Fine-tuned LLMs using Hugging Face to automate extraction and summarization for 78+ reports weekly, improving insight generation efficiency by 18%.", highlights: ["Hugging Face", "78+ reports/week"], suffix: "" },
      { text: "Implemented a RAG pipeline combining vector DB retrieval with generative AI to produce context-aware investment insights from 59+ documents weekly, improving information accuracy by 15%.", highlights: ["RAG", "15% accuracy improvement"], suffix: "" },
    ],
    skills: ["Transformers", "PyTorch", "TensorFlow", "LLMs", "Hugging Face", "RAG", "AWS", "MLOps"],
  },
  {
    title: "Machine Learning Scientist",
    company: "LTIMindtree",
    type: "Full-time",
    date: "Jan 2022 — Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      { text: "Architected time-series forecasting models on Spark and Snowflake for predicting vehicle component failures, improving predictive maintenance accuracy by 18% and reducing unplanned downtime by 12% across 25+ production lines.", highlights: ["Spark", "Snowflake", "18% accuracy"], suffix: "" },
      { text: "Engineered real-time anomaly detection pipelines using LSTM and XGBoost on sensor and telemetry data, identifying 83 critical anomalies per month and increasing system reliability by 15%.", highlights: ["LSTM", "XGBoost", "83 anomalies/month"], suffix: "" },
      { text: "Designed ETL pipelines in Python and PySpark to process 20 TB/month of vehicle data with low-latency ingestion (<5s), enabling 95% data availability for model training.", highlights: ["20 TB/month", "<5s ingestion"], suffix: "" },
      { text: "Built interactive Power BI dashboards surfacing 95+ KPIs across fleet health and production efficiency for 17+ stakeholders.", highlights: ["Power BI", "95+ KPIs"], suffix: "" },
      { text: "Optimized hyperparameter tuning for LightGBM, XGBoost, and LSTM models, improving forecasting precision by 12% and reducing MAE/RMSE by 15%.", highlights: ["LightGBM", "XGBoost", "12% precision"], suffix: "" },
      { text: "Deployed models on AWS SageMaker with CI/CD and automated retraining, supporting 95+ scheduled model updates per quarter with zero downtime.", highlights: ["SageMaker", "CI/CD"], suffix: "" },
      { text: "Engineered 25+ features per vehicle from telemetry and maintenance data, improving model performance by 18% and covering 95% of critical components.", highlights: ["feature engineering", "25+ features"], suffix: "" },
      { text: "Constructed a real-time telemetry anomaly detection system using Kafka and Transformer-based time-series models on SageMaker, detecting 87+ critical anomalies per month and reducing unplanned maintenance by 17%.", highlights: ["Kafka", "Transformer"], suffix: "" },
    ],
    skills: ["Time-Series", "Spark", "PySpark", "Kafka", "SageMaker", "Power BI", "Feature Engineering"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 hidden md:block ring-4 ring-background" />

                    <div className="md:w-1/2" />

                    <Card className="md:w-1/2 border-border/50 bg-white hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground leading-tight">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="text-xs bg-white">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4 mb-4">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                              <div>
                                <p className="text-sm text-muted-foreground">{bullet.text}</p>
                                {bullet.highlights && bullet.highlights.length > 0 && (
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {bullet.highlights.map((h, hi) => (
                                      <Badge key={hi} variant="outline" className="text-xs">
                                        {h}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
