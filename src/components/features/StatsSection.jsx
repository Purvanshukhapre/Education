import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      number: '19.5',
      suffix: 'K',
      label: 'Students Enrolled'
    },
    {
      number: '12.5',
      suffix: 'K',
      label: 'Class Completed'
    },
    {
      number: '96',
      suffix: '%',
      label: 'Satisfaction Rate'
    },
    {
      number: '325',
      suffix: '+',
      label: 'Top Instructors'
    }
  ];

  return (
    <section className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-[#07A698] mb-2 font-outfit flex justify-center items-center">
                <span className="odometer" data-count={stat.number}>{stat.number}</span>
                <span className="text-4xl md:text-5xl ml-1">{stat.suffix}</span>
              </h3>
              <p className="text-lg text-[#162726] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;