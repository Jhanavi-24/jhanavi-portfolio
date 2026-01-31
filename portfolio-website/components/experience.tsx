import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Highlight } from "@/components/keyword-highlight"

const experiences = [
  {
    title: "Project Eagle Eyes – Vision AI for Industrial Printing",
    company: "Nissha Medical Technologies",
    type: "Capstone Project",
    date: "Aug 2025 – Dec 2025",
    location: "Buffalo, NY",
    bullets: [
      {
        text: "Architected an AI-driven inspection system to detect and analyze Q-Block defects in ultra-high-speed ticket printing lines processing",
        highlights: ["AI-driven", "30M+ tickets daily"],
        suffix: "",
      },
      {
        text: "Trained a",
        highlights: ["YOLOv8-based object detection model"],
        suffix: "achieving high accuracy in localizing large and small Q-Blocks from production images",
      },
      {
        text: "Developed color fading and area-based quality analytics by extracting pixel-level features (HEX/RGB, dimensions) from detected regions",
        highlights: [],
        suffix: "",
      },
      {
        text: "Built visualization pipelines to track color degradation trends, enabling early detection of machine wear and reducing downtime",
        highlights: [],
        suffix: "",
      },
      {
        text: "Implemented automated GOOD/NOT GOOD classification system, significantly reducing manual inspection dependency and improving defect detection consistency",
        highlights: ["automated GOOD/NOT GOOD classification"],
        suffix: "",
      },
    ],
    skills: ["YOLOv8", "Computer Vision", "OpenCV", "Python", "Data Analytics"],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "AVR Research and Development Pvt. Ltd.",
    type: "Internship",
    date: "Feb 2024 – Jun 2024",
    location: "India",
    bullets: [
      {
        text: "Executed comprehensive data pre-processing and cleaning procedures, enhancing dataset quality and",
        highlights: ["reducing model training time by 25%"],
        suffix: "",
      },
      {
        text: "Designed and implemented ML models using diverse algorithms (decision trees, random forests, SVMs, neural networks), achieving",
        highlights: ["15% improvement in predictive accuracy"],
        suffix: "",
      },
      {
        text: "Conducted in-depth model evaluation and hyperparameter tuning, optimizing performance across multiple deployments",
        highlights: [],
        suffix: "",
      },
      {
        text: "Successfully deployed models into production, contributing to data-driven decision-making and measurable business impact",
        highlights: ["production-grade ML"],
        suffix: "",
      },
    ],
    skills: ["Machine Learning", "Python", "Scikit-Learn", "Data Preprocessing", "Model Deployment"],
  },
  {
    title: "Machine Learning Intern",
    company: "Feynn Labs",
    type: "Internship",
    date: "Mar 2023 – May 2023",
    location: "Remote",
    bullets: [
      {
        text: "Developed",
        highlights: ["ML algorithms for market segmentation"],
        suffix:
          ", enabling targeted marketing strategies and improving customer engagement through high-value segment identification",
      },
      {
        text: "Collaborated with cross-functional teams to gather, clean, and preprocess large-scale datasets, ensuring data integrity for model training",
        highlights: [],
        suffix: "",
      },
      {
        text: "Leveraged data analysis techniques to uncover actionable business insights, directly influencing product positioning and customer acquisition strategies",
        highlights: ["actionable business insights"],
        suffix: "",
      },
    ],
    skills: ["Market Segmentation", "Python", "Data Analysis", "Clustering", "Business Intelligence"],
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
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span>
                                {bullet.text}{" "}
                                {bullet.highlights.map((h, hi) => (
                                  <span key={hi}>
                                    <Highlight>{h}</Highlight>{" "}
                                  </span>
                                ))}
                                {bullet.suffix}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs bg-secondary">
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
