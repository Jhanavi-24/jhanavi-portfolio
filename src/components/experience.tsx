import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  skills,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      <div className="timeline-dot top-1.5"></div>
      {index !== 1 && <div className="timeline-line"></div>}
      
      <Card className="overflow-visible">
        <CardBody className="p-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-default-500">{period}</span>
          </div>
          <p className="text-primary mb-4">{company}</p>
          
          <ul className="list-disc pl-5 mb-4 space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-default-600">{item}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, i) => (
              <Chip key={i} color="primary" variant="flat" size="sm">
                {skill}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "AVR Research and Development Pvt. Ltd.",
      period: "Feb 2024 - Jun 2024",
      description: [
        "Executed comprehensive data pre-processing and cleaning procedures, enhancing dataset quality and ensuring analytical readiness, which reduced model training time by 25%.",
        "Designed and implemented machine learning models using diverse algorithms (e.g., decision trees, random forests, SVMs, and neural networks), driving predictive accuracy improvements of up to 15%.",
        "Conducted in-depth model evaluation and hyperparameter tuning, leading to performance optimization and increased model efficiency across multiple deployments.",
        "Successfully deployed models into production, contributing to data-driven decision-making and measurable business impact."
      ],
      skills: ["Python", "TensorFlow", "Data Preprocessing", "Machine Learning", "Model Deployment"]
    },
    {
      title: "Machine Learning Intern",
      company: "Feynn Labs",
      period: "Mar 2023 - May 2023",
      description: [
        "Developed and implemented machine learning algorithms for market segmentation, enabling targeted marketing strategies and improving customer engagement by identifying high-value segments.",
        "Collaborated with cross-functional teams to gather, clean, and preprocess large-scale datasets, ensuring high data integrity and consistency for model training and analysis.",
        "Leveraged data analysis techniques to uncover actionable business insights, directly influencing product positioning and customer acquisition strategies."
      ],
      skills: ["Python", "Market Segmentation", "Data Analysis", "Customer Analytics"]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <SectionTitle title="Professional Experience" />
      
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};