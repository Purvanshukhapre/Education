import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on app start
  useEffect(() => {
    // Clear any potentially problematic cached data
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        console.log('User authenticated:', parsedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch {
        // Invalid user data, clear storage
        console.log('Invalid user data, clearing storage');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    } else {
      console.log('No user data found');
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    const response = await authService.login(credentials);
    console.log('Login response:', response);
    console.log('User role:', response.user?.role);
    
    // Handle different response structures
    let token, user;
    if (response.token && response.user) {
      // Direct structure
      token = response.token;
      user = response.user;
    } else if (response.data && response.data.token && response.data.user) {
      // Nested data structure
      token = response.data.token;
      user = response.data.user;
    } else {
      throw new Error('Invalid login response format');
    }
    
    // Store token and user data
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    setUser(user);
    setIsAuthenticated(true);
    
    return response;
  };

  // Register function
  const register = async (userData) => {
    return await authService.register(userData);
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage regardless of API response
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  // Update user details
  const updateDetails = async (userData) => {
    const response = await authService.updateDetails(userData);
    const updatedUser = response.data.user;
    
    // Update local storage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    return response;
  };

  // Update password
  const updatePassword = async (passwordData) => {
    return await authService.updatePassword(passwordData);
  };

  // Forgot password
  const forgotPassword = async (email) => {
    return await authService.forgotPassword(email);
  };

  // Reset password
  const resetPassword = async (resetToken, password) => {
    return await authService.resetPassword(resetToken, password);
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user && user.role === role;
  };

  // Check if user is admin
  const isAdmin = () => {
    return hasRole('admin');
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateDetails,
    updatePassword,
    forgotPassword,
    resetPassword,
    hasRole,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};