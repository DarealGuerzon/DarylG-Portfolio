import { Button } from "@/components/ui/button";

const Footer = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Daryl Guerzon</h2>
            <p className="text-gray-400 mb-4">
              A passionate full-stack developer focused on creating modern and efficient web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DarealGuerzon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/daryl-guerzon-0a980b212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white p-0"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white p-0"
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white p-0"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: guerzondaryl25@gmail.com</li>
              <li>Location: Quezon City, Philippines</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Daryl Guerzon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;