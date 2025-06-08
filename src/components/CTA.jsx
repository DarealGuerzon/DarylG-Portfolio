import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CTA = () => {
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

  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-blue-200">Let's work together.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
        >
          <div className="inline-flex rounded-md shadow">
            <Button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Get in Touch
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
            >
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;