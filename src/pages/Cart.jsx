import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import PageHeader from '../components/layout/PageHeader';

const Cart = () => {
    const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
    const { isAuthenticated } = useAuth();
    const subtotal = parseFloat(getCartTotal());
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax;

    // If user is not authenticated, show login prompt
    if (!isAuthenticated) {
        return (
            <div className="bg-[#F2F4F7] min-h-screen font-outfit">
                <PageHeader
                    title="Shopping Cart"
                    bgImage="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000"
                />
                <section className="py-24 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto bg-white p-12 rounded-[40px] shadow-sm border border-gray-100"
                    >
                        <div className="w-24 h-24 bg-[#F2F4F7] rounded-full flex items-center justify-center mx-auto mb-8 text-[#07A698]">
                            <LogIn className="w-10 h-10" />
                        </div>
                        <h2 className="text-[28px] font-bold text-[#162726] mb-4">Please Login to View Cart</h2>
                        <p className="text-[#6C706F] mb-10">You need to be logged in to access your shopping cart and make purchases.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/login"
                                className="bg-[#07A698] hover:bg-[#162726] text-white px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 shadow-lg shadow-[#07A698]/20 inline-flex items-center gap-2 group justify-center"
                            >
                                <LogIn className="w-5 h-5" />
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-white border-2 border-[#07A698] text-[#07A698] hover:bg-[#07A698] hover:text-white px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 inline-flex items-center gap-2 group justify-center"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="bg-[#F2F4F7] min-h-screen font-outfit">
                <PageHeader
                    title="Shopping Cart"
                    bgImage="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000"
                />
                <section className="py-24 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto bg-white p-12 rounded-[40px] shadow-sm border border-gray-100"
                    >
                        <div className="w-24 h-24 bg-[#F2F4F7] rounded-full flex items-center justify-center mx-auto mb-8 text-[#07A698]">
                            <ShoppingBag className="w-10 h-10" />
                        </div>
                        <h2 className="text-[28px] font-bold text-[#162726] mb-4">Your cart is empty</h2>
                        <p className="text-[#6C706F] mb-10">Looks like you haven't added any courses to your cart yet.</p>
                        <Link
                            to="/courses"
                            className="bg-[#07A698] hover:bg-[#162726] text-white px-10 py-5 rounded-full font-bold text-[16px] transition-all duration-300 shadow-lg shadow-[#07A698]/20 inline-flex items-center gap-2 group"
                        >
                            Browse Courses
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </section>
            </div>
        );
    }

    return (
        <div className="bg-[#F2F4F7] min-h-screen font-outfit">
            <PageHeader
                title="Shopping Cart"
                bgImage="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8"
                                    >
                                        <div className="w-full md:w-40 h-28 rounded-2xl overflow-hidden shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <span className="text-[#07A698] font-bold text-[12px] uppercase tracking-widest mb-2 block">{item.category}</span>
                                            <h3 className="text-[20px] font-bold text-[#162726] mb-2 leading-tight hover:text-[#07A698] transition-colors">
                                                <Link to={`/courses/${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <p className="text-[#6C706F] text-[14px]">by <span className="font-bold text-[#162726]">{item.instructor}</span></p>
                                        </div>
                                        <div className="text-center md:text-right shrink-0">
                                            <p className="text-[24px] font-bold text-[#162726] mb-3">${item.price}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            <div className="flex justify-between items-center pt-6">
                                <Link to="/courses" className="text-[#162726] font-bold flex items-center gap-2 hover:text-[#07A698] transition-colors">
                                    <ArrowRight className="w-5 h-5 rotate-180" />
                                    Continue Shopping
                                </Link>
                                <button
                                    onClick={clearCart}
                                    className="text-red-500 font-bold hover:underline"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 sticky top-32"
                            >
                                <h2 className="text-[24px] font-bold text-[#162726] mb-8 pb-6 border-b border-gray-100">Order Summary</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-[#6C706F] font-medium">
                                        <span>Subtotal</span>
                                        <span className="text-[#162726] font-bold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[#6C706F] font-medium">
                                        <span>Sales Tax (5%)</span>
                                        <span className="text-[#162726] font-bold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-[18px] font-bold text-[#162726]">Total Amount</span>
                                        <span className="text-[28px] font-bold text-[#07A698]">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    className="w-full h-16 bg-[#07A698] hover:bg-[#162726] text-white rounded-full font-bold text-[16px] transition-all duration-300 shadow-lg shadow-[#07A698]/20 flex items-center justify-center gap-2 group"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-8">
                                    <p className="text-[13px] text-[#6C706F] text-center mb-6 font-bold uppercase tracking-widest">Safe & Secure Payment</p>
                                    <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                        <img src="https://www.svgrepo.com/show/508728/visa.svg" alt="visa" className="h-6 w-auto" />
                                        <img src="https://www.svgrepo.com/show/508709/mastercard.svg" alt="mastercard" className="h-6 w-auto" />
                                        <img src="https://www.svgrepo.com/show/508713/paypal.svg" alt="paypal" className="h-6 w-auto" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
