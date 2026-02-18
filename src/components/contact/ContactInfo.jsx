import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "123 Education Street, San Francisco, CA 94105",
      description: "Visit us for in-person consultations"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "support@Patil Institute.com",
      description: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri: 9AM-6PM"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10 mb-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#07A698]/5 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h3 className="text-[24px] font-bold text-[#162726] mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-[#07A698]/10 flex items-center justify-center mr-4">
              <MapPin className="w-5 h-5 text-[#07A698]" />
            </span>
            Our Campus
          </h3>
          <div className="aspect-[16/9] bg-[#F2F4F7] rounded-[24px] mb-6 flex items-center justify-center border border-gray-100 group overflow-hidden">
            <div className="text-center group-hover:scale-110 transition-transform duration-500">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-[#07A698] group-hover:text-white transition-colors">
                <MapPin className="w-8 h-8 text-[#07A698] group-hover:text-white" />
              </div>
              <p className="text-[#6C706F] font-bold uppercase tracking-widest text-[12px]">Interactive Map</p>
            </div>
          </div>
          <p className="text-[#6C706F] text-[15px] font-medium leading-relaxed">
            Located in the heart of downtown San Francisco, our campus is easily accessible by public transportation and features state-of-the-art facilities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={index}
              className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 flex items-center group hover:border-[#07A698] transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#07A698]/5 flex items-center justify-center mr-6 group-hover:bg-[#07A698] transition-all duration-300 group-hover:rotate-6">
                <Icon className="w-6 h-6 text-[#07A698] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#6C706F] uppercase tracking-wider mb-1">{info.title}</h4>
                <p className="text-[17px] font-bold text-[#162726] mb-1">{info.content}</p>
                <p className="text-[13px] font-medium text-[#6C706F]">{info.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;