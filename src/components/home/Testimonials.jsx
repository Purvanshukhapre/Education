import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      review: 'This platform has completely transformed my learning journey. The courses are well-structured and the instructors are amazing!'
    },
    {
      name: 'Maria Garcia',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      review: 'Ive learned so much in such a short time. The practical projects helped me land a new job in my dream company.'
    },
    {
      name: 'David Chen',
      role: 'Data Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 4,
      review: 'The quality of content is exceptional. I particularly enjoyed the hands-on projects and real-world case studies.'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-amber-500 fill-current' 
                : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from our satisfied students who have transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
              {renderStars(testimonial.rating)}
              <p className="text-slate-600 mb-6 italic">"{testimonial.review}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;