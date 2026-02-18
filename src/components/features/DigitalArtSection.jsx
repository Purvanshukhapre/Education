import React from 'react';
import { Palette, Code, Music, Camera, PenTool, Gamepad2 } from 'lucide-react';

const DigitalArtSection = () => {
  const categories = [
    {
      icon: Palette,
      title: 'Digital Art & Design',
      description: 'Master creative tools and techniques for digital art creation',
      courses: '24 Courses',
      color: 'text-purple-500'
    },
    {
      icon: Code,
      title: 'Programming & Tech',
      description: 'Learn coding languages and development frameworks',
      courses: '36 Courses',
      color: 'text-blue-500'
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Create professional music with industry-standard tools',
      courses: '18 Courses',
      color: 'text-pink-500'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Master photography techniques and post-processing',
      courses: '22 Courses',
      color: 'text-amber-500'
    },
    {
      icon: PenTool,
      title: 'Writing & Content',
      description: 'Develop compelling content and storytelling skills',
      courses: '15 Courses',
      color: 'text-green-500'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Build interactive games and immersive experiences',
      courses: '20 Courses',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Explore Creative Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover diverse learning paths across multiple creative and technical disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                  <Icon className={`w-12 h-12 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <div className="text-lg font-semibold text-teal-500">{category.courses}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalArtSection;