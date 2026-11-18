import React from 'react';
import { Link } from 'react-router-dom';

const MoreAboutMe = () => {
  return (
    <div className="flex items-center gap-3 mt-2 flex-wrap">
      <Link
        to="/about"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs md:text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.35)] active:scale-95 flex items-center gap-2"
      >
        <span>About Ibrahim</span>
        <span>→</span>
      </Link>

      <Link
        to="/projects"
        className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-medium text-xs md:text-sm tracking-wide transition-all duration-300 backdrop-blur-md"
      >
        Explore Projects
      </Link>
    </div>
  );
};

export default MoreAboutMe;
