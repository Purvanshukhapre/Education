import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FilterSidebar from '../components/courses/FilterSidebar';
import CourseGrid from '../components/courses/CourseGrid';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';

const Courses = () => {
  const [filters, setFilters] = useState({
    category: 'All Categories',
    level: 'All Levels',
    priceRange: [0, 500]
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div>
      <PageHeader
        title="All Courses"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="py-12">
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="lg:w-72 flex-shrink-0"
            variants={itemVariants}
          >
            <FilterSidebar
              onFilterChange={handleFilterChange}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />
          </motion.div>

          <motion.div
            className="flex-1"
            variants={itemVariants}
          >
            <CourseGrid filters={filters} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;