import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Play, ArrowRight, ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CourseCard = ({ course, index = 0 }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === course.id);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.floor(rating)
              ? 'text-amber-400 fill-current'
              : 'text-gray-300'
              }`}
          />
        ))}
        {rating > 0 && <span className="ml-2 text-[12px] text-[#6C706F]">({rating.toFixed(2)})</span>}
      </div>
    );
  };

  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Course Image */}
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-[#07A698] text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
            {course.category}
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4 text-[#6C706F] text-[13px] font-medium">
            <div className="flex items-center">
              <Play className="w-4 h-4 mr-1.5 text-[#07A698]" /> {course.duration || '8 Lessons'}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1.5 text-[#07A698]" /> {course.students.toLocaleString()} Students
            </div>
          </div>

          <h3 className="text-[20px] font-bold text-[#162726] mb-4 line-clamp-2 hover:text-[#07A698] transition-colors cursor-pointer leading-tight">
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </h3>

          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-bold text-[12px] text-[#162726]">
                {course.instructor ? course.instructor.charAt(0) : 'I'}
              </div>
              <div>
                <h4 className="text-[#162726] text-[14px] font-bold leading-none mb-1">{course.instructor}</h4>
                <p className="text-[#6C706F] text-[12px]">Instructor</p>
              </div>
            </div>
            {renderStars(course.rating)}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-bold text-[#162726]">${course.price}</span>
              {course.originalPrice && (
                <span className="text-[#6C706F] line-through text-[14px]">${course.originalPrice}</span>
              )}
            </div>

            <button
              onClick={() => addToCart(course)}
              disabled={isInCart}
              className={`px-5 py-2.5 rounded-full font-bold text-[14px] transition-all flex items-center gap-2 ${isInCart
                  ? 'bg-gray-100 text-[#6C706F] cursor-default'
                  : 'bg-[#F2F4F7] text-[#162726] hover:bg-[#07A698] hover:text-white group/cart shadow-sm'
                }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
                  In Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 group-hover/cart:scale-110 transition-transform" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;