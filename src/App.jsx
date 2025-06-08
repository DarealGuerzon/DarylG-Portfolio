import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSkills from './components/FeaturedSkills';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';
import Education from './components/Education';
import Competitions from './components/Competitions';
import Certifications from './components/Certifications';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="skills">
          <FeaturedSkills />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="projects">
          <FeaturedProjects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="competitions">
          <Competitions />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;