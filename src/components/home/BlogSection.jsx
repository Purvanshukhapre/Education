import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Top 10 Programming Languages to Learn in 2024',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      excerpt: 'Discover the most in-demand programming languages that will give you a competitive edge in the tech industry.'
    },
    {
      title: 'How to Build Your First Mobile App',
      date: 'March 12, 2024',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      excerpt: 'A step-by-step guide to creating your first mobile application using modern development tools.'
    },
    {
      title: 'The Future of Artificial Intelligence',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11f06a1e72?w=400&h=250&fit=crop',
      excerpt: 'Exploring the latest trends and developments in AI technology and what it means for the future.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Articles</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest news and insights in the education and technology space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-teal-500 text-sm font-medium mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{blog.title}</h3>
                <p className="text-slate-600 mb-4">{blog.excerpt}</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;