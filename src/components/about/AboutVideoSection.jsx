import React from 'react';
import { Play, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const AboutVideoSection = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content - Image/Video */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                                alt="About Education"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <a href="https://youtu.be/JwC-Qx1lJso" className="w-20 h-20 bg-white text-[#07A698] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse">
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Text */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[#07A698] font-bold tracking-wider uppercase text-sm mb-2 block"
                            >
                                <div className="inline-flex items-center bg-[white] rounded-full px-4 py-1.5 mb-4 border border-gray">
                                    <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
                                        <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
                                    </div>
                                    <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none">
                                        Our Features
                                    </span>
                                </div>
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[42px] font-bold text-[#162726] mb-6 leading-[1.2]"
                            >
                                Learn The Latest Top Skills
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-[#6C706F] text-lg leading-relaxed mb-8"
                            >
                                Credibly syndicate transparent interfaces and client-focused synergy. Objectively embrace revolutionary infomediaries virtual functionalities. Monotonectally myocardinate client-based processes before.
                            </motion.p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Tailor content and courses to meet the individual needs",
                                "Engage students through multimedia elements",
                                "Monitor student performance with dashboards",
                                "Motivate students with badges and rewards"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                    className="flex items-start"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center mt-1 mr-4">
                                        <Check className="w-3 h-3 text-[#07A698]" />
                                    </div>
                                    <span className="text-[#162726] font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-[#07A698] text-white px-9 py-4 rounded-full font-bold hover:bg-[#162726] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Started Now <i className="fas fa-long-arrow-alt-right ml-2"></i>
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutVideoSection;
