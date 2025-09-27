import React from "react";
import { Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-content2 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jhanavi Putcha</h2>
            <p className="text-default-500">AI Engineer & Machine Learning Specialist</p>
          </div>
          
          <div className="flex gap-4">
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
              href="mailto:jhanavip@buffalo.edu"
              isIconOnly
              variant="light"
              aria-label="Email"
            >
              <Icon icon="lucide:mail" className="text-xl" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 text-center text-default-500">
          <p>&copy; {new Date().getFullYear()} Jhanavi Putcha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};