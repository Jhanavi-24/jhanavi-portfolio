import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

export const Publications = () => {
  const publications = [
    {
      title: "Surya Namaskar with Real-time Feedback using MediaPipe",
      journal: "International Journal of Emerging Technologies and Innovative Research",
      date: "Apr 2024",
      doi: "http://www.jetir.org/papers/JETIR2404467.pdf",
      abstract: "This paper presents a novel approach to yoga pose recognition and feedback using MediaPipe, a cross-platform framework for building multimodal applied machine learning pipelines. The system provides real-time feedback for Surya Namaskar (Sun Salutation) poses, helping practitioners improve their form and alignment."
    }
  ];

  return (
    <section id="publications" className="scroll-mt-20">
      <SectionTitle title="Publications" />
      
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-visible">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">{pub.title}</h3>
                  <span className="text-default-500">{pub.date}</span>
                </div>
                <p className="text-primary mb-4">{pub.journal}</p>
                <p className="text-default-600 mb-4">{pub.abstract}</p>
                
                <div className="flex items-center">
                  <Icon icon="lucide:link" className="text-primary mr-2" />
                  <span className="text-default-600 mr-2">DOI:</span>
                  <Button
                    as={Link}
                    href={pub.doi}
                    target="_blank"
                    color="primary"
                    variant="light"
                    size="sm"
                  >
                    View Publication
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};