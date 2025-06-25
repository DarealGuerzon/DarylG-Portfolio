import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
  const [modalImage, setModalImage] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: "project1",
      title: "Poultry Guard",
      description: "A monitoring system that integrates a thermal camera and video camera to detect, mitigate, and alert farm owners about heat stress in chickens. The system provides real-time analysis, automated responses, and notifications to ensure optimal poultry health and welfare.",
      image: "/img/thesis3.png",
      link: "/portfolio#project1",
      languages: ["Python", "OpenCV", "Arduino", "Flask","Iot Cloud","Mini Pc","C++","Typescript", "Mileseey TR160i", "Sim800L", "ESP32"]
    },
    {
      id: "project2",
      title: "Hand2Hand",
      description: "A glove-based communication device that notifies and alarms nearby family members when the patient who has difficulty speaking has a need.",
      image: "/img/embedded.jpg",
      link: "/portfolio#project2",
      languages: ["Arduino C++", "MPU6050","MAX30102","Arduino Uno","Arduino Nano"]
    },
    {
      id: "project3",
      title: "Feu Tech Online Library",
      description: "Streamlines the reservation and scheduling of books and e-books, also creates a profile for every user indicating their borrowing history and favorites.",
      image: "/img/online lib.png",
      link: "/portfolio#project3",
      languages: ["React", "Node.js", "MongoDB", "Tailwind CSS","FireBase"]
    },
    {
      id: "project4",
      title: "iCare Website",
      description: "Streamlines the reservation and scheduling of consultations,review and enhacement classes and peer tutorial, also creates a profile for every student",
      image: "/img/icare.png",
      link: "/portfolio#project3",
      languages: ["React", "Node.js", "MongoDB", "Tailwind CSS","FireBase","Axios"]
    },
    {
      id: "project5",
      title: "BentaHub",
      description: "Developed a Point-of-Sale (POS) system with customizable items, inventory management, sales history tracking, and automated sales reports to streamline business operations",
      image: "/img/bentahub.png",
      link: "/portfolio#project3",
      languages: ["React", "Supabase", "Tailwind CSS","Node.js","Express.js","MongoDB"]
    },
    {
      id: "project6",
      title: "PawToFeeder",
      description: "Designed and built an automated dog feeder and water dispenser using sensors and timers to ensure scheduled feeding and hydration without manual intervention.",
      image: "/img/pawto.jpg",
      link: "/portfolio#project3",
      languages: ["Arduino C++", "IoT", "Arduino Uno","DS1307","Servo","Membrane Keypad"]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#232526] to-[#0f2027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-indigo-400 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-r from-[#232526] to-[#2c5364] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => setModalImage(project.image)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map(lang => (
                    <span key={lang} className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal for full-size image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg" onClick={() => setModalImage(null)}>
          <div className="relative max-w-3xl w-full flex justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              onClick={() => setModalImage(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={modalImage} alt="Full Project" className="rounded-lg max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;