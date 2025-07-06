import { useState } from 'react';
import Certifications from './Certifications';
import { motion } from 'framer-motion';
import { Calendar, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
  },
  {
    title: "CPE Challenge Robothon",
    image: "/img/techup.jfif",
    badge: "Participant",
    date: "December 2, 2023",
    description: "An innovation challenge organized by ICpEP, where university teams pitched their innovative solutions in regards to how we can bridge solutions and technology in helping our country."
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

const MinimalCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
    className="flex items-start gap-4 bg-black rounded-lg p-4 mb-4 shadow hover:shadow-lg transition-shadow border border-gray-700"
  >
    <div className="mt-1">
      <Trophy className="w-7 h-7 text-white" />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-semibold text-white">{item.title}</span>
        <Badge className="bg-black text-white border border-white text-xs px-2 py-0.5">{item.badge}</Badge>
      </div>
      <div className="flex items-center text-gray-400 text-sm mb-1">
        <Calendar className="w-4 h-4 mr-1 text-white" />
        <span>{item.date}</span>
      </div>
      <p className="text-gray-300 text-sm">{item.description}</p>
    </div>
  </motion.div>
);

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Certifications');
  const tabList = [
    { label: 'Certifications', value: 'Certifications' },
    { label: 'Awards', value: 'Awards' },
    { label: 'Competitions', value: 'Competitions' },
  ];

  return (
    <div className="bg-black pt-8 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white font-montserrat">Explore My Journey</h2>
        </div>
        <div className="flex justify-center mb-2">
          {tabList.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 focus:outline-none ml-2 border border-white ${activeTab === tab.value ? 'bg-black text-white shadow' : 'bg-black text-gray-400 hover:text-white'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pt-2">
          {activeTab === 'Certifications' && <Certifications />}
          {activeTab === 'Awards' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-white mb-2 font-montserrat text-center">
                {/* Awards */}
              </h2>
              <div>
                {awards.map((award, index) => (
                  <MinimalCard key={award.title} item={award} index={index} />
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === 'Competitions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-white mb-2 font-montserrat text-center">
                {/* Competitions */}
              </h2>
              <div>
                {competitions.map((competition, index) => (
                  <MinimalCard key={competition.title} item={competition} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 