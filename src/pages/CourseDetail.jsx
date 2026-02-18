import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseHero from '../components/courseDetail/CourseHero';
import PurchaseCard from '../components/courseDetail/PurchaseCard';
import WhatYouLearn from '../components/courseDetail/WhatYouLearn';
import CourseContent from '../components/courseDetail/CourseContent';
import InstructorSection from '../components/courseDetail/InstructorSection';
import ReviewsSection from '../components/courseDetail/ReviewsSection';
import FAQSection from '../components/courseDetail/FAQSection';

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[#F2F4F7] min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            <CourseHero course={course} />
            <WhatYouLearn />
            <CourseContent />
            <InstructorSection course={course} />
            <ReviewsSection course={course} />
            <FAQSection />
          </div>

          {/* Right Purchase Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <PurchaseCard course={course} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetail;