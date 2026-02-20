import api from './api';

const feedbackService = {
  // Get all feedback
  getAllFeedback: async (params = {}) => {
    try {
      const response = await api.get('/admin/feedback', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get feedback for a specific course
  getCourseFeedback: async (courseId) => {
    try {
      const response = await api.get(`/feedback/course/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single feedback
  getFeedbackById: async (id) => {
    try {
      const response = await api.get(`/feedback/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Submit feedback
  submitFeedback: async (feedbackData) => {
    try {
      const response = await api.post('/feedback', feedbackData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update feedback
  updateFeedback: async (id, feedbackData) => {
    try {
      const response = await api.put(`/feedback/${id}`, feedbackData);
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

export default feedbackService;