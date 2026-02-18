import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock signup
        localStorage.setItem('Patil Institute_user', JSON.stringify({ email: formData.email, name: formData.fullName }));
        navigate('/');
    };

    return (
        <div className="bg-[#F2F4F7] min-h-screen font-outfit">
            <PageHeader
                title="Create Account"
                bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 px-4">
                <div className="max-w-[550px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-[32px] font-bold text-[#162726] mb-3">Join Patil Institute Today!</h2>
                            <p className="text-[#6C706F]">Create an account to start your learning journey.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button className="flex items-center justify-center gap-2 py-4 px-6 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors font-bold text-[#162726] text-[15px]">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-4 px-6 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors font-bold text-[#162726] text-[15px]">
                                <Github className="w-5 h-5 text-[#333]" />
                                GitHub
                            </button>
                        </div>

                        <div className="relative mb-8 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-100"></span>
                            </div>
                            <span className="relative px-4 bg-white text-[#6C706F] text-[14px] font-bold uppercase tracking-widest">Or signup with email</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label className="block text-[14px] font-bold text-[#162726] mb-3 uppercase tracking-wider">Full Name*</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className="w-full h-16 px-6 rounded-full bg-[#F2F4F7] border-none focus:ring-2 focus:ring-[#07A698] transition-all outline-none text-[#162726]"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                    <User className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C706F]" />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-[14px] font-bold text-[#162726] mb-3 uppercase tracking-wider">Email Address*</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Username or email"
                                        className="w-full h-16 px-6 rounded-full bg-[#F2F4F7] border-none focus:ring-2 focus:ring-[#07A698] transition-all outline-none text-[#162726]"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C706F]" />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-[14px] font-bold text-[#162726] mb-3 uppercase tracking-wider">Password*</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        placeholder="Password"
                                        className="w-full h-16 px-6 rounded-full bg-[#F2F4F7] border-none focus:ring-2 focus:ring-[#07A698] transition-all outline-none text-[#162726]"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-[#6C706F] hover:text-[#162726] transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-[#07A698] focus:ring-[#07A698]" />
                                <span className="text-[15px] font-medium text-[#6C706F]">I agree to the <button type="button" className="text-[#07A698] font-bold hover:underline">Terms & Privacy Policy</button></span>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-16 bg-[#07A698] hover:bg-[#162726] text-white rounded-full font-bold text-[16px] transition-all duration-300 shadow-lg shadow-[#07A698]/20 flex items-center justify-center gap-2 group"
                            >
                                Create Account
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-10 text-center">
                            <p className="text-[#6C706F]">
                                Already have an account? {' '}
                                <Link to="/login" className="text-[#07A698] font-bold hover:underline">Login Now</Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
