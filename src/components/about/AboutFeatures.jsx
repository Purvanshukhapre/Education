import React from 'react';
import { motion } from 'framer-motion';

const AboutFeatures = () => {
    const features = [
        {
            title: "Interactive Learning Tools",
            description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students."
        },
        {
            title: "Easy Flexible Access",
            description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students."
        },
        {
            title: "Personalized Learning Paths",
            description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students."
        }
    ];

    const stats = [
        { count: "3,192", label: "Successfully Trained", suffix: "+" },
        { count: "15,485", label: "Classes Completed", suffix: "+" },
        { count: "97.55", label: "Satisfaction Rate", suffix: "%" },
        { count: "102", label: "Expert Instructors", suffix: "+" }
    ];

    const featureIcon = "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-feature-1.png";

    return (
        <div className="section-wrapper font-outfit">
            {/* Features Section */}
            <section className="py-[120px] bg-[#F2F4F7]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-[50px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <span className="w-6 h-6 bg-[#07A698] rounded-full flex items-center justify-center text-white">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            </span>
                            <span className="text-[16px] font-bold text-[#07A698] uppercase tracking-wider">Our Features</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-[36px] md:text-[48px] font-bold text-[#162726] leading-tight"
                        >
                            Online Education That Improves You
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-transparent p-10 rounded-[10px] hover:bg-white transition-all duration-300 group"
                            >
                                <div className="mb-8 overflow-hidden">
                                    <img
                                        src={featureIcon}
                                        alt="feature icon"
                                        className="w-auto h-auto transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-[24px] font-bold text-[#162726] mb-4">{feature.title}</h3>
                                <p className="text-[#6C706F] text-[16px] leading-relaxed italic">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counters Section */}
            <section className="py-[100px] bg-[#07A698]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center text-white"
                            >
                                <h3 className="text-[40px] md:text-[48px] font-bold mb-2">
                                    {stat.count}{stat.suffix}
                                </h3>
                                <p className="text-[16px] font-medium opacity-90">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};


export default AboutFeatures;
