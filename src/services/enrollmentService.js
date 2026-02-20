import api from './api';

const enrollmentService = {
  // Enroll in a course
  enrollInCourse: async (courseId) => {
    try {
      const response = await api.post('/enrollments', { courseId });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get user's enrollments
  getMyEnrollments: async () => {
    try {
      const response = await api.get('/enrollments/my-enrollments');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all enrollments (admin only)
  getAllEnrollments: async (params = {}) => {
    try {
      const response = await api.get('/admin/enrollments', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single enrollment (admin only)
  getEnrollmentById: async (id) => {
    try {
      const response = await api.get(`/admin/enrollments/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },


};

export default enrollmentService;