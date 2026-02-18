import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "10 Essential Tips for Mastering Web Development in 2026",
            excerpt: "Stay ahead of the curve with these fundamental tips that every modern developer should know...",
            author: "Alex Rivers",
            date: "May 15, 2026",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
            category: "Development"
        },
        {
            id: 2,
            title: "The Future of AI in Modern Education Systems",
            excerpt: "Exploring how artificial intelligence is reshaping the way we learn and teach in the digital age...",
            author: "Sarah Chen",
            date: "May 12, 2026",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
            category: "AI & Future"
        },
        {
            id: 3,
            title: "Designing for Accessibility: A Practical Guide",
            excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of ability...",
            author: "Marcus Thorne",
            date: "May 10, 2026",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
            category: "Design"
        }
    ];

    return (
        <div className="bg-[#F2F4F7] min-h-screen">
            <PageHeader
                title="Our Blog"
                bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 h-full flex flex-col"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#07A698] text-white text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-[#6C706F] text-[13px] font-bold uppercase tracking-wider mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#07A698]" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4 text-[#07A698]" />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-[22px] font-bold text-[#162726] mb-4 group-hover:text-[#07A698] transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-[#6C706F] text-[15px] leading-relaxed mb-8 flex-grow">
                                    {post.excerpt}
                                </p>

                                <button className="flex items-center text-[#07A698] font-bold uppercase tracking-widest text-[13px] group/btn">
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
