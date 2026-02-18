import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    'Master industry-standard tools and software',
    'Build real-world projects from scratch',
    'Get career-ready with portfolio development',
    'Learn from experienced professionals',
    'Access 24/7 community support',
    'Earn recognized certificates'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Develop In-Demand Skills
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Our comprehensive curriculum is designed to equip you with the skills that employers are actively seeking in today's competitive job market.
            </p>
            
            <div className="space-y-4 mb-10">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-4 flex-shrink-0" />
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Start Learning Today
            </button>
          </div>
          
          {/* Right Video */}
          <div className="relative">
            <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                alt="Learning platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center shadow-xl hover:bg-teal-600 transition-all duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;