import React, { useRef, useState, useEffect } from 'react';
import { Clock, MapPin, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { motion, useMotionValue, animate } from 'framer-motion';

const EventsSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const events = [
    {
      title: 'London International Conference on',
      date: '08:00 AM - 10:00 AM',
      location: 'United States',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/event-10.jpg',
      link: 'https://wp.rrdevs.net/edcare/etn/creating-futures-through-technology/'
    },
    {
      title: 'Creating Futures Through Technology',
      date: '08:00 AM - 10:00 AM',
      location: 'United States',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/event-09.jpg',
      link: 'https://wp.rrdevs.net/edcare/etn/how-meaningful-assignments-can-drive-deeper-learning/'
    },
    {
      title: 'How Meaningful Assignments Can Drive Deeper Learning',
      date: '08:00 AM - 10:00 AM',
      location: 'United States',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/event-08.jpg',
      link: 'https://wp.rrdevs.net/edcare/etn/project-based-learning-engaging-students-through-real-world/'
    },
    {
      title: 'Project-Based Learning: Engaging Students Through Real-World',
      date: '08:00 AM - 10:00 AM',
      location: 'United States',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/event-07.jpg',
      link: 'https://wp.rrdevs.net/edcare/etn/role-of-social-emotional-learning-in-student-success/'
    }
  ];

  const slideLeft = () => {
    const currentX = x.get();
    const newX = Math.min(currentX + 400, 0);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  const slideRight = () => {
    const currentX = x.get();
    const newX = Math.max(currentX - 400, -width);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section className="py-32 bg-[#07A698] relative overflow-hidden">

      {/* Background Shapes */}
      <img
        src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-1.png"
        className="absolute top-20 left-10 opacity-100 z-0"
        alt=""
      />
      <img
        src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-2.png"
        className="absolute bottom-20 right-10 opacity-100 z-0"
        alt=""
      />
      <img
        src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-3.png"
        className="absolute top-1/2 left-1/4 opacity-40 z-0"
        alt=""
      />
      <img
        src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/event-4.png"
        className="absolute bottom-10 left-1/3 opacity-40 z-0"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <div className="bg-white/30 p-1 rounded-full flex items-center justify-center mr-2.5">
                <Zap className="w-3.5 h-3.5 text-white fill-current" />
              </div>
              <span className="text-[14px] font-medium text-white tracking-normal leading-none">
                Upcoming Events
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-center gap-6 mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[42px] font-semibold text-white leading-tight text-center mx-auto"
            >
              Upcoming Events & Webinars
            </motion.h2>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={slideLeft}
                className="w-12 h-12 rounded-full bg-white text-[#07A698] flex items-center justify-center hover:bg-[#162726] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={slideRight}
                className="w-12 h-12 rounded-full bg-white text-[#07A698] flex items-center justify-center hover:bg-[#162726] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          ref={carousel}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            className="flex gap-6"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-[22px] font-bold text-[#162726] mb-6 hover:text-[#07A698] transition-colors cursor-pointer leading-tight line-clamp-2 h-[60px]">
                    <a href={event.link}>{event.title}</a>
                  </h3>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-[#6C706F] text-[15px]">
                      <MapPin className="w-5 h-5 text-[#07A698] mr-3" />
                      {event.location}
                    </li>
                    <li className="flex items-center text-[#6C706F] text-[15px]">
                      <Clock className="w-5 h-5 text-[#07A698] mr-3" />
                      {event.date}
                    </li>
                  </ul>

                  <a
                    href={event.link}
                    className="inline-flex items-center bg-[#07A698] text-white px-7 py-3 rounded-full font-bold hover:bg-[#162726] transition-colors duration-300"
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EventsSection;
