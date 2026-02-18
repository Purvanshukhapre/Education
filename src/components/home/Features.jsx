import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience.',
      color: 'text-teal-500'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join a vibrant community of learners worldwide.',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Certified Courses',
      description: 'Earn recognized certificates upon course completion.',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Access course materials anytime, anywhere.',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide the best learning experience with quality content and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center hover:scale-105 transition-all duration-300">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-teal-100 ${feature.color} mx-auto mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;