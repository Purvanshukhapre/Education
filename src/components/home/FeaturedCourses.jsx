import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const FeaturedCourses = () => {
  const featuredCourses = courses.filter(course => course.isFeatured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) 
                ? 'text-warning fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-text-secondary">
          {rating}
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#162726]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Featured Courses
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Top Rated Courses
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover our most popular courses handpicked by learners just like you
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredCourses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" size="sm">
                      {course.level}
                    </Badge>
                    <span className="text-accent font-bold">
                      ${course.price}
                      {course.originalPrice && (
                        <span className="text-text-muted line-through text-sm ml-1">
                          ${course.originalPrice}
                        </span>
                      )}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4 flex-1">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {renderStars(course.rating)}
                    <Link to={`/courses/${course.id}`}>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/courses">
          <Button size="lg">
            Browse All Courses
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;