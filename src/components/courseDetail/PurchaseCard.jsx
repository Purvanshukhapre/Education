import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Headphones } from 'lucide-react';

const PurchaseCard = ({ course }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    { icon: Clock, text: "Video on demand" },
    { icon: FileText, text: `${course.lessons || '8'} lectures` },
    { icon: Clock, text: `${course.duration || '12h 30m'} total hours` },
    { icon: CheckCircle, text: "Certificate of completion" },
    { icon: Headphones, text: "Full lifetime access" },
    { icon: CheckCircle, text: "Access on mobile and TV" }
  ];

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 sticky top-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[36px] font-bold text-[#162726]">
            ${course.price}
          </span>
          {course.originalPrice && (
            <span className="text-[20px] text-[#6C706F] line-through font-medium">
              ${course.originalPrice}
            </span>
          )}
        </div>
        {course.originalPrice && (
          <div className="bg-red-50 text-[#EF4444] text-[13px] font-bold inline-block px-3 py-1 rounded-full uppercase tracking-wider">
            {((course.originalPrice - course.price) / course.originalPrice * 100).toFixed(0)}% OFF
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        <button className="w-full py-5 bg-[#07A698] hover:bg-[#162726] text-white rounded-full font-bold text-[15px] transition-all duration-300 shadow-lg shadow-[#07A698]/20">
          Add to Cart
        </button>
        <button className="w-full py-5 border-2 border-gray-100 text-[#162726] font-bold text-[15px] rounded-full hover:bg-[#07A698] hover:border-[#07A698] hover:text-white transition-all duration-300">
          Enroll Now
        </button>
      </div>

      <div className="text-center text-[13px] font-semibold text-[#6C706F] mb-8 pb-8 border-b border-gray-100 uppercase tracking-widest">
        30-Day Money-Back Guarantee
      </div>

      <div className="space-y-4">
        <h4 className="text-[16px] font-bold text-[#162726] mb-5">Course Includes:</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-[#6C706F] group">
            <div className="w-8 h-8 rounded-full bg-[#07A698]/5 flex items-center justify-center mr-4 group-hover:bg-[#07A698] transition-colors">
              <feature.icon className="w-4 h-4 text-[#07A698] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[14px] font-medium group-hover:text-[#162726] transition-colors">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PurchaseCard;