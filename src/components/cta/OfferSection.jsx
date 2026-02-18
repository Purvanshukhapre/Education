import React from 'react';

const OfferSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-500 to-teal-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Limited Time Offer
        </h2>
        <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
          Get 40% off on all premium courses for a limited time. Start your learning journey today and transform your career.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 inline-block">
          <div className="text-6xl font-bold text-white mb-2">40% OFF</div>
          <div className="text-2xl text-teal-100">On All Premium Courses</div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-500 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
            Claim Your Discount
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-teal-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
            View Courses
          </button>
        </div>
        
        <div className="mt-8 text-teal-100">
          <p className="text-sm">Offer ends in 3 days • Limited spots available</p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;