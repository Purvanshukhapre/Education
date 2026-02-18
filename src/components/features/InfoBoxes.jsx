import React from 'react';
import { UserCheck, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const InfoBoxes = () => {
  const boxes = [
    {
      icon: <UserCheck className="w-10 h-10 text-white group-hover:text-teal-400 transition-colors duration-300" />,
      title: "Professional Tutors",
      description: "Free & Premium online courses from the world's leading experts. Join 17 million learners today.",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/promo-1.png"
    },
    {
      icon: <Users className="w-10 h-10 text-white group-hover:text-teal-400 transition-colors duration-300" />,
      title: "Learn skills with 120k+",
      description: "Free & Premium online courses from the world's leading experts. Join 17 million learners today.",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/promo-2.png"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white group-hover:text-teal-400 transition-colors duration-300" />,
      title: "Online Degrees",
      description: "Free & Premium online courses from the world's leading experts. Join 17 million learners today.",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/promo-3.png"
    }
  ];

  return (
    <section className="relative mt-11 px-4 bg-[#162726] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#162726] rounded-xl shadow-lg p-10 transition-all duration-300 border border-teal-500/20 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-teal-900/30 h-[75px] w-[75px] flex items-center justify-center rounded-full border border-teal-500/20 transition-all duration-300 group-hover:bg-[#07A698] group-hover:border-[#07A698]">
                  <img src={box.image} alt={box.title} className="w-10 h-10 object-contain brightness-100 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">{box.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">{box.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
