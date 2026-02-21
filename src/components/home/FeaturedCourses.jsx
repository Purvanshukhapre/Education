import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Play } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import courseService from '../../services/courseService';
import { ClipLoader } from 'react-spinners';

const FeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        setLoading(true);
        // Get top-rated courses as featured courses
        const response = await courseService.getTopRatedCourses(6);
        console.log('Top rated courses response:', response);
        const coursesData = response.courses || response.data || response || [];
        console.log('Courses data:', coursesData);
        console.log('First course example:', coursesData[0]);
        setFeaturedCourses(coursesData);
      } catch (err) {
        console.error('Error fetching featured courses:', err);
        setError('Failed to load featured courses');
        // Fallback to getting all courses and taking first 6
        try {
          const allCoursesResponse = await courseService.getAllCourses({ limit: 6 });
          setFeaturedCourses(allCoursesResponse.courses || allCoursesResponse.data || allCoursesResponse || []);
        } catch (fallbackErr) {
          console.error('Error fetching fallback courses:', fallbackErr);
          setError('Failed to load courses');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchFeaturedCourses();
  }, []);



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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <ClipLoader color="#07A698" size={50} />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-text-secondary">
            <p>{error}</p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredCourses.map((course) => (
              <Link 
                key={course._id || course.id}
                to={`/courses/${course._id || course.id}`}
                className="block"
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow cursor-pointer">
                  {/* Course Image */}
                  <div className="relative">
                    <img
                      src={course.thumbnail || course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjJGNEY3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0iIzZDNzE2RiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q291cnNlIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
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
                        {course.experienceLevel || course.level}
                      </Badge>
                      <span className="text-accent font-bold">
                        ${course.price || 0}
                        {course.originalPrice && (
                          <span className="text-text-muted line-through text-sm ml-1">
                            ${course.originalPrice}
                          </span>
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
                      <span className="pointer-events-none">
                        {course.title}
                      </span>
                    </h3>

                    <p className="text-text-secondary text-sm mb-4 flex-1">
                      <span className="pointer-events-none">
                        {course.shortDescription || course.description}
                      </span>
                    </p>

                    <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="pointer-events-none">{(course.enrollmentCount || course.students || 0).toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="pointer-events-none">{course.duration || 'N/A'}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="pointer-events-none">
                        {renderStars(course.averageRating || course.rating || 0)}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const courseId = course._id || course.id;
                          if (courseId) {
                            navigate(`/courses/${courseId}`);
                          } else {
                            console.error('No course ID found');
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => navigate('/courses')}
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;