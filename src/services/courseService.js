import api from './api';

const courseService = {
  // Get all courses with optional filters (public endpoint)
  getAllCourses: async (params = {}) => {
    try {
      const response = await api.get('/courses', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single course by ID
  getCourseById: async (id) => {
    try {
      const response = await api.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create new course (admin only)
  createCourse: async (courseData) => {
    try {
      const response = await api.post('/courses', courseData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update course (admin only)
  updateCourse: async (id, courseData) => {
    try {
      const response = await api.put(`/courses/${id}`, courseData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete course (admin only)
  deleteCourse: async (id) => {
    try {
      const response = await api.delete(`/courses/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Upload course thumbnail (admin only)
  uploadThumbnail: async (id, formData) => {
    try {
      const response = await api.put(`/courses/${id}/upload-thumbnail`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get top rated courses
  getTopRatedCourses: async (limit = 6) => {
    try {
      const response = await api.get('/courses/top', { params: { limit } });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get most popular courses
  getPopularCourses: async (limit = 6) => {
    try {
      const response = await api.get('/courses/popular', { params: { limit } });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get courses by category
  getCoursesByCategory: async (category) => {
    try {
      const response = await api.get(`/courses/category/${category}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default courseService;