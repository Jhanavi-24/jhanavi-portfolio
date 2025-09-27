import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

export const About = () => {
  const personalInfo = [
    { icon: "lucide:map-pin", text: "Buffalo, NY, USA" },
    { icon: "lucide:mail", text: "jhanavip@buffalo.edu" },
    { icon: "lucide:phone", text: "+1 (716) 957-9522" },
    { icon: "lucide:github", text: "Jhanavi-24" },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <SectionTitle title="About Me" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-visible">
          <CardBody className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-default-600 mb-4">
                  I'm an AI Engineer with hands-on experience in machine learning, computer vision, and reinforcement learning. 
                  My expertise lies in developing end-to-end AI solutions that solve real-world problems.
                </p>
                <p className="text-default-600 mb-4">
                  With a strong foundation in Python, TensorFlow, and real-time data processing, I've successfully 
                  implemented machine learning models that have improved predictive accuracy by up to 15% and reduced 
                  model training time by 25%.
                </p>
                <p className="text-default-600">
                  I'm passionate about leveraging AI to create innovative solutions and continuously expanding my 
                  knowledge in this rapidly evolving field.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon icon="lucide:award" className="text-primary mt-1" />
                      <span>Speaker on Machine Learning to over 200 undergraduate students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon icon="lucide:trophy" className="text-primary mt-1" />
                      <span>3rd place in a Machine Learning competition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon icon="lucide:code" className="text-primary mt-1" />
                      <span>Developed a digital platform to streamline assignment submissions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-72">
                <Card className="bg-content2">
                  <CardBody className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                      {personalInfo.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Icon icon={item.icon} className="text-primary" />
                          <span className="text-default-600">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">Research Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Computer Vision", "Reinforcement Learning", "Natural Language Processing", "Deep Learning"].map((interest, index) => (
                        <Chip key={index} color="primary" variant="flat" size="sm">
                          {interest}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};