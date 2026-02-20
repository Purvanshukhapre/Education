import React, { useState, useEffect } from 'react';
import { Users, BookOpen, FileText, TrendingUp, Eye, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import adminService from '../../services/adminService';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await adminService.getDashboardStats();
      // Handle different response structures
      setStats(response.stats || response.data || response);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      if (error.response?.status === 403) {
        toast.error('Access denied. Please ensure you have admin privileges.');
      } else {
        toast.error('Failed to load dashboard statistics');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ClipLoader color="#07A698" size={50} />
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Users',
      value: stats?.totalUsers || 0,
      icon: Users,
      color: 'bg-blue-500',
      link: '/admin/users'
    },
    {
      title: 'Total Courses',
      value: stats?.totalCourses || 0,
      icon: BookOpen,
      color: 'bg-green-500',
      link: '/admin/courses'
    },
    {
      title: 'Total Enrollments',
      value: stats?.totalEnrollments || 0,
      icon: FileText,
      color: 'bg-purple-500',
      link: '/admin/enrollments'
    },
    {
      title: 'Total Feedback',
      value: stats?.totalFeedback || 0,
      icon: MessageSquare,
      color: 'bg-yellow-500',
      link: '/admin/feedback'
    },
    {
      title: 'Total Contacts',
      value: stats?.totalContacts || 0,
      icon: MessageSquare,
      color: 'bg-red-500',
      link: '/admin/contacts'
    },
    {
      title: 'Total Events',
      value: stats?.totalEvents || 0,
      icon: Calendar,
      color: 'bg-indigo-500',
      link: '/admin/events'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-gray-600">Manage your platform and monitor activity</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Link
              key={index}
              to={stat.link}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/admin/users"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Users className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-blue-900">Manage Users</span>
            </Link>
            <Link
              to="/admin/courses"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="h-5 w-5 text-green-600 mr-3" />
              <span className="font-medium text-green-900">Manage Courses</span>
            </Link>
            <Link
              to="/admin/enrollments"
              className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <FileText className="h-5 w-5 text-purple-600 mr-3" />
              <span className="font-medium text-purple-900">Manage Enrollments</span>
            </Link>
            <Link
              to="/admin/feedback"
              className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-yellow-600 mr-3" />
              <span className="font-medium text-yellow-900">Manage Feedback</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity - Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-gray-500">
            <Eye className="h-12 w-12 mx-auto text-gray-300 mb-3" />
            <p>Recent activity will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;