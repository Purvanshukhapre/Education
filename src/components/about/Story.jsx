import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const Story = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to make quality education accessible to everyone worldwide",
      icon: Calendar,
      color: "text-[#07A698]"
    },
    {
      year: "2021",
      title: "First 100K Students",
      description: "Reached our first major milestone with 100,000 active learners across 20 countries",
      icon: Users,
      color: "text-[#F59E0B]"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded 'Best Online Learning Platform' by EdTech Innovation Awards",
      icon: Award,
      color: "text-[#EF4444]"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 40+ countries with localized content and regional partnerships",
      icon: TrendingUp,
      color: "text-[#3B82F6]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-[#F2F4F7] relative overflow-hidden">
      {/* Background Shapes */}
      <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-3.png" className="absolute top-20 right-0 w-64 opacity-20" alt="" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Our Journey"
          title="From Humble Beginnings to Global Impact"
          align="center"
          className="mb-16"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#07A698] to-[#162726]/10 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#07A698] rounded-full z-10 shadow-lg"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 ${milestone.color} bg-white rounded-[24px] mb-6 shadow-sm group hover:bg-primary hover:text-white transition-all duration-300 ${isEven ? 'float-right ml-6' : 'float-left mr-6'}`}>
                      <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 mt-4 group">
                      <div className="text-3xl font-bold text-[#07A698] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-[22px] font-bold text-[#162726] mb-3 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-2/12"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="text-center mt-24 p-16 bg-[#162726] rounded-[40px] text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-2.png" className="absolute -bottom-10 -right-10 w-48 opacity-20" alt="" />

          <h3 className="text-[32px] font-bold mb-6">Looking Ahead</h3>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-[18px] leading-relaxed">
            We're just getting started. Our roadmap includes AI-powered personalized learning,
            virtual reality classrooms, and partnerships with more leading institutions worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['AI Integration', 'VR Learning', 'Global Campus', 'Micro-Credentials'].map((tag) => (
              <span key={tag} className="bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;