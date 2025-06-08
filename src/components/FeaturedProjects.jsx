import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
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
      link: "/portfolio#project1"
    },
    {
      id: "project2",
      title: "Hand2Hand",
      description: "A glove-based communication device that notifies and alarms nearby family members when the patient who has difficulty speaking has a need.",
      image: "/img/embedded.jpg",
      link: "/portfolio#project2"
    },
    {
      id: "project3",
      title: "Feu Tech Online Library",
      description: "Streamlines the reservation and scheduling of books and e-books, also creates a profile for every user indicating their borrowing history and favorites.",
      image: "/img/online lib.png",
      link: "/portfolio#project3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
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
    </section>
  );
};

export default FeaturedProjects;