import api from './api';

const adminService = {
  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      const response = await api.get('/admin/dashboard');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all users (admin only)
  getAllUsers: async (params = {}) => {
    try {
      const response = await api.get('/users', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all courses (admin only)
  getAllCourses: async (params = {}) => {
    try {
      const response = await api.get('/courses', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all enrollments (admin only)
  getAllEnrollments: async (params = {}) => {
    try {
      const response = await api.get('/enrollments', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all feedback (admin only)
  getAllFeedback: async (params = {}) => {
    try {
      const response = await api.get('/feedback', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Toggle user active status (admin only)
  toggleUserActive: async (id) => {
    try {
      const response = await api.put(`/users/${id}/toggle-active`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get enrollment statistics (admin only)
  getEnrollmentStats: async () => {
    try {
      const response = await api.get('/admin/stats/enrollment');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all contacts (admin only)
  getAllContacts: async (params = {}) => {
    try {
      const response = await api.get('/contacts', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single contact by ID (admin only)
  getContactById: async (id) => {
    try {
      const response = await api.get(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update contact (admin only)
  updateContact: async (id, contactData) => {
    try {
      const response = await api.put(`/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete contact (admin only)
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete feedback (admin only)
  deleteFeedback: async (id) => {
    try {
      const response = await api.delete(`/feedback/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default adminService;