import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      rating: 4.8,
      students: 12500,
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 8900,
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 15600,
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      category: 'Design'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) 
                ? 'text-amber-500 fill-current' 
                : 'text-slate-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-slate-600">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Courses</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our most popular courses and start learning from expert instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  {renderStars(course.rating)}
                  <span className="text-sm text-slate-500">{course.students.toLocaleString()} students</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-600 mb-4">by {course.instructor}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-500">${course.price}</span>
                  <Link to={`/courses/${course.id}`}>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;