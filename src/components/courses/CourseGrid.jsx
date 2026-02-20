import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import courseService from '../../services/courseService';
import { ClipLoader } from 'react-spinners';

const CourseGrid = ({ filters }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category, level, priceRange } = filters;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const params = {};
        
        if (category && category !== 'All Categories') {
          params.category = category;
        }
        if (level && level !== 'All Levels') {
          params.experienceLevel = level;
        }
        
        const response = await courseService.getAllCourses(params);
        setCourses(response.data || []);
      } catch (err) {
        setError('Failed to load courses');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category, level]);

  const filteredCourses = courses.filter(course => {
    const priceMatch = !priceRange || course.price <= priceRange[1];
    return priceMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <ClipLoader color="#07A698" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          No courses found
        </h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredCourses.map((course, index) => (
        <CourseCard key={course._id || course.id} course={course} index={index} />
      ))}
    </motion.div>
  );
};

export default CourseGrid;