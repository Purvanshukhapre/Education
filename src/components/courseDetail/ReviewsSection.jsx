import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewsSection = ({ course }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "1 month ago",
      comment: "Great content and well-structured curriculum. The hands-on projects really helped reinforce the concepts.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      date: "3 weeks ago",
      comment: "Fantastic course! The instructor is knowledgeable and engaging. Perfect balance of theory and practical application.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating
                ? 'text-amber-400 fill-current'
                : 'text-gray-200'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-[24px] font-bold text-[#162726] mb-8">Student Success Stories</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Overall Rating */}
        <div className="lg:col-span-1">
          <div className="text-center bg-[#F2F4F7] rounded-[24px] p-8 border border-gray-100">
            <div className="text-6xl font-bold text-[#162726] mb-4">{course.rating}</div>
            <div className="flex justify-center mb-4">
              {renderStars(Math.round(course.rating))}
            </div>
            <div className="text-[#6C706F] font-bold text-[14px] uppercase tracking-wider mb-8">Course Rating</div>

            <div className="space-y-4 text-left">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center group">
                  <span className="w-8 text-[13px] font-bold text-[#6C706F]">{star}</span>
                  <div className="flex-1 mx-3 h-2 bg-white rounded-full overflow-hidden border border-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${star === 5 ? '85%' : star === 4 ? '12%' : star === 3 ? '2%' : '1%'}` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-amber-400 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="w-10 text-right text-[13px] font-bold text-[#162726]">
                    {star === 5 ? '85%' : star === 4 ? '12%' : star === 3 ? '2%' : '1%'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Individual Reviews */}
        <div className="lg:col-span-2 space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 group hover:border-[#07A698] transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#07A698]/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-[#162726] text-[17px] mb-1">{review.name}</h4>
                      <div className="flex items-center gap-3">
                        {renderStars(review.rating)}
                        <span className="text-[12px] font-bold text-[#6C706F] uppercase tracking-wider">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6C706F] text-[15px] leading-relaxed font-medium">
                    "{review.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsSection;