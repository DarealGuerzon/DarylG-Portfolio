import { motion } from 'framer-motion';
import { Code2, Paintbrush, LineChart } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-12 h-12 text-white" />,
    title: "Arduino C++",
    description: "Experienced in working with Arduino microcontrollers, using C++ to develop embedded systems, IoT applications, and hardware interfacing."
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-white" />,
    title: "Front End Development",
    description: "Skilled in building responsive and visually appealing user interfaces with well-structured HTML and CSS, ensuring proper formatting and layout."
  },
  {
    icon: <LineChart className="w-12 h-12 text-white" />,
    title: "Programming",
    description: "Proficient in using Python with OpenCV for image processing, object detection, and real-time computer vision applications."
  }
];

const FeaturedSkills = () => {
  return (
    <section className="pt-12 pb-6 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold mb-8 text-white text-center relative inline-block font-montserrat"
        >
          Featured Skills
          <span className="block h-1 w-20 bg-white rounded-full mt-3 mx-auto"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-300">
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