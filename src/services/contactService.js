import api from './api';

const contactService = {
  // Submit contact form
  submitContact: async (contactData) => {
    try {
      const response = await api.post('/contacts', contactData);
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

  // Get single contact (admin only)
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


};

export default contactService;