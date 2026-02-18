import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CourseContent = () => {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const sections = [
    {
      title: "Getting Started",
      lectures: 8,
      duration: "1 hour 15 minutes",
      lessons: [
        { title: "Welcome to the course", duration: "5:30" },
        { title: "Setting up your environment", duration: "12:45" },
        { title: "Understanding the basics", duration: "18:20" },
        { title: "Your first project", duration: "22:15" },
        { title: "Introduction to key concepts", duration: "16:40" },
        { title: "Practice exercise", duration: "10:30" },
        { title: "Common mistakes to avoid", duration: "8:15" },
        { title: "Summary of section 1", duration: "5:45" }
      ]
    },
    {
      title: "Core Concepts",
      lectures: 12,
      duration: "2 hours 30 minutes",
      lessons: [
        { title: "Deep dive into fundamentals", duration: "22:10" },
        { title: "Advanced techniques", duration: "18:45" },
        { title: "Practical examples", duration: "25:30" },
        { title: "Hands-on exercises", duration: "20:15" },
        { title: "Real-world applications", duration: "15:20" },
        { title: "Troubleshooting tips", duration: "12:40" },
        { title: "Best practices", duration: "18:50" },
        { title: "Quiz: Test your knowledge", duration: "10:00" },
        { title: "Peer review assignment", duration: "15:30" },
        { title: "Common challenges", duration: "14:25" },
        { title: "Advanced troubleshooting", duration: "16:10" },
        { title: "Section summary", duration: "7:45" }
      ]
    },
    {
      title: "Building Your First Project",
      lectures: 6,
      duration: "1 hour 45 minutes",
      lessons: [
        { title: "Project overview and setup", duration: "15:20" },
        { title: "Designing the architecture", duration: "20:30" },
        { title: "Implementing core features", duration: "28:15" },
        { title: "Adding advanced features", duration: "22:40" },
        { title: "Testing and debugging", duration: "18:25" },
        { title: "Deployment and sharing", duration: "10:30" }
      ]
    }
  ];

  const totalLectures = sections.reduce((total, section) => total + section.lectures, 0);
  const totalDuration = "5h 30m"; // Simplified for display

  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-[24px] font-bold text-[#162726]">Course Curriculum</h2>
        <div className="flex items-center gap-2 text-[#6C706F] text-[14px] font-bold uppercase tracking-wider">
          <span>{sections.length} Sections</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 mx-1"></span>
          <span>{totalLectures} Lectures</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 mx-1"></span>
          <span>{totalDuration} Total Length</span>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);
          return (
            <div key={index} className={`border ${isOpen ? 'border-[#07A698]' : 'border-gray-100'} rounded-[24px] overflow-hidden transition-all duration-300 shadow-sm`}>
              <button
                className={`w-full p-6 text-left ${isOpen ? 'bg-[#07A698]/5' : 'bg-white'} hover:bg-[#F2F4F7] transition-colors duration-200 flex justify-between items-center group`}
                onClick={() => toggleSection(index)}
              >
                <div>
                  <h3 className={`font-bold text-[18px] ${isOpen ? 'text-[#07A698]' : 'text-[#162726]'} transition-colors`}>{section.title}</h3>
                  <p className="text-[13px] font-bold text-[#6C706F] uppercase tracking-wider mt-1">
                    {section.lectures} lectures • {section.duration}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#07A698] text-white rotate-180' : 'bg-[#F2F4F7] text-[#162726]'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100 divide-y divide-gray-50">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex justify-between items-center py-4 group hover:bg-[#F2F4F7]/50 px-4 -mx-4 rounded-xl transition-colors cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-[#07A698]/10 flex items-center justify-center mr-4 group-hover:bg-[#07A698] transition-all">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#07A698] group-hover:bg-white transition-all"></div>
                            </div>
                            <span className="text-[#6C706F] font-bold text-[15px] group-hover:text-[#162726] transition-colors">{lesson.title}</span>
                          </div>
                          <span className="text-[13px] font-bold text-[#6C706F] bg-[#F2F4F7] px-3 py-1 rounded-full">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;