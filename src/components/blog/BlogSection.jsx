import React from 'react';
import { Calendar, Folder, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Student Achievement Best Practice for Schools and Families',
      date: 'December 12, 2024',
      category: 'Science',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg',
      isLarge: true
    },
    {
      title: 'The Importance of Integrating Arts into Science and Technology',
      date: 'December 12, 2024',
      category: 'Arts',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-07.jpg',
      isLarge: false
    },
    {
      title: 'Building Resilience and Empathy in the Classroom',
      date: 'December 12, 2024',
      category: 'School',
      image: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-06.jpg',
      isLarge: false
    }
  ];

  const featuredBlog = blogs.find(b => b.isLarge);
  const sideBlogs = blogs.filter(b => !b.isLarge);

  return (
    <section className="py-32 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="flex items-center justify-center text-[#07A698] font-bold text-sm uppercase tracking-wider mb-3">
            <i className="fas fa-bolt mr-2"></i> News & Blogs
          </span>
          <h2 className="text-[42px] font-bold text-[#162726] mb-6 leading-[1.2]">
            Latest News Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Blog Post (Left) */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-full min-h-[500px]">
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <span className="bg-teal-500 text-white px-3 py-1 rounded text-xs font-bold uppercase mb-4 inline-block">
                {featuredBlog.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 hover:text-teal-400 transition-colors cursor-pointer leading-tight">
                {featuredBlog.title}
              </h3>
              <div className="flex items-center text-gray-300 text-sm space-x-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {featuredBlog.date}</span>
              </div>
            </div>
          </div>

          {/* Side Blog Posts (Right) */}
          <div className="flex flex-col gap-8">
            {sideBlogs.map((blog, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 group items-center">
                <div className="w-full md:w-1/2 h-48 overflow-hidden rounded-xl relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 py-2">
                  <div className="flex items-center text-gray-500 text-xs mb-3 space-x-3">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {blog.date}</span>
                    <span className="flex items-center text-teal-500"><Folder className="w-3 h-3 mr-1" /> {blog.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-teal-500 transition-colors cursor-pointer line-clamp-2">
                    {blog.title}
                  </h3>
                  <a href="#" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors text-sm uppercase tracking-wide">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;