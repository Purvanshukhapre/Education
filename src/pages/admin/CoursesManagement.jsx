import React, { useState, useEffect, useCallback } from 'react';
import { Search, Plus, Edit, Trash2, Eye, BookOpen, Star, DollarSign, X } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import courseService from '../../services/courseService';
import { toast } from 'react-toastify';

const CoursesManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    category: '',
    instructor: '',
    experienceLevel: '',
    shortDescription: '',
    thumbnail: ''
  });

  const itemsPerPage = 10;

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await courseService.getAllCourses({
        page: currentPage,
        limit: itemsPerPage
      });
      // Handle different response structures
      const coursesData = response.courses || response.data || response || [];
      setCourses(coursesData);
      // Calculate total pages based on available data
      const totalItems = response.totalCourses || coursesData.length;
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetchCourses();
  }, [currentPage, fetchCourses]);
  
  const handleDeleteCourse = async (courseId) => {
    if (!window.confirm('Are you sure you want to delete this course?')) {
      return;
    }

    try {
      await courseService.deleteCourse(courseId);
      fetchCourses(); // Refresh the list
      toast.success('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Failed to delete course');
    }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title || '',
      description: course.description || '',
      price: course.price || 0,
      category: course.category || '',
      instructor: course.instructor || '',
      experienceLevel: course.experienceLevel || '',
      shortDescription: course.shortDescription || '',
      thumbnail: course.thumbnail || course.image || ''
    });
    setShowForm(true);
  };

  const handleAddCourse = () => {
    setEditingCourse(null);
    setFormData({
      title: '',
      description: '',
      price: 0,
      category: '',
      instructor: '',
      experienceLevel: '',
      shortDescription: '',
      thumbnail: ''
    });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      if (editingCourse) {
        await courseService.updateCourse(editingCourse._id, formData);
        toast.success('Course updated successfully');
      } else {
        await courseService.createCourse(formData);
        toast.success('Course created successfully');
      }
      
      fetchCourses();
      setShowForm(false);
    } catch (error) {
      console.error('Error saving course:', error);
      toast.error('Failed to save course');
    } finally {
      setFormLoading(false);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingCourse(null);
    setFormData({
      title: '',
      description: '',
      price: 0,
      category: '',
      instructor: '',
      experienceLevel: '',
      shortDescription: '',
      thumbnail: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ClipLoader color="#07A698" size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#07A698] to-[#162726] px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Courses Management</h1>
                <p className="text-white/80 mt-1">Manage all platform courses</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleAddCourse}
                  className="flex items-center px-4 py-2 bg-white text-[#07A698] rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 border-b">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCourses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {course.thumbnail || course.image ? (
                            <img
                              src={course.thumbnail || course.image}
                              alt={course.title}
                              className="h-10 w-10 rounded-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjJGNEY3Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1zaXplPSIxMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZpbGw9IiM2QzcxNkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPlRodW1iPC90ZXh0Pgo8L3N2Zz4K';
                              }}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-[#07A698]/10 flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-[#07A698]" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          <div className="text-sm text-gray-500">{course.instructor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {course.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                        {course.averageRating?.toFixed(1) || '0.0'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewCourse(course)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(course)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, courses.length)} of {courses.length} results
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <span className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-gray-50">
                  {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Course Details</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Course Image</p>
                  <div className="mt-1">
                    {selectedCourse.thumbnail || selectedCourse.image ? (
                      <img
                        src={selectedCourse.thumbnail || selectedCourse.image}
                        alt={selectedCourse.title}
                        className="h-24 w-24 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iOCIgZmlsbD0iI0YyRjRGNyIvPgo8dGV4dCB4PSI0OCIgeT0iNDgiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmIiBmaWxsPSIjNkM3MTZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+Cg==';
                        }}
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-lg bg-gray-200 border-2 border-dashed flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Title</p>
                  <p className="text-sm text-gray-900">{selectedCourse.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-sm text-gray-900">{selectedCourse.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Instructor</p>
                  <p className="text-sm text-gray-900">{selectedCourse.instructor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Price</p>
                  <p className="text-sm text-gray-900">${selectedCourse.price}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Experience Level</p>
                  <p className="text-sm text-gray-900">{selectedCourse.experienceLevel}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Short Description</p>
                  <p className="text-sm text-gray-900">{selectedCourse.shortDescription}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Rating</p>
                  <p className="text-sm text-gray-900">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {selectedCourse.averageRating?.toFixed(1) || '0.0'} ({selectedCourse.reviewCount || 0} reviews)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Course Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {editingCourse ? 'Edit Course' : 'Add New Course'}
                </h3>
                <button
                  onClick={closeForm}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                        Price *
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleFormChange}
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-1">
                        Instructor *
                      </label>
                      <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Short Description
                    </label>
                    <textarea
                      id="shortDescription"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleFormChange}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
                      Thumbnail URL
                    </label>
                    <input
                      type="url"
                      id="thumbnail"
                      name="thumbnail"
                      value={formData.thumbnail}
                      onChange={handleFormChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="flex-1 bg-[#07A698] text-white py-2 px-4 rounded-md hover:bg-[#05857a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formLoading ? (
                      <span className="flex items-center justify-center">
                        <ClipLoader color="#ffffff" size={16} className="mr-2" />
                        Saving...
                      </span>
                    ) : (
                      editingCourse ? 'Update Course' : 'Create Course'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesManagement;