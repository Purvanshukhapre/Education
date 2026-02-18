import React from 'react';
import { Play } from 'lucide-react';

const CareerSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Career with Us
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Join thousands of successful professionals who have advanced their careers through our comprehensive learning programs and industry connections.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                <span className="text-slate-200">Personalized career guidance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                <span className="text-slate-200">Industry networking opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                <span className="text-slate-200">Job placement assistance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                <span className="text-slate-200">Portfolio development support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="relative">
            <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Career development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center shadow-xl hover:bg-teal-600 transition-all duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;