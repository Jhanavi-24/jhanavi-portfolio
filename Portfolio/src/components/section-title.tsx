import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <Divider className="mb-2" />
    </motion.div>
  );
};