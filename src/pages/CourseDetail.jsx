import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import courseService from '../services/courseService';
import CourseHero from '../components/courseDetail/CourseHero';
import PurchaseCard from '../components/courseDetail/PurchaseCard';
import WhatYouLearn from '../components/courseDetail/WhatYouLearn';
import CourseContent from '../components/courseDetail/CourseContent';
import InstructorSection from '../components/courseDetail/InstructorSection';
import ReviewsSection from '../components/courseDetail/ReviewsSection';
import FAQSection from '../components/courseDetail/FAQSection';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('CourseDetail mounted with id:', id);
    const fetchCourse = async () => {
      try {
        setLoading(true);
        console.log('Fetching course with id:', id);
        if (!id) {
          console.error('No course ID provided');
          setError('No course ID provided');
          return;
        }
        const response = await courseService.getCourseById(id);
        console.log('Course response:', response);
        setCourse(response.data || response);
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Course not found');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    } else {
      console.error('No ID parameter in route');
      setError('Invalid course URL');
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F2F4F7]">
        <ClipLoader color="#07A698" size={50} />
      </div>
    );
  }

  if (error || !course) {
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