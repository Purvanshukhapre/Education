import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import { Linkedin, Twitter, Star, BookOpen, Users } from 'lucide-react';

const Instructors = () => {
    const instructors = [
        {
            id: 1,
            name: "Dr. Robert Fox",
            role: "Lead Full Stack Developer",
            bio: "Master of architecture and scalable systems with 12+ years of enterprise experience.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            rating: 4.9,
            students: "15k+",
            courses: 12
        },
        {
            id: 2,
            name: "Emma Watson",
            role: "Senior UI/UX Designer",
            bio: "Passionate about creating intuitive and inclusive digital experiences for global audiences.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            rating: 4.8,
            students: "12k+",
            courses: 8
        },
        {
            id: 3,
            name: "Michael Graves",
            role: "AI & Machine Learning Expert",
            bio: "Dedicated to simplify complex technical concepts and helping students build AI solutions.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            rating: 5.0,
            students: "8k+",
            courses: 6
        },
        {
            id: 4,
            name: "Sophia Martinez",
            role: "Digital Marketing Specialist",
            bio: "Expert in growth hacking and data-driven marketing strategies for modern startups.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
            rating: 4.7,
            students: "20k+",
            courses: 15
        }
    ];

    return (
        <div className="bg-[#F2F4F7] min-h-screen">
            <PageHeader
                title="Our Instructors"
                bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                                <div className="relative pt-8 px-8">
                                    <div className="aspect-square rounded-[32px] overflow-hidden relative">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#162726] hover:bg-[#07A698] hover:text-white shadow-lg transition-all">
                                                <Linkedin className="w-4 h-4" />
                                            </button>
                                            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#162726] hover:bg-[#07A698] hover:text-white shadow-lg transition-all">
                                                <Twitter className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 text-center flex flex-col flex-grow">
                                    <h3 className="text-[22px] font-bold text-[#162726] mb-1 group-hover:text-[#07A698] transition-colors">
                                        {instructor.name}
                                    </h3>
                                    <p className="text-[#07A698] font-bold text-[13px] uppercase tracking-widest mb-4">
                                        {instructor.role}
                                    </p>
                                    <p className="text-[#6C706F] text-[15px] leading-relaxed mb-6 font-medium line-clamp-3 italic">
                                        "{instructor.bio}"
                                    </p>

                                    <div className="mt-auto grid grid-cols-3 border-t border-gray-50 pt-6 gap-2">
                                        <div className="text-center">
                                            <div className="flex items-center justify-center text-amber-500 mb-1">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-[14px] font-bold ml-1">{instructor.rating}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-[#6C706F] uppercase tracking-wider">Rating</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex items-center justify-center text-[#07A698] mb-1">
                                                <Users className="w-4 h-4" />
                                                <span className="text-[14px] font-bold ml-1">{instructor.students}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-[#6C706F] uppercase tracking-wider">Students</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex items-center justify-center text-blue-500 mb-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span className="text-[14px] font-bold ml-1">{instructor.courses}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-[#6C706F] uppercase tracking-wider">Courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Instructors;
