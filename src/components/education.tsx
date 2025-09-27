import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, 
  degree, 
  period, 
  gpa,
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
            <h3 className="text-xl font-semibold">{institution}</h3>
            <span className="text-default-500">{period}</span>
          </div>
          <p className="text-primary mb-2">{degree}</p>
          {gpa && (
            <div className="flex items-center mt-2">
              <Icon icon="lucide:award" className="text-primary mr-2" />
              <span>GPA: {gpa}</span>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Education = () => {
  const educationItems = [
    {
      institution: "University at Buffalo",
      degree: "MS in Engineering Science - Artificial Intelligence",
      period: "Aug 2021 - Present",
      gpa: "3.55"
    },
    {
      institution: "Vignana Bharathi Institute of Technology",
      degree: "Bachelors in Computer Science & Engineering (AI & ML)",
      period: "Aug 2020 - May 2024"
    }
  ];

  return (
    <section id="education" className="scroll-mt-20">
      <SectionTitle title="Education" />
      
      <div className="relative">
        {educationItems.map((item, index) => (
          <EducationItem
            key={index}
            institution={item.institution}
            degree={item.degree}
            period={item.period}
            gpa={item.gpa}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};