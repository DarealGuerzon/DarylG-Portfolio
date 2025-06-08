import { motion } from 'framer-motion';
import { Code2, Paintbrush, LineChart } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-12 h-12 text-blue-500" />,
    title: "Arduino C++",
    description: "Experienced in working with Arduino microcontrollers, using C++ to develop embedded systems, IoT applications, and hardware interfacing."
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-purple-500" />,
    title: "Front End Development",
    description: "Skilled in building responsive and visually appealing user interfaces with well-structured HTML and CSS, ensuring proper formatting and layout."
  },
  {
    icon: <LineChart className="w-12 h-12 text-green-500" />,
    title: "Programming",
    description: "Proficient in using Python with OpenCV for image processing, object detection, and real-time computer vision applications."
  }
];

const FeaturedSkills = () => {
  return (
    <section className="pt-12 pb-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {skill.title}
              </h3>
              <p className="text-gray-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills; 