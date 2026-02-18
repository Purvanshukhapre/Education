import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const Mission = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const missionPoints = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To democratize education by making high-quality learning accessible to everyone, everywhere, regardless of their background or location.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      description: "Empower learners with cutting-edge technology, expert instruction, and personalized learning paths that unlock their full potential.",
      color: "text-[#F59E0B]"
    },
    {
      icon: Users,
      title: "Our Values",
      description: "We believe in excellence, innovation, inclusivity, and community-driven learning that transforms lives and builds better futures.",
      color: "text-[#07A698]"
    }
  ];

  return (
    <section className="py-24 bg-[#F2F4F7] relative overflow-hidden">
      {/* Background Shape */}
      <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/hero-shape-7.png" className="absolute top-10 right-10 w-32 opacity-20" alt="" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Empowering Education"
          title="Empowering the Future of Education"
          align="left"
          className="mb-12"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <p className="text-[20px] text-text-secondary leading-relaxed font-medium">
              Founded in 2020, EdCare began with a simple yet powerful vision:
              to break down barriers to education and create opportunities for
              learners around the globe.
            </p>

            <p className="text-text-secondary leading-relaxed">
              We've partnered with leading universities, industry experts, and
              innovative educators to bring you courses that are not only
              academically rigorous but also practically relevant to today's
              job market.
            </p>

            <div className="space-y-8">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-5 group"
                    variants={itemVariants}
                  >
                    <div className={`flex-shrink-0`}>
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className={`w-7 h-7 ${point.color} group-hover:text-white transition-colors`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold text-text-primary mb-2">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop"
                alt="Education mission"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162726]/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-8 max-w-[280px] border border-gray-100"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#07A698]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#07A698]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#162726]">500k+</div>
                  <div className="text-sm text-gray-500">Active Students</div>
                </div>
              </div>
              <p className="text-text-secondary text-[14px]">
                Join our community of lifelong learners and transform your future.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;