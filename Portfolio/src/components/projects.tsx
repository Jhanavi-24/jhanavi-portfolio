import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

interface ProjectProps {
  title: string;
  description: string;
  tools: string[];
  githubLink?: string;
  image: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ title, description, tools, githubLink, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-visible h-full">
        <CardBody className="p-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-default-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((tool, i) => (
                <span key={i} className="text-xs bg-default-100 text-default-600 px-2 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </CardBody>
        {githubLink && (
          <CardFooter className="flex justify-end gap-2">
            <Button
              as="a"
              href={githubLink}
              target="_blank"
              color="primary"
              variant="flat"
              size="sm"
              startContent={<Icon icon="lucide:github" />}
            >
              View on GitHub
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const [selected, setSelected] = React.useState("all");
  
  const projects = [
    {
      title: "Surya Namaskar Trainer",
      description: "Developed an interactive platform to aid beginners in mastering Surya Namaskara yoga poses. The platform provides real-time feedback to ensure correct posture and alignment.",
      tools: ["Python", "OpenCV", "MediaPipe"],
      githubLink: "#",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=yoga1",
      category: "computer-vision"
    },
    {
      title: "Warehouse Robot using Q-Learning and SARSA",
      description: "Developed an RL Agent that can pick up a parcel from a given location and dropoff the parcel off at a given location by using Q-Learning and SARSA Algorithm.",
      tools: ["Python", "Q-Learning", "SARSA", "Gymnasium"],
      githubLink: "#",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=robot1",
      category: "reinforcement-learning"
    },
    {
      title: "AI Recipe Generator",
      description: "Developed an AI Food Generator using Python and Flask to generate food recipes from image and text inputs. Enhanced user experience with a chatbot powered by OpenAI for interactive recipe suggestions.",
      tools: ["Python", "Flask", "OpenAI"],
      githubLink: "#",
      image: "https://img.heroui.chat/image/food?w=800&h=400&u=recipe1",
      category: "nlp"
    },
    {
      title: "Crop Prediction using ThingSpeak",
      description: "Developed a machine learning system that predicts optimal crop selection based on soil and environmental data collected through IoT sensors. The system integrates with ThingSpeak for real-time data analysis and visualization.",
      tools: ["Python", "ThingSpeak API", "Machine Learning", "IoT", "Sensor Data"],
      githubLink: "#",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=crop_prediction",
      category: "machine-learning"
    }
  ];
  
  const categories = [
    { key: "all", label: "All Projects" },
    { key: "computer-vision", label: "Computer Vision" },
    { key: "reinforcement-learning", label: "Reinforcement Learning" },
    { key: "nlp", label: "NLP" },
    { key: "machine-learning", label: "Machine Learning" }
  ];
  
  const filteredProjects = selected === "all" 
    ? projects 
    : projects.filter(project => project.category === selected);

  return (
    <section id="projects" className="scroll-mt-20">
      <SectionTitle title="Projects" />
      
      <Tabs 
        aria-label="Project categories" 
        color="primary" 
        variant="light"
        selectedKey={selected} 
        onSelectionChange={setSelected as any}
        className="mb-8"
      >
        {categories.map((category) => (
          <Tab key={category.key} title={category.label} />
        ))}
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tools={project.tools}
            githubLink={project.githubLink}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};