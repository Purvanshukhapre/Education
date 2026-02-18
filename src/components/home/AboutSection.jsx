import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              alt="About our platform"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Our Platform</h2>
            <h3 className="text-2xl font-bold text-teal-500 mb-6">The Best Educational Center</h3>
            <p className="text-slate-600 mb-6">
              Discover a wide range of courses from expert instructors and advance your career with our professional programs. 
              Our platform provides high-quality education accessible to everyone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span>Expert instructors with real-world experience</span>
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span>Flexible learning schedules to fit your life</span>
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span>Industry-recognized certificates and credentials</span>
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span>24/7 support and community access</span>
              </li>
            </ul>
            <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;