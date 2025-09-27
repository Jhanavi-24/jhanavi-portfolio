import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  level: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ level }) => {
  return (
    <div className="skill-bar">
      <motion.div
        className="skill-progress"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};