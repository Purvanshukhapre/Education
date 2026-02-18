import React from 'react';
import { BookOpen, Code, Palette, Video, Music, Briefcase } from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: BookOpen, title: 'Development', count: '120 Courses', color: 'text-blue-500' },
    { icon: Code, title: 'IT & Software', count: '85 Courses', color: 'text-green-500' },
    { icon: Palette, title: 'Design', count: '95 Courses', color: 'text-purple-500' },
    { icon: Video, title: 'Marketing', count: '78 Courses', color: 'text-orange-500' },
    { icon: Music, title: 'Music', count: '65 Courses', color: 'text-red-500' },
    { icon: Briefcase, title: 'Business', count: '110 Courses', color: 'text-teal-500' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Categories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our most popular categories and find the perfect course for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 ${category.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-sm text-slate-500">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;