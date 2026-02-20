import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

const Analytics = () => {
  const [analytics, setAnalytics] = useState({});
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    // Mock data for now - replace with actual API call
    const mockAnalytics = {
      totalStudents: 12540,
      totalCourses: 156,
      totalRevenue: 254000,
      totalEnrollments: 8920,
      averageRating: 4.7,
      monthlyGrowth: 12.5,
      popularCourses: [
        { name: 'React Development Masterclass', enrollments: 1250, rating: 4.8 },
        { name: 'Python Programming', enrollments: 980, rating: 4.6 },
        { name: 'UI/UX Design Fundamentals', enrollments: 756, rating: 4.7 }
      ],
      revenueData: [
        { month: 'Jan', revenue: 18000 },
        { month: 'Feb', revenue: 22000 },
        { month: 'Mar', revenue: 25000 },
        { month: 'Apr', revenue: 28000 },
        { month: 'May', revenue: 32000 },
        { month: 'Jun', revenue: 35000 }
      ]
    };
    
    setTimeout(() => {
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, [timeRange]);

  const statCards = [
    {
      title: 'Total Students',
      value: analytics.totalStudents?.toLocaleString(),
      icon: Users,
      color: 'bg-blue-500',
      change: '+12% from last month'
    },
    {
      title: 'Total Courses',
      value: analytics.totalCourses?.toLocaleString(),
      icon: BookOpen,
      color: 'bg-green-500',
      change: '+8% from last month'
    },
    {
      title: 'Total Revenue',
      value: `$${analytics.totalRevenue?.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-purple-500',
      change: '+22% from last month'
    },
    {
      title: 'Total Enrollments',
      value: analytics.totalEnrollments?.toLocaleString(),
      icon: TrendingUp,
      color: 'bg-yellow-500',
      change: '+15% from last month'
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#07A698" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Platform performance and insights</p>
        </div>
        <div className="flex items-center gap-2">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last 90 Days</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                <p className="text-sm text-green-600 mt-2">{card.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${card.color}`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <DollarSign className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Revenue Chart</p>
              <p className="text-sm">Visualization coming soon</p>
            </div>
          </div>
        </div>

        {/* Popular Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Popular Courses</h3>
            <BookOpen className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {analytics.popularCourses?.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.enrollments} enrollments</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Student Growth</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">+{analytics.monthlyGrowth}%</p>
          <p className="text-sm text-gray-600">Monthly growth rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Course Completion</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">87%</p>
          <p className="text-sm text-gray-600">Average completion rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">3,240</p>
          <p className="text-sm text-gray-600">Users this month</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;