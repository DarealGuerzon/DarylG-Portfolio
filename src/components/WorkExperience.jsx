import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Spiralytics, Inc',
    period: 'April - July 2025',
    description: 'Assisted in enhancing web applications using Laravel and Vue.js, added features to client websites, worked with WordPress, CMS platforms, and SEO practices, and collaborated using Jira for task management.'
  },
  {
    role: 'SAP Technical Consultant Intern',
    company: 'FastTrack Solutions Inc',
    period: 'December 2024 - March 2025',
    description: 'Assisted in implementing and optimizing technology solutions for clients by analyzing business needs, creating process documentation, and supporting software configurations. Gained hands-on experience with SAP systems and client-facing technical consulting.'
  },
  {
    role: 'iCare Student Assistant',
    company: 'FEU Tech',
    period: '2021 - 2024',
    description: 'Assisted students with academic concerns and provided support during consultations as a student assistant, helping facilitate smooth communication between students and faculty.'
  },
  {
    role: 'Math Tutor',
    company: 'Freelance',
    period: '2022 - Present',
    description: 'Tutored students in math by providing clear explanations and encouragement, helping them build confidence and improve their problem-solving skills.'
  },
  {
    role: 'Academic Assistant and Project Specialist',
    company: 'Freelance',
    period: '2022 - Present',
    description: 'Helped students develop and complete academic projects by offering insights, technical expertise, and personalized support.'
  }
];

const WorkExperience = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              className="flex items-start gap-6 bg-black rounded-lg p-6 shadow hover:shadow-lg transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <span className="text-xl font-semibold text-white">{exp.role}</span>
                  <span className="text-gray-300 text-base font-medium">@ {exp.company}</span>
                  <span className="text-gray-400 text-sm md:ml-4">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-base">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 