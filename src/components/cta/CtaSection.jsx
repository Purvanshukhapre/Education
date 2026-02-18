import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/cta-bg-img.png"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#162726]/90 mix-blend-multiply"></div>
            </div>

            {/* Floating Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/dot-shape.png"
                    className="absolute top-10 left-10 opacity-40 animate-pulse"
                    alt=""
                />
                <img
                    src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/cta-shape-2.png"
                    className="absolute bottom-0 right-0 opacity-20"
                    alt=""
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
                >
                    50% Offer For Very First 50 Student's & Mentors
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-[#07A698] font-medium mb-12 leading-relaxed"
                >
                    "The ability to learn at my own pace was a game-changer for me. The flexible schedule allowed me to balance my studies with work and personal life, making it possible to complete the course without feeling overwhelmed."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="bg-[#07A698] text-white px-9 py-4 rounded-full font-bold hover:bg-white hover:text-[#162726] transition-all duration-300 shadow-lg flex items-center">
                        Become a Student <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button className="bg-transparent border border-white/20 text-white px-9 py-4 rounded-full font-bold hover:bg-[#07A698] hover:border-[#07A698] transition-all duration-300 shadow-lg flex items-center">
                        Become a Teacher <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;
