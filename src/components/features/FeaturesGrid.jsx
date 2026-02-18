import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesGrid = () => {
    const features = [
        {
            image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-icon-1.png",
            title: "Accessibility & Flexibility",
            description: "Online education should be accessible to learners from diverse backgrounds, offering the flexibility to study anytime."
        },
        {
            image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-icon-2.png",
            title: "Personalized Learning",
            description: "Online education should be accessible to learners from diverse backgrounds, offering the flexibility to study anytime."
        },
        {
            image: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-icon-3.png",
            title: "High-Quality Instruction",
            description: "Online education should be accessible to learners from diverse backgrounds, offering the flexibility to study anytime."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-32 bg-[#F0F4F5]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-[white] rounded-full px-4 py-1.5 mb-4 border border-gray-300/20">
                        <div className="bg-[#07A698]/10 p-1 rounded-full flex items-center justify-center mr-2.5">
                            <Zap className="w-3.5 h-3.5 text-[#07A698] fill-current" />
                        </div>
                        <span className="text-[14px] font-medium text-[#2D3139] tracking-normal leading-none">
                            Our Features
                        </span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[42px] font-semibold text-[#162726] leading-tight tracking-tight"
                    >
                        Digital Art And Design Crafting <br /> Art With Technology
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="inline-block p-4 rounded-full bg-teal-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                            <a
                                href="/about"
                                className="relative inline-flex items-center px-7 py-3 rounded-full border border-gray-200 text-[#6C706F] font-medium overflow-hidden transition-all duration-300 group/btn"
                            >
                                <div className="absolute inset-0 bg-[#07A698] w-0 group-hover/btn:w-full transition-all duration-700 ease-out"></div>
                                <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors duration-300">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2 transition-colors duration-300" />
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
