import api from './api';

const eventService = {
  // Get all events
  getAllEvents: async (params = {}) => {
    try {
      const response = await api.get('/events', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single event by ID
  getEventById: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create new event (admin only)
  createEvent: async (eventData) => {
    try {
      const response = await api.post('/events', eventData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update event (admin only)
  updateEvent: async (id, eventData) => {
    try {
      const response = await api.put(`/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete event (admin only)
  deleteEvent: async (id) => {
    try {
      const response = await api.delete(`/events/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Register for event
  registerForEvent: async (id) => {
    try {
      const response = await api.post(`/events/${id}/register`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get user's registered events
  getMyEvents: async () => {
    try {
      const response = await api.get('/events/my-events');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default eventService;