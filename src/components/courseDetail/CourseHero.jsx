import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Play } from 'lucide-react';

const CourseHero = ({ course }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating)
                ? 'text-amber-400 fill-current'
                : 'text-gray-200'
              }`}
          />
        ))}
        {rating > 0 && <span className="ml-2 text-[14px] font-bold text-[#162726]">({rating.toFixed(2)})</span>}
      </div>
    );
  };

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-3 text-[14px] font-medium">
          <li>
            <Link to="/" className="text-[#6C706F] hover:text-[#07A698] transition-colors">
              Home
            </Link>
          </li>
          <li className="text-gray-300">/</li>
          <li>
            <Link to="/courses" className="text-[#6C706F] hover:text-[#07A698] transition-colors">
              Courses
            </Link>
          </li>
          <li className="text-gray-300">/</li>
          <li className="text-[#07A698]">{course.title}</li>
        </ol>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#07A698]/10 text-[#07A698] px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
          {course.category}
        </span>
        <span className="bg-[#F2F4F7] text-[#162726] px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
          {course.level}
        </span>
      </div>

      <h1 className="text-3xl md:text-[42px] font-bold text-[#162726] mb-6 leading-tight">
        {course.title}
      </h1>

      <p className="text-[#6C706F] text-[18px] mb-8 leading-relaxed max-w-3xl">
        {course.description}
      </p>

      <div className="flex flex-wrap items-center gap-8 mb-10 pb-10 border-b border-gray-100">
        <div className="flex items-center">
          {renderStars(course.rating)}
        </div>
        <div className="flex items-center text-[#162726] font-semibold text-[15px]">
          <Users className="w-5 h-5 mr-2.5 text-[#07A698]" />
          <span>{course.students.toLocaleString()} Students Enrolled</span>
        </div>
        <div className="flex items-center text-[#162726] font-semibold text-[15px]">
          <Clock className="w-5 h-5 mr-2.5 text-[#07A698]" />
          <span>Last Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="relative rounded-[24px] overflow-hidden group">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500">
            <Play className="w-10 h-10 text-[#07A698] fill-current ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseHero;