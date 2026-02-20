import React, { useState, useEffect } from 'react';
import { Star, FileText, Users, ArrowRight, Zap } from 'lucide-react';
import courseService from '../../services/courseService';
import { ClipLoader } from 'react-spinners';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await courseService.getTopRatedCourses(3);
        setCourses(response.data || []);
      } catch (err) {
        setError('Failed to load courses');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.floor(rating)
              ? 'text-amber-400 fill-current'
              : 'text-slate-600'
              }`}
          />
        ))}
        {rating > 0 && <span className="ml-2 text-slate-400 text-xs">({rating.toFixed(2)})</span>}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-32 bg-[#162726]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#F2F4F7] rounded-full px-4 py-1.5 mb-4 border-none">
              <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
                <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
              </div>
              <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none">
                Top Class Courses
              </span>
            </div>
            <h2 className="text-[42px] font-semibold text-[#E5E9F0] leading-tight tracking-tight">
              Explore Featured Courses
            </h2>
          </div>
          <div className="flex justify-center items-center h-64">
            <ClipLoader color="#07A698" size={50} />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 bg-[#162726]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-red-400">
            <p className="text-xl">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#162726]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F2F4F7] rounded-full px-4 py-1.5 mb-4 border-none">
            <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
              <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
            </div>
            <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none">
              Top Class Courses
            </span>
          </div>
          <h2 className="text-[42px] font-semibold text-[#E5E9F0] leading-tight tracking-tight">
            Explore Featured Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id || course.id}
              className="bg-[#191A1F] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop'}
                  alt={course.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-slate-400 text-sm">
                  <div className="flex items-center"><FileText className="w-4 h-4 mr-1" /> {course.courseCurriculum?.length || 0} Modules</div>
                  <div className="flex items-center"><Users className="w-4 h-4 mr-1" /> {course.students || 0} Students</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 hover:text-teal-400 transition-colors cursor-pointer">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                      {course.instructor?.charAt(0) || 'I'}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">{course.instructor || 'Instructor'}</h4>
                      <p className="text-slate-400 text-xs">Course Instructor</p>
                    </div>
                  </div>
                  {renderStars(course.rating || 0)}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-lg">${course.price || 0}</span>
                  <button className="text-white font-semibold hover:text-teal-400 transition-colors flex items-center">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;