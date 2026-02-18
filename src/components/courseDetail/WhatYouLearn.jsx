import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhatYouLearn = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const learningItems = [
    "Master fundamental concepts and advanced techniques",
    "Build real-world projects from scratch",
    "Understand best practices and industry standards",
    "Develop problem-solving and critical thinking skills",
    "Create portfolio-worthy applications",
    "Get job-ready skills for career advancement"
  ];

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-[24px] font-bold text-[#162726] mb-8">What you'll learn</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {learningItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start group"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#07A698]/10 flex items-center justify-center mr-4 mt-1 group-hover:bg-[#07A698] transition-colors">
              <CheckCircle className="w-3.5 h-3.5 text-[#07A698] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[#6C706F] text-[16px] font-medium leading-relaxed group-hover:text-[#162726] transition-colors">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhatYouLearn;