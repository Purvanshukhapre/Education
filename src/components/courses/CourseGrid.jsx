import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../../data/courses';
import CourseCard from './CourseCard';

const CourseGrid = ({ filters }) => {
  const { category, level, priceRange } = filters;

  const filteredCourses = courses.filter(course => {
    const categoryMatch = category === 'All Categories' || course.category === category;
    const levelMatch = level === 'All Levels' || course.level === level;
    const priceMatch = course.price <= priceRange[1];
    
    return categoryMatch && levelMatch && priceMatch;
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
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </motion.div>
  );
};

export default CourseGrid;