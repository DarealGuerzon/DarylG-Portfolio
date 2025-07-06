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
  { icon: FaHtml5, name: "HTML", color: "text-white" },
  { icon: FaCss3Alt, name: "CSS", color: "text-white" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-white" },
  { icon: FaJs, name: "JavaScript", color: "text-white" },
  { icon: FaReact, name: "React", color: "text-white" },
  { icon: FaNodeJs, name: "Node.js", color: "text-white" },
  { icon: SiExpress, name: "Express.js", color: "text-white" },
  { icon: SiTypescript, name: "TypeScript", color: "text-white" },
  { icon: FaLaravel, name: "Laravel", color: "text-white" },
  { icon: FaPython, name: "Python", color: "text-white" },
  { icon: FaJava, name: "Java", color: "text-white" },
  { icon: SiMongodb, name: "MongoDB", color: "text-white" },
  { icon: SiMysql, name: "MySQL", color: "text-white" },
  { icon: FaGitAlt, name: "Git", color: "text-white" },
  { icon: FaGithub, name: "GitHub", color: "text-white" },
];

const Expertise = () => {
  return (
    <section className="pt-4 pb-12 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-extrabold mb-8 text-white text-center relative inline-block font-montserrat">
          My Expertise
          <span className="block h-1 w-20 bg-white rounded-full mt-3 mx-auto"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {expertiseItems.map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center justify-center p-8 bg-black rounded-3xl shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300 border border-gray-700"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className={`w-14 h-14 mb-5 ${color} drop-shadow-md`} />
              <span className="text-lg font-semibold text-white">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
