import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero = () => {
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
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/img/3129957-hd_1280_720_25fps.mp4"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm Daryl Guerzon
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-white drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              4th Year Computer Engineering Student
            </motion.h2>
            
            <motion.p
              className="text-white text-lg drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I am a graduating Computer Engineering student with a strong foundation in hardware and software development. 
              As a scholar, I have consistently excelled academically while actively participating in national-level 
              competitions in robotics, pitching, and hackathons, showcasing my ability to innovate and solve real-world 
              problems. Beyond academics, I am a freelance developer, taking on projects in AutoCAD, embedded systems, 
              and web development. Let's build something great together!
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1_pEaJMbdK-HpcCit9aGmbutjmJGHhOnJ"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/img/dar.jpg"
                alt="Professional headshot of Daryl Guerzon"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
