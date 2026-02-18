import React from 'react';
import { Search } from 'lucide-react';

const SubjectSearch = () => {
  return (
    <div className="max-w-2xl mx-auto mb-6">
      <div className="bg-white rounded-full shadow-lg flex items-center px-6 py-4">
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="flex-1 outline-none text-slate-700"
        />
        <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105">
          Search
        </button>
      </div>
      <p className="text-center text-lg font-semibold text-slate-700 mt-4">
        Explore <span className="text-teal-500">1350+</span> Courses within Subject
      </p>
    </div>
  );
};

export default SubjectSearch;