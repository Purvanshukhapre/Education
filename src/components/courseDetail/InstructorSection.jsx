import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award } from 'lucide-react';

const InstructorSection = ({ course }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const instructor = {
    name: course.instructor,
    role: "Senior Developer & Educator",
    bio: "With over 10 years of experience in web development and teaching, I specialize in helping students build real-world applications and master modern development techniques. My courses have helped thousands of students advance their careers.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 4.8,
    students: 125000,
    courses: 15
  };

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-[24px] font-bold text-[#162726] mb-8">About the Instructor</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-[#07A698] rounded-full scale-105 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[22px] font-bold text-[#162726] mb-1">{instructor.name}</h3>
          <p className="text-[#07A698] font-bold text-[14px] uppercase tracking-wider mb-5">{instructor.role}</p>
          <p className="text-[#6C706F] text-[16px] leading-relaxed mb-8 font-medium">
            {instructor.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start group">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-4 group-hover:bg-amber-400 transition-colors">
                <Star className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-bold text-[#162726] text-[16px]">{instructor.rating} Instructor Rating</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start group">
              <div className="w-10 h-10 rounded-full bg-[#07A698]/5 flex items-center justify-center mr-4 group-hover:bg-[#07A698] transition-colors">
                <Users className="w-5 h-5 text-[#07A698] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-bold text-[#162726] text-[16px]">{instructor.students.toLocaleString()} Students</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start group">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors">
                <Award className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-bold text-[#162726] text-[16px]">{instructor.courses} Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorSection;