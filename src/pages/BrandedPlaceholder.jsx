import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import { Settings, Construction, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BrandedPlaceholder = () => {
    const location = useLocation();
    const pathName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

    return (
        <div className="bg-[#F2F4F7] min-h-screen">
            <PageHeader title={pathName || "Page Under Construction"} />

            <section className="py-32 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-16 md:p-24 relative overflow-hidden inline-block"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#07A698]/5 rounded-full -mr-32 -mt-32 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full -ml-24 -mb-24 animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-[#07A698]/10 rounded-[32px] flex items-center justify-center mx-auto mb-10 group">
                            <Construction className="w-12 h-12 text-[#07A698] group-hover:rotate-12 transition-transform duration-500" />
                        </div>

                        <h2 className="text-[32px] md:text-[48px] font-bold text-[#162726] mb-6">Coming Soon</h2>

                        <p className="text-[#6C706F] text-[18px] font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                            We're currently perfecting the <span className="text-[#07A698] font-bold">{pathName}</span> experience.
                            This page will be available soon with exciting new content and features.
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center bg-[#07A698] hover:bg-[#162726] text-white font-bold uppercase tracking-widest text-[14px] px-10 py-5 rounded-full transition-all duration-300 shadow-lg shadow-[#07A698]/20 group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default BrandedPlaceholder;
