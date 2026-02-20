import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import adminService from '../../services/adminService';
import { ClipLoader } from 'react-spinners';

const StatsSection = () => {
  const [stats, setStats] = useState([
    {
      number: '19.5',
      suffix: 'K',
      label: 'Students Enrolled'
    },
    {
      number: '12.5',
      suffix: 'K',
      label: 'Class Completed'
    },
    {
      number: '96',
      suffix: '%',
      label: 'Satisfaction Rate'
    },
    {
      number: '325',
      suffix: '+',
      label: 'Top Instructors'
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await adminService.getDashboardStats();
        
        // Transform API response to match stats format
        if (response.stats) {
          const apiStats = [
            {
              number: (response.stats.totalUsers / 1000).toFixed(1),
              suffix: 'K',
              label: 'Students Enrolled'
            },
            {
              number: (response.stats.totalCourses / 1000).toFixed(1),
              suffix: 'K',
              label: 'Courses Completed'
            },
            {
              number: response.stats.averageRating ? (response.stats.averageRating * 20).toFixed(0) : '96',
              suffix: '%',
              label: 'Satisfaction Rate'
            },
            {
              number: response.stats.totalInstructors || '325',
              suffix: '+',
              label: 'Top Instructors'
            }
          ];
          setStats(apiStats);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
        // Check if it's a 401/403 error (unauthorized/forbidden) - means user doesn't have admin access
        if (err.response?.status === 401 || err.response?.status === 403) {
          // Use default stats for non-admin users
          // Keep default stats as fallback
          console.log('Using default stats for non-admin user');
        } else {
          // For other errors, keep default stats
          console.warn('Using default stats due to error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center h-32">
            <ClipLoader color="#07A698" size={40} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-[#07A698] mb-2 font-outfit flex justify-center items-center">
                <span className="odometer" data-count={stat.number}>{stat.number}</span>
                <span className="text-4xl md:text-5xl ml-1">{stat.suffix}</span>
              </h3>
              <p className="text-lg text-[#162726] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;