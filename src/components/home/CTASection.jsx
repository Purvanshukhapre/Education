import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-teal-500 text-white rounded-3xl my-16">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-xl mb-8 text-teal-100">
          Join thousands of students and start your learning journey today. Get access to premium courses and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-500 hover:bg-slate-100 rounded-full px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-500 rounded-full px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105">
            View Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;