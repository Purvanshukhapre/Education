import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, bgImage }) => {
    const defaultBg = "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/bg-img/page-header-bg.png";
    const shape1 = "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/page-header-shape-1.png";
    const shape2 = "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/page-header-shape-2.png";
    const shape3 = "https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/shapes/page-header-shape-3.png";

    return (
        <section className="relative pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px] overflow-hidden bg-[#162726]">
            {/* Background Item */}
            <div className="absolute inset-0">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${bgImage || defaultBg}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0"
                    >
                        <img src={shape1} alt="shape" className="max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-0 right-0"
                    >
                        <img src={shape2} alt="shape" className="max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute bottom-0 right-0"
                    >
                        <img src={shape3} alt="shape" className="max-w-full" />
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[48px] md:text-[60px] font-bold text-white mb-4 font-outfit"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};


export default PageHeader;
