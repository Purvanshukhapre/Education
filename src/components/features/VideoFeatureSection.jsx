import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const VideoFeatureSection = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
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
                        className="text-[42px] font-bold text-[#162726] leading-[1.2]"
                    >
                        Founded by Industry Leaders With <br /> Large Scale Business
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src={item === 1
                                    ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop"
                                    : "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"}
                                alt="Video Thumbnail"
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-center">
                                <button className="w-16 h-16 bg-white text-[#07A698] rounded-full flex items-center justify-center shadow-lg hover:bg-[#07A698] hover:text-white transition-all duration-300 mb-6 scale-90 group-hover:scale-100">
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                </button>
                                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Career Opportunities in EdCare</h3>
                                <p className="text-gray-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Appropriately recaptiualize cooperative catalysts change through prospective leadership nvisioneer goal-oriented</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoFeatureSection;
