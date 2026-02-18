import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Phone } from 'lucide-react';

const AboutIntro = () => {
    const images = {
        main: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-img-1.jpg",
        secondary: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-img-2.jpg",
        statIcon1: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-1.png",
        statIcon2: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-2.png"
    };

    return (
        <section className="py-24 bg-white overflow-hidden font-outfit">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side: Layered Image Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative inline-block w-full max-w-[570px]">
                            {/* Main Image */}
                            <div className="relative rounded-[30px] overflow-hidden shadow-sm">
                                <img
                                    src={images.main}
                                    alt="Learning Experience"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Centered Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => window.open('https://youtu.be/JwC-Qx1lJso', '_blank')}
                                        className="w-16 h-16 md:w-20 md:h-20 bg-[#07A698] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 relative z-10"
                                    >
                                        <Play className="fill-current w-6 h-6 md:w-7 md:h-7 ml-1" />
                                        <div className="absolute inset-0 rounded-full bg-[#07A698] animate-ping opacity-30 -z-10" />
                                    </button>
                                </div>
                            </div>

                            {/* Overlapping Small Image */}
                            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-[200px] md:w-[300px] bg-white p-3 rounded-[30px] shadow-lg z-20 hidden sm:block">
                                <img
                                    src={images.secondary}
                                    alt="Classroom"
                                    className="w-full h-auto rounded-[20px]"
                                />
                            </div>

                            {/* Floating "Online Support" Card */}
                            <div className="absolute bottom-10 left-[-20px] md:left-[-40px] bg-white p-5 rounded-[20px] shadow-md flex items-center gap-4 z-30 border border-gray-50 max-w-[240px]">
                                <div className="w-12 h-12 bg-[#07A698] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[14px] text-[#6C706F] block font-medium">Online Support</span>
                                    <a href="tel:+2581523659" className="text-[17px] font-bold text-[#162726] hover:text-[#07A698] transition-colors leading-tight">+258 152 3659</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2">
                        <div className="max-w-[580px]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-[#07A698]/5 rounded-full border border-[#07A698]/10">
                                    <span className="w-5 h-5 bg-[#07A698] rounded-full flex items-center justify-center text-white">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                    </span>
                                    <span className="text-[14px] font-bold text-[#07A698] uppercase tracking-wider">Get More About Us</span>
                                </div>

                                <h2 className="text-[32px] md:text-[45px] font-bold text-[#162726] leading-[1.2] mb-6">
                                    Over 10 Years in Distant learning for Skill Development
                                </h2>

                                <p className="text-[#6C706F] text-[16px] md:text-[17px] leading-[1.8] mb-10">
                                    Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.
                                </p>
                            </motion.div>

                            {/* Stats Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-[65px] h-[65px] bg-[#07A698]/5 rounded-full flex items-center justify-center shrink-0 border border-[#07A698]/10">
                                        <img src={images.statIcon1} alt="Students" className="w-[30px] h-auto" />
                                    </div>
                                    <div>
                                        <h3 className="text-[28px] font-bold text-[#07A698] leading-none mb-2">
                                            9.5K+
                                        </h3>
                                        <p className="text-[#6C706F] text-[14px] font-medium leading-snug">Total active students taking <br /> gifted courses</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="w-[65px] h-[65px] bg-[#07A698]/5 rounded-full flex items-center justify-center shrink-0 border border-[#07A698]/10">
                                        <img src={images.statIcon2} alt="Teachers" className="w-[30px] h-auto" />
                                    </div>
                                    <div>
                                        <h3 className="text-[28px] font-bold text-[#07A698] leading-none mb-2">
                                            4.8K+
                                        </h3>
                                        <p className="text-[#6C706F] text-[14px] font-medium leading-snug">Successfully trained students <br /> from expert teachers</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center px-[35px] py-[16px] bg-[#07A698] text-white font-bold rounded-full hover:bg-[#162726] transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Start Free Trial
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutIntro;
