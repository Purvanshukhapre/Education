import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mason D. Logan",
      role: "IT Trainer",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-men-1.png"
    },
    {
      name: "Scarlett Hannah",
      role: "IT Trainer",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-men-2.png"
    },
    {
      name: "Chloe Smith",
      role: "IT Trainer",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-men-3.png"
    },
    {
      name: "Madison Chloe",
      role: "IT Trainer",
      image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-men-4.png"
    }
  ];

  const shapeImg = "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/team-shape-3.png";

  return (
    <section className="py-[120px] bg-white font-outfit overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-6 h-6 bg-[#07A698] rounded-full flex items-center justify-center text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </span>
            <span className="text-[16px] font-bold text-[#07A698] uppercase tracking-wider">Our Instructors</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-bold text-[#162726] leading-tight"
          >
            Meet Our Expert Instructor
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-8 pt-8 px-4">
                {/* Background Shape */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] -z-10 bg-[#F2F4F7] rounded-full transform group-hover:bg-[#07A698] transition-all duration-500 overflow-hidden leading-[0]">
                  <img src={shapeImg} alt="shape" className="w-full h-full object-cover opacity-50 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Person Image */}
                <div className="relative h-[250px] flex items-end justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Social List */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#162726] hover:bg-[#07A698] hover:text-white transition-all shadow-md"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-[24px] font-bold text-[#162726] mb-1 hover:text-[#07A698] transition-colors cursor-pointer">
                {member.name}
              </h3>
              <span className="text-[#6C706F] text-[16px]">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Team;