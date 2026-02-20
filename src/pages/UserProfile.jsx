import React, { useState, useMemo } from 'react';
import { User, Mail, Phone, Edit3, Save, X, Check } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import authService from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [editing, setEditing] = useState(false);
  const [localFormData, setLocalFormData] = useState(null); // Local state for form when editing
  
  const { user: authUser, updateUser } = useAuth();

  // Memoize initial form data based on authUser
  const initialFormData = useMemo(() => ({
    fullName: authUser?.fullName || '',
    email: authUser?.email || '',
    phone: authUser?.phone || ''
  }), [authUser]);

  // Use localFormData when editing, otherwise use initialFormData
  const formData = editing && localFormData ? localFormData : initialFormData;

  const handleInputChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.updateDetails(formData);
      
      // Handle different response structures for update
      let updatedUserData;
      if (response && response.user) {
        updatedUserData = response.user;
      } else if (response && response.data && response.data.user) {
        updatedUserData = response.data.user;
      } else {
        updatedUserData = response || {};
      }
      
      // Update the context user
      updateUser(updatedUserData);
      setEditing(false);
      setLocalFormData(null); // Clear local form data after save
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setLocalFormData(null); // Discard changes
  };

  const startEditing = () => {
    setEditing(true);
    setLocalFormData(initialFormData); // Initialize with current data
  };

  if (!authUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ClipLoader color="#07A698" size={50} />
        <p className="ml-3 text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#07A698] to-[#162726] px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">User Profile</h1>
                <p className="text-white/80">Manage your personal information</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {editing ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-[#07A698] text-white rounded-lg hover:bg-[#05857a] transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{authUser?.fullName || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{authUser?.email || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{authUser?.phone || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Check className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-medium capitalize">{authUser?.role || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={startEditing}
                  className="flex items-center px-4 py-2 bg-[#07A698] text-white rounded-lg hover:bg-[#05857a] transition-colors"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;