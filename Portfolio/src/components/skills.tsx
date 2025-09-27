import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { SectionTitle } from "./section-title";
import { SkillBar } from "./skill-bar";
import { Icon } from "@iconify/react";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export const Skills = () => {
  const [selected, setSelected] = React.useState("languages");
  
  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "logos:python" },
        { name: "JavaScript", level: 80, icon: "logos:javascript" },
        { name: "C", level: 75, icon: "logos:c" },
        { name: "SQL", level: 85, icon: "logos:mysql" },
        { name: "R", level: 70, icon: "logos:r-lang" },
        { name: "Java", level: 65, icon: "logos:java" },
        { name: "HTML", level: 85, icon: "logos:html-5" }
      ]
    },
    frameworks: {
      name: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 90, icon: "logos:tensorflow" },
        { name: "PyTorch", level: 85, icon: "logos:pytorch" },
        { name: "Scikit-Learn", level: 90, icon: "logos:scikit-learn" },
        { name: "Pandas", level: 95, icon: "logos:pandas" },
        { name: "NumPy", level: 95, icon: "logos:numpy" },
        { name: "NLTK", level: 80 },
        { name: "Spacy", level: 75 },
        { name: "Flask", level: 80, icon: "logos:flask" },
        { name: "Spark", level: 70, icon: "logos:apache-spark" }
      ]
    },
    tools: {
      name: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: 90, icon: "logos:github-icon" },
        { name: "MySQL", level: 85, icon: "logos:mysql" },
        { name: "PowerBI", level: 80 },
        { name: "Tableau", level: 75, icon: "logos:tableau-icon" },
        { name: "AWS/EC2", level: 70, icon: "logos:aws" },
        { name: "S3", level: 75, icon: "logos:aws-s3" },
        { name: "SageMaker", level: 65, icon: "logos:aws-sagemaker" }
      ]
    },
    domains: {
      name: "Domain Knowledge",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Computer Vision", level: 90 },
        { name: "Reinforcement Learning", level: 85 },
        { name: "Natural Language Processing", level: 80 },
        { name: "Data Preprocessing", level: 95 },
        { name: "Model Deployment", level: 85 },
        { name: "Data Analysis", level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="scroll-mt-20">
      <SectionTitle title="Skills & Expertise" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-visible">
          <CardBody className="p-6">
            <Tabs 
              aria-label="Skill categories" 
              color="primary" 
              variant="underlined"
              selectedKey={selected} 
              onSelectionChange={setSelected as any}
              className="mb-6"
            >
              <Tab key="languages" title="Languages" />
              <Tab key="frameworks" title="Frameworks" />
              <Tab key="tools" title="Tools" />
              <Tab key="domains" title="Domains" />
            </Tabs>
            
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">{skillCategories[selected].name}</h3>
              
              <div className="space-y-6">
                {skillCategories[selected].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center mb-2">
                      {skill.icon && (
                        <Icon icon={skill.icon} className="mr-2 text-xl" />
                      )}
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-default-500">{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};