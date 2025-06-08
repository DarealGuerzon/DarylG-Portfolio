import { motion } from 'framer-motion';

const educationData = [
  {
    date: "Aug 2021 - July 2025",
    title: "Bachelor of Science in Computer Engineering",
    institution: "Far Eastern University - Institute of Technology",
    description: "Recognized twice as a Top Performing Student and Dean's Lister, Won and Competed on National Level Robotics, Pitching and Hackathon Challenges"
  },
  {
    date: "Aug 2015 - Jun 2021",
    title: "High School Diploma",
    institution: "Marikina Science High School",
    description: "Graduated with High Honors, Former Member of the Taekwondo Varsity Team"
  },
  {
    date: "2009 - 2015",
    title: "Primary School Diploma",
    institution: "Pura V. Kalaw Elementary School",
    description: "Graduated and Recognized as One of the Top 15 students, Former Member of the Baseball Varsity Team and Student Council."
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education Timeline
        </motion.h1>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
              
              <motion.div
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 10 }}
              >
                <div className="text-sm font-medium text-blue-600 mb-2">
                  {edu.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.title}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 