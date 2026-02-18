import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer: "This course is designed for beginners with no prior experience required. However, having basic computer skills and familiarity with web browsers will be helpful."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to the course materials, including all future updates. You can learn at your own pace and revisit any content whenever you need."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you will receive a certificate of completion that you can share on LinkedIn or add to your resume to showcase your new skills."
    },
    {
      question: "Can I download the videos?",
      answer: "Yes, all video lectures can be downloaded for offline viewing. You can watch them on any device without an internet connection."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of purchase."
    },
    {
      question: "Is there support available if I have questions?",
      answer: "Yes, you have direct access to our instructor and support team. You can ask questions in the course Q&A section and expect responses within 24 hours."
    }
  ];

  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10">
      <h2 className="text-[24px] font-bold text-[#162726] mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`border ${isOpen ? 'border-[#07A698]' : 'border-gray-100'} rounded-[24px] overflow-hidden transition-all duration-300 shadow-sm`}>
              <button
                className={`w-full p-6 text-left ${isOpen ? 'bg-[#07A698]/5' : 'bg-white'} hover:bg-[#F2F4F7] transition-colors duration-200 flex justify-between items-center group`}
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
    </div>
  );
};

export default FAQSection;