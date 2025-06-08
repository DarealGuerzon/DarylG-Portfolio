import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "IT Specialist - Python",
    image: "/img/pyth.png",
    verified: true
  },
  {
    title: "IT Specialist - Java",
    image: "/img/java.png",
    verified: true
  },
  {
    title: "Introduction to Cybersecurity",
    image: "/img/cybersec.png",
    verified: true
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    image: "/img/AWS.png",
    verified: true
  },
  {
    title: "CCNA: Introduction to Networks",
    image: "/img/INTRO.png",
    verified: true
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    image: "/img/switching.png",
    verified: true
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    image: "/img/enterprise.png",
    verified: true
  },
  {
    title: "IT Specialist - Networking",
    image: "/img/networking.png",
    verified: true
  },
  {
    title: "CyberOps Associate",
    image: "/img/cyberops.png",
    verified: true
  }
];

const CertificationCard = ({ certification, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="relative">
      <img
        src={certification.image}
        alt={certification.title}
        className="w-full h-48 object-contain bg-gray-50 p-4"
      />
      {certification.verified && (
        <Badge 
          className="absolute top-2 right-2 bg-green-600 text-white flex items-center gap-1"
          variant="secondary"
        >
          <CheckCircle2 className="w-4 h-4" />
          Verified
        </Badge>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
        {certification.title}
      </h3>
      <Button variant="outline" className="w-full">
        View Details
      </Button>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Certification Showcase
          </h1>
          <p className="text-xl text-gray-600">
            A collection of certificates obtained throughout my Academic Journey
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.title} 
              certification={certification} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About My Certifications
          </h2>
          <p className="text-gray-600 mb-4">
            These certifications represent my commitment to professional development and expertise in various technologies. Each certification has been earned through rigorous study and practical application of skills.
          </p>
          <p className="text-gray-600">
            I continue to pursue additional certifications to stay current with industry best practices and emerging technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;