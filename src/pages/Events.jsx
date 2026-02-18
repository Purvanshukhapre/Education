import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Global Web Development Summit 2026",
            date: "June 15, 2026",
            time: "9:00 AM - 5:00 PM",
            location: "San Francisco, CA & Online",
            image: "https://images.unsplash.com/photo-1540575861501-7ad058137a31?w=800&h=500&fit=crop",
            category: "Conference"
        },
        {
            id: 2,
            title: "UX Design Workshop: Master Class",
            date: "June 22, 2026",
            time: "10:00 AM - 2:00 PM",
            location: "Education Hub, Room 402",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop",
            category: "Workshop"
        },
        {
            id: 3,
            title: "AI in Education: Community Meetup",
            date: "July 05, 2026",
            time: "6:00 PM - 8:30 PM",
            location: "Tech Lounge & Zoom",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
            category: "Meetup"
        }
    ];

    return (
        <div className="bg-[#F2F4F7] min-h-screen">
            <PageHeader
                title="Upcoming Events"
                bgImage="https://images.unsplash.com/photo-1511578339222-2e911508ee32?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="space-y-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col lg:flex-row"
                        >
                            <div className="lg:w-1/3 relative overflow-hidden h-64 lg:h-auto">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#07A698] text-white text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 lg:w-2/3 flex flex-col justify-center">
                                <div className="flex flex-wrap gap-6 text-[#6C706F] text-[13px] font-bold uppercase tracking-wider mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#07A698]" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-[#07A698]" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-[#07A698]" />
                                        {event.location}
                                    </div>
                                </div>

                                <h3 className="text-[28px] md:text-[32px] font-bold text-[#162726] mb-6 group-hover:text-[#07A698] transition-colors leading-tight">
                                    {event.title}
                                </h3>

                                <div className="flex items-center justify-between mt-auto">
                                    <button className="bg-[#F2F4F7] hover:bg-[#07A698] hover:text-white text-[#162726] font-bold uppercase tracking-widest text-[13px] px-8 py-4 rounded-full transition-all duration-300">
                                        Register Now
                                    </button>
                                    <button className="flex items-center text-[#6C706F] hover:text-[#07A698] font-bold uppercase tracking-widest text-[13px] transition-colors group/btn">
                                        More Details
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;
