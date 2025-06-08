import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLaravel,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiTypescript } from "react-icons/si";  // Added Express and TypeScript icons

const expertiseItems = [
  { icon: FaHtml5, name: "HTML", color: "text-[#E34F26]" },
  { icon: FaCss3Alt, name: "CSS", color: "text-[#2965F1]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#38B2AC]" },
  { icon: FaJs, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: FaReact, name: "React", color: "text-[#61DAFB]" },
  { icon: FaNodeJs, name: "Node.js", color: "text-[#68A063]" },
  { icon: SiExpress, name: "Express.js", color: "text-[#000000]" },          // Express.js added, black color
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },      // TypeScript added, official blue color
  { icon: FaLaravel, name: "Laravel", color: "text-[#FF2D20]" },
  { icon: FaPython, name: "Python", color: "text-[#3776AB]" },
  { icon: FaJava, name: "Java", color: "text-[#007396]" },
  { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
  { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
  { icon: FaGitAlt, name: "Git", color: "text-[#F05032]" },
  { icon: FaGithub, name: "GitHub", color: "text-[#181717]" },
];

const Expertise = () => {
  return (
    <section className="pt-4 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900 text-center relative inline-block">
          Skills
          <span className="block h-1 w-20 bg-indigo-600 rounded-full mt-3 mx-auto"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {expertiseItems.map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className={`w-14 h-14 mb-5 ${color} drop-shadow-md`} />
              <span className="text-lg font-semibold text-gray-800">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
