import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const competitions = [
  {
    title: "Synergy Hackathon: Top 5 Software Solution",
    image: "/img/AWARDS.jfif",
    badge: "1st Place",
    date: "June 15, 2023",
    description: "Part of the team that submitted a solution on how out carbon footprint become more easier,convenient and engaging to track using a mobile application."
  },
  {
    title: "MRSP NCR Robotics Competition",
    image: "/img/regional.jpg",
    badge: "Champion",
    date: "June 15, 2023",
    description: "In this competition, we developed an autonomous robot that could handle challenging terrains and complete tasks within strict time limits. Facing more than 30 teams from across the country, we put our engineering and programming abilities to the test in a high-stakes robotics challenge."
  },
  {
    title: "CPE Challenge: Pitching",
    image: "/img/runner up.jpg",
    badge: "1st Place",
    date: "June 15, 2023",
    description: "Idea pitching for a startup that specifically provides a solution for a special target market. Represented the school afterwards in the national-level."
  },
  {
    title: "National Robotics Competition",
    image: "/img/NCR.jpg",
    badge: "Finalist",
    date: "June 15, 2023",
    description: "Designed and programmed an autonomous robot that could navigate complex terrains and perform specific tasks under time constraints. Competed against the best throughout each region."
  },
  {
    title: "DICT Regional Pitching Competition",
    image: "/img/dict.jpg",
    badge: "Finalist",
    date: "June 15, 2023",
    description: "A pitching competition organized by the Department of Information and Communications Technology (DICT), where teams presented their technological innovations to a panel of judges. The team was a finalist in the regional round."
  },
  {
    title: "PhilDev Inter University Innovation Challenge",
    image: "/img/techup.jfif",
    badge: "Top 10 Finalist",
    date: "June 15, 2023",
    description: "An innovation challenge organized by PhilDev, where university teams pitched their innovative solutions in regards to how we can bridge solutions and technology in helping the younger generations of our country. The team secured a spot in the Top 10 finalists."
  }
];

const awards = [
  {
    title: "Top Performing Student",
    image: "/img/1ST TPS.jpg",
    badge: "TOP 3",
    date: "June 15, 2023",
    description: "Recognized as One of the Top Performing Students and a Dean's Lister in my Department during my 1st year of studies."
  },
  {
    title: "Top Performing Student",
    image: "/img/3RDTPS.jfif",
    badge: "TOP 7",
    date: "June 15, 2023",
    description: "Recognized as One of the Top Performing Students and a Dean's Lister - Silver in my Department during my 1st year of studies."
  },
  {
    title: "National Robotics Competition",
    image: "/img/ROBOTICS.jfif",
    badge: "Champion",
    date: "June 15, 2023",
    description: "Recognized and Awarded by the school for being the Champions in the NCR level MRSP Robotics Competition."
  },
  {
    title: "PhilDev Tech Up Finalist",
    image: "/img/TECHUPASR.jfif",
    badge: "Finalist",
    date: "June 15, 2023",
    description: "Recognized and Awarded by the school for being one of the Finalist in the PhilDev Inter University Innovation Challenge."
  },
  {
    title: "Synergy Hackathon",
    image: "/img/SYNERGY.jfif",
    badge: "1st Place",
    date: "June 15, 2023",
    description: "Recognized and Awarded by the school for being the 1st runner up in the Synergy Hackathon."
  }
];

const CompetitionCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <Badge 
        className="absolute top-2 right-2 bg-blue-600 text-white"
        variant="secondary"
      >
        {item.badge}
      </Badge>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {item.title}
      </h3>
      <div className="flex items-center text-gray-500 mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{item.date}</span>
      </div>
      <p className="text-gray-600">
        {item.description}
      </p>
    </div>
  </motion.div>
);

const Competitions = () => {
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
            Competition Showcase
          </h1>
          <p className="text-xl text-gray-600">
            A collection of prestigious competitions and achievements throughout my professional journey
          </p>
        </motion.div>

        {/* Competitions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            My Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <CompetitionCard key={competition.title} item={competition} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            My Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <CompetitionCard key={award.title} item={award} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Competitions;