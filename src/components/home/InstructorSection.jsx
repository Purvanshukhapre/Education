import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const InstructorSection = () => {
  const instructors = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' }
      ]
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Mail, href: '#' }
      ]
    },
    {
      name: 'Emma Rodriguez',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Mail, href: '#' }
      ]
    },
    {
      name: 'David Wilson',
      role: 'Marketing Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      social: [
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Mail, href: '#' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Instructors</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn from industry experts who bring real-world experience to every lesson
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md text-center hover:scale-105 transition-all duration-300">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{instructor.name}</h3>
                <p className="text-teal-500 font-medium mb-4">{instructor.role}</p>
                <div className="flex justify-center space-x-4">
                  {instructor.social.map((social, socialIndex) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={socialIndex}
                        href={social.href}
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                      >
                        <SocialIcon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;