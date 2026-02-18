import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-card border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image skeleton */}
            <div className="h-48 bg-gray-200"></div>
            
            {/* Content skeleton */}
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4 w-3/4"></div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-200 rounded mr-1"></div>
                  ))}
                </div>
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;