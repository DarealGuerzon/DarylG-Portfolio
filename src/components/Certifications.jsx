import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "IT Specialist - Python",
    image: "./img/pyth.png",
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
    transition={{ delay: index * 0.08 }}
    className="flex items-start gap-4 bg-gradient-to-r from-[#232526] to-[#2c5364] rounded-lg p-4 mb-4 shadow hover:shadow-lg transition-shadow"
  >
    <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-[#232526] rounded-md overflow-hidden">
      <img
        src={certification.image}
        alt={certification.title}
        className="object-contain w-16 h-16"
      />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-semibold text-white">{certification.title}</span>
        {certification.verified && (
          <Badge className="bg-green-600 text-white text-xs px-2 py-0.5 flex items-center gap-1" variant="secondary">
            <CheckCircle2 className="w-4 h-4" /> Verified
          </Badge>
        )}
      </div>
      <p className="text-gray-300 text-sm">Credentialed by industry-recognized organizations.</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="pt-2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.title} 
              certification={certification} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
