import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, Send, CheckCircle, Filter, Search } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import courseService from '../services/courseService';
import feedbackService from '../services/feedbackService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const FeedbackPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'newest',
    minRating: 0
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchData();
  }, [courseId, filters, searchTerm]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch course details if courseId is provided
      if (courseId) {
        const courseResponse = await courseService.getCourseById(courseId);
        setCourse(courseResponse.course);
      }
      
      // Fetch all feedback for the course or all feedback
      let feedbackResponse;
      if (courseId) {
        feedbackResponse = await feedbackService.getCourseFeedback(courseId);
      } else {
        feedbackResponse = await feedbackService.getAllFeedback();
      }
      
      setFeedbacks(feedbackResponse.feedbacks || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load feedback');
    } finally {
      setLoading(false);
    }
  };

  const handleStarClick = (rating) => {
    setFeedback({ ...feedback, rating });
  };

  const handleInputChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    if (!isAuthenticated) {
      toast.error('Please log in to submit feedback');
      return;
    }

    try {
      setSubmitting(true);
      const feedbackData = {
        courseId: courseId || null, // Can submit general feedback if no course specified
        rating: feedback.rating,
        comment: feedback.comment
      };
      
      await feedbackService.submitFeedback(feedbackData);
      setFeedback({ rating: 0, comment: '' });
      setHasSubmitted(true);
      toast.success('Feedback submitted successfully!');
      fetchData(); // Refresh the feedback list
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to submit feedback');
    } finally {
      setSubmitting(false);
    }
  };

  // Filter and sort feedbacks
  const filteredFeedbacks = feedbacks
    .filter(fb => 
      fb.comment.toLowerCase().includes(searchTerm.toLowerCase()) &&
      fb.rating >= filters.minRating
    )
    .sort((a, b) => {
      if (filters.sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (filters.sortBy === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      if (filters.sortBy === 'highest') return b.rating - a.rating;
      if (filters.sortBy === 'lowest') return a.rating - b.rating;
      return 0;
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center">
          <ClipLoader color="#07A698" size={50} />
          <p className="mt-4 text-gray-600">Loading feedback...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {courseId ? `${course?.title} Reviews` : 'Community Feedback'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your experience and read what others have to say
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Submit Feedback */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ThumbsUp className="h-5 w-5 mr-2 text-[#07A698]" />
                Your Feedback
              </h2>
              
              {hasSubmitted && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-700 text-sm">Thank you for your feedback!</span>
                </div>
              )}
              
              {isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className={`text-3xl ${
                            star <= (hoverRating || feedback.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          } hover:text-yellow-400 transition-colors`}
                        >
                          <Star
                            fill={star <= (hoverRating || feedback.rating) ? 'currentColor' : 'none'}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {feedback.rating > 0 ? `You rated: ${feedback.rating} star${feedback.rating !== 1 ? 's' : ''}` : 'Please select a rating'}
                    </p>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={feedback.comment}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Share your thoughts and experience..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || feedback.rating === 0}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg text-white transition-colors ${
                      submitting || feedback.rating === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#07A698] hover:bg-[#05857a]'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <ClipLoader color="#ffffff" size={20} className="mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Feedback
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Please log in to submit feedback</p>
                  <button
                    onClick={() => toast.info('Please log in to continue')}
                    className="px-4 py-2 bg-[#07A698] text-white rounded-lg hover:bg-[#05857a]"
                  >
                    Login Required
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Feedback List */}
          <div className="lg:col-span-2">
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                  </select>
                  
                  <select
                    value={filters.minRating}
                    onChange={(e) => setFilters({...filters, minRating: parseInt(e.target.value)})}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                  >
                    <option value="0">All Ratings</option>
                    <option value="1">1+ Stars</option>
                    <option value="2">2+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Feedback List */}
            <div className="space-y-6">
              {filteredFeedbacks.length > 0 ? (
                filteredFeedbacks.map((fb) => (
                  <div key={fb._id} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900">{fb.user?.fullName || 'Anonymous'}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(fb.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < fb.rating ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium text-gray-900">{fb.rating}/5</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{fb.comment}</p>
                    
                    {fb.course && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">Regarding: {fb.course.title}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <ThumbsUp className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No feedback yet</h3>
                  <p className="text-gray-500">
                    Be the first to share your experience!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;