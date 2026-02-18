import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Zap } from 'lucide-react';

const InstructorsSection = () => {
  const instructors = [
    {
      name: 'Mason D. Logan',
      role: 'IT Trainer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' }
      ]
    },
    {
      name: 'Scarlett Hannah',
      role: 'IT Trainer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' }
      ]
    },
    {
      name: 'Chloe Smith',
      role: 'IT Trainer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' }
      ]
    },
    {
      name: 'Madison Chloe',
      role: 'IT Trainer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      social: [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' }
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[white] rounded-full px-4 py-1.5 mb-4 border border-gray-300/20">
            <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
              <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
            </div>
            <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none">
              Our Features
            </span>
          </div>
          <h2 className="text-[42px] font-bold text-[#162726] mb-6 leading-[1.2]">
            Meet Our Expert Instructor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {instructor.social.map((social, socialIndex) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={socialIndex}
                          href={social.href}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#07A698] hover:bg-[#07A698] hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-[50ms]"
                        >
                          <SocialIcon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#162726] mb-1 hover:text-[#07A698] transition-colors cursor-pointer">{instructor.name}</h3>
                <p className="text-[#07A698] font-medium text-sm uppercase tracking-wide">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;