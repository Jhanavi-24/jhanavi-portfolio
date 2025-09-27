import React from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import profilePic from "./jhanavi.jpg"; 
// import jhanavi from "/jhanavi.jpg";

export const Header = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jhanavi Putcha
            </h1>
            <h2 className="text-xl md:text-2xl text-default-600 mb-6">
              AI Engineer & Machine Learning Specialist
            </h2>
            <p className="text-default-500 max-w-lg mb-8">
              Driven AI Engineer with hands-on experience in machine learning, computer vision, and reinforcement learning. 
              Skilled in Python, TensorFlow, and real-time data processing, with a proven ability to design and deploy end-to-end AI solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                as={Link}
                href="#projects"
                color="primary"
                size="lg"
                radius="full"
                onPress={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </Button>
              <Button
                as={Link}
                href="mailto:jhanavip@buffalo.edu"
                variant="bordered"
                color="primary"
                size="lg"
                radius="full"
                startContent={<Icon icon="lucide:mail" />}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <Button
                as={Link}
                href="https://github.com/Jhanavi-24"
                target="_blank"
                isIconOnly
                variant="light"
                aria-label="GitHub"
              >
                <Icon icon="lucide:github" className="text-xl" />
              </Button>
              <Button
                as={Link}
                href="https://linkedin.com/in/jhanavi-putcha"
                target="_blank"
                isIconOnly
                variant="light"
                aria-label="LinkedIn"
              >
                <Icon icon="lucide:linkedin" className="text-xl" />
              </Button>
              <Button
                as={Link}
                href="tel:+17169579522"
                isIconOnly
                variant="light"
                aria-label="Phone"
              >
                <Icon icon="lucide:phone" className="text-xl" />
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src= {profilePic}
                alt="jhanavi putcha" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};