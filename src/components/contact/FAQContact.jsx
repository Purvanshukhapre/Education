import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQContact = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly."
    },
    {
      question: "What are your office hours?",
      answer: "Our office is open Monday through Friday from 9 AM to 6 PM Pacific Time, and Saturday from 10 AM to 4 PM. We are closed on Sundays."
    },
    {
      question: "Can I schedule an appointment?",
      answer: "Yes, you can schedule an appointment through our contact form or by calling our office directly. We recommend booking at least 24 hours in advance."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we offer comprehensive technical support for all our courses. You can reach out to us via email or phone during business hours."
    },
    {
      question: "What if I need help outside of business hours?",
      answer: "While our office is closed outside of business hours, you can still submit tickets through our contact form. We'll address your concerns on the next business day."
    },
    {
      question: "Can I visit your office without an appointment?",
      answer: "While walk-ins are welcome during business hours, we recommend scheduling an appointment to ensure availability and minimize wait times."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-16 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#07A698]/5 rounded-full -ml-32 -mt-32"></div>

      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center bg-[#F2F4F7] rounded-full px-4 py-1.5 mb-4">
          <span className="text-[12px] font-bold text-[#07A698] uppercase tracking-wider">Common Questions</span>
        </div>
        <h2 className="text-[32px] md:text-[42px] font-bold text-[#162726] leading-tight">Frequently Asked Questions</h2>
        <p className="text-[#6C706F] mt-4 font-medium max-w-2xl mx-auto">
          Find quick answers to common questions about our campus, appointments, and support services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`border ${isOpen ? 'border-[#07A698]' : 'border-gray-100'} rounded-[24px] overflow-hidden transition-all duration-300 shadow-sm flex flex-col`}>
              <button
                className={`w-full p-6 text-left ${isOpen ? 'bg-[#07A698]/5' : 'bg-white'} hover:bg-[#F2F4F7] transition-colors duration-200 flex justify-between items-center group flex-grow`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-[17px] ${isOpen ? 'text-[#07A698]' : 'text-[#162726]'} transition-colors pr-8`}>{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#07A698] text-white rotate-180' : 'bg-[#F2F4F7] text-[#162726]'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100">
                      <p className="text-[#6C706F] text-[16px] leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FAQContact;