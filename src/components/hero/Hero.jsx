import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroLeft from "../../assets/hero/left-side.png";
import heroRight from "../../assets/hero/right-side.png";
import courseService from "../../services/courseService";

const Hero = () => {
  const [courseCount, setCourseCount] = useState(1350);

  useEffect(() => {
    const fetchCourseCount = async () => {
      try {
        const response = await courseService.getAllCourses({ limit: 1 });
        if (response.data && response.data.length > 0) {
          // Use the total count from pagination info if available
          setCourseCount(response.data.length || 1350);
        }
      } catch (err) {
        console.error('Error fetching course count:', err);
        // Keep default count if API fails
      }
    };

    fetchCourseCount();
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-r from-slate-100 via-white to-teal-100">

      {/* ================= LEFT GRID DECORATION ================= */}
      <div className="absolute left-32 top-36 hidden lg:block opacity-40 z-0">
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-3 h-3 border border-teal-400"></div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT CIRCLE WITH STRIPES ================= */}
      <div className="absolute right-20 top-100 hidden lg:block z-0">
        <div className="relative w-[360px] h-[360px] bg-teal-500 rounded-full">
          <div
            className="absolute inset-0 rounded-full opacity-20
            bg-[repeating-linear-gradient(45deg,white,white_4px,transparent_4px,transparent_12px)]"
          />
        </div>
      </div>

      {/* ================= LEFT IMAGE ================= */}
      <motion.img
        src={heroLeft}
        alt="Student"
        className="absolute left-0 bottom-0 w-[430px] hidden lg:block z-10 drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ================= RIGHT IMAGE ================= */}
      <motion.img
        src={heroRight}
        alt="Student"
        className="absolute right-0 bottom-0 w-[650px] h-[500px] hidden lg:block z-20 drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">

        {/* HEADLINE */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]"
        >
          Start learning from <br />
          the world’s{" "}
          <span className="text-teal-500">
            best institutions
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Join millions of learners and unlock your potential with courses taught by industry experts from leading universities and companies worldwide.
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 bg-white rounded-full shadow-2xl flex items-center justify-between px-6 py-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 w-full text-slate-400">
            <Search size={20} />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="flex-1 bg-transparent outline-none text-slate-700 placeholder-slate-400"
            />
          </div>

          <button className="ml-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3 font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
            Search Now
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-lg font-semibold text-slate-800"
        >
          Explore{" "}
          <span className="text-teal-500">
            {courseCount}+
          </span>{" "}
          Courses within Subject
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;