import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            title: "Interactive Learning Experience",
            text: "“Modern education has evolved rapidly, driven by the digital age, which makes learning more accessible than ever. Online platforms offer students flexibility, allowing them to balance education with other responsibilities.”",
            author: "Indigo Violet",
            role: "Director, Thump Coffee",
            image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/testi-author-3.png"
        },
        {
            title: "Interactive Learning Experience",
            text: "“Modern education has evolved rapidly, driven by the digital age, which makes learning more accessible than ever. Online platforms offer students flexibility, allowing them to balance education with other responsibilities.”",
            author: "Michael Thomas",
            role: "Director, Plan4Demand",
            image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/testi-author-4.png"
        }
    ];

    const shapes = {
        left: "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/testi-shape-3.png",
        right: "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/testi-shape-4.png"
    };

    return (
        <section className="py-[120px] bg-[#07A698] relative overflow-hidden font-outfit">
            {/* Shapes */}
            <div className="absolute top-0 left-0 pointer-events-none">
                <img src={shapes.left} alt="shape" className="w-auto h-auto opacity-50" />
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none">
                <img src={shapes.right} alt="shape" className="w-auto h-auto opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content Section */}
                    <div className="lg:w-5/12 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#07A698]">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                </span>
                                <span className="text-[16px] font-bold uppercase tracking-wider">Our Testimonials</span>
                            </div>

                            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-6">
                                What Students Think and Say About EdCare
                            </h2>

                            <p className="text-[18px] opacity-90 leading-relaxed">
                                Empowering businesses with cutting-edge technology, reliable support, and seamless integration.
                            </p>
                        </motion.div>
                    </div>

                    {/* Testimonial Slider */}
                    <div className="lg:w-7/12 w-full">
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-10 md:p-12 rounded-[10px]"
                                >
                                    <h3 className="text-[24px] font-bold text-[#162726] mb-6">{testimonials[currentIndex].title}</h3>
                                    <p className="text-[#6C706F] text-[18px] leading-[1.8] mb-10 italic">
                                        {testimonials[currentIndex].text}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h4 className="text-[20px] font-bold text-[#162726]">{testimonials[currentIndex].author}</h4>
                                                <span className="text-[#6C706F] text-[14px]">{testimonials[currentIndex].role}</span>
                                            </div>
                                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                                <img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Simple Navigation */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                                className="w-10 h-10 border border-[#eee] rounded-full flex items-center justify-center text-[#162726] hover:bg-[#07A698] hover:text-white transition-all"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                                className="w-10 h-10 border border-[#eee] rounded-full flex items-center justify-center text-[#162726] hover:bg-[#07A698] hover:text-white transition-all"
                                            >
                                                →
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Testimonials;
