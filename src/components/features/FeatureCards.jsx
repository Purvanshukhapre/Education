import React from 'react';
import { Users, BookOpen, GraduationCap, Zap } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Users,
      title: 'Professional Tutors',
      description: 'Learn from industry experts with real-world experience'
    },
    {
      icon: BookOpen,
      title: 'Learn Skills',
      description: 'Master in-demand skills with our comprehensive courses',
      stats: '120k+'
    },
    {
      icon: GraduationCap,
      title: 'Online Degrees',
      description: 'Earn recognized degrees from accredited institutions'
    }
  ];

  return (
    <section className="py-20 bg-[#162726]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-b from-[#123435] to-[#1a4243] border border-[#235455] rounded-xl p-8 hover:border-[#2a9d8f] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1a4243] rounded-full flex items-center justify-center mb-6 hover:bg-[#2a9d8f] transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#b0c4c4] text-sm leading-relaxed mb-4">{feature.description}</p>
                {feature.stats && (
                  <div className="text-2xl font-bold text-[#2a9d8f]">{feature.stats}</div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Top Class Courses Badge */}
        <div className="flex flex-col items-center mt-16">
          <div className="bg-white rounded-full px-6 py-2 flex items-center mb-8">
            <Zap className="w-4 h-4 text-[#2a9d8f] mr-2" />
            <span className="text-sm font-semibold text-white">TOP CLASS COURSES</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Explore Featured Courses</h2>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;