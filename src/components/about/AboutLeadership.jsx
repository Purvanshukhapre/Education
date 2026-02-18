import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const AboutLeadership = () => {
    const opportunities = [
        {
            title: "Career Opportunities in EdCare",
            desc: "Appropriately recaptiualize cooperative catalysts change through prospective leadership nvisioneer goal-oriented"
        },
        {
            title: "Global Education Network",
            desc: "Iteratively conceptualize cross-platform niche markets via user-friendly infomediaries. Dynamically procrastinate"
        }
    ];

    const thumbs = {
        one: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/video-img-1.png",
        two: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/video-img-2.png"
    };

    return (
        <section className="py-[120px] bg-white font-outfit overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col xl:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side: Content Section */}
                    <div className="xl:w-1/2">
                        <div className="max-w-[620px]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mb-10"
                            >
                                <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-[#07A698]/5 rounded-full border border-[#07A698]/10">
                                    <span className="w-5 h-5 bg-[#07A698] rounded-full flex items-center justify-center text-white">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                    </span>
                                    <span className="text-[14px] font-bold text-[#07A698] uppercase tracking-wider">Our Features</span>
                                </div>

                                <h2 className="text-[32px] md:text-[45px] font-bold text-[#162726] leading-[1.2] mb-6">
                                    Founded by Industry Leaders With Large Scale Business
                                </h2>
                            </motion.div>

                            <div className="space-y-10">
                                {opportunities.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6 items-start group"
                                    >
                                        <div className="w-16 h-16 bg-[#07A698]/5 rounded-full flex items-center justify-center shrink-0 border border-[#07A698]/10 group-hover:bg-[#07A698] group-hover:text-white transition-all duration-300">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#162726] mb-3 group-hover:text-[#07A698] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#6C706F] text-[16px] leading-[1.8] max-w-[500px]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Layered Video Thumbs Section */}
                    <div className="xl:w-1/2 w-full mt-16 xl:mt-0 relative">
                        <div className="relative max-w-[570px] mx-auto xl:ml-auto">
                            {/* Main Video Thumb */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative rounded-[30px] overflow-hidden shadow-xl z-10"
                            >
                                <img src={thumbs.one} alt="Video 1" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => window.open('https://youtu.be/JwC-Qx1lJso', '_blank')}
                                        className="w-16 h-16 md:w-20 md:h-20 bg-[#07A698] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 relative z-20 group/play"
                                    >
                                        <Play className="fill-current w-6 h-6 md:w-7 md:h-7 ml-1" />
                                        <div className="absolute inset-0 rounded-full bg-[#07A698] animate-[ping_2s_infinite] opacity-30 -z-10" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Overlapping Smaller Video Thumb */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-10 -right-6 md:-right-10 w-[240px] md:w-[320px] bg-white p-3 rounded-[30px] shadow-2xl z-20 hidden sm:block border border-gray-100"
                            >
                                <div className="relative rounded-[20px] overflow-hidden">
                                    <img src={thumbs.two} alt="Video 2" className="w-full h-auto" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={() => window.open('https://youtu.be/JwC-Qx1lJso', '_blank')}
                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#07A698] transition-transform hover:scale-110 shadow-lg"
                                        >
                                            <Play className="fill-current w-4 h-4 ml-0.5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Shape (Optional, matches EdCare feel) */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#07A698]/5 rounded-full blur-3xl -z-10 opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutLeadership;
