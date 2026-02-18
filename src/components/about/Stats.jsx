import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, BookOpen } from 'lucide-react';

const Stats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    students: 0,
    countries: 0,
    partnerships: 0,
    completion: 0
  });

  const stats = [
    {
      icon: Users,
      label: "Happy Students",
      value: 500000,
      suffix: "+",
      color: "text-[#07A698]"
    },
    {
      icon: Globe,
      label: "Global Countries",
      value: 40,
      suffix: "+",
      color: "text-[#F59E0B]"
    },
    {
      icon: Award,
      label: "Course Partnerships",
      value: 1200,
      suffix: "+",
      color: "text-[#EF4444]"
    },
    {
      icon: BookOpen,
      label: "Course Completion",
      value: 95,
      suffix: "%",
      color: "text-[#3B82F6]"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        students: 500000,
        countries: 40,
        partnerships: 1200,
        completion: 95
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        duration: 0.6
      }
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F2F4F7] rounded-full opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentValue = Object.values(animatedValues)[index];

            return (
              <motion.div
                key={index}
                className="text-center group p-10 bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50"
                variants={itemVariants}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.color} bg-current/10 rounded-[20px] mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                  <Icon className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-[#162726] mb-3">
                  {formatNumber(currentValue)}
                  {stat.suffix}
                </div>

                <p className="text-text-secondary font-semibold text-[16px] tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;