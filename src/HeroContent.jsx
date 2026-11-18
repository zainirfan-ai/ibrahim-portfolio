import React, { useState, useEffect } from 'react';
import Tag from './Tag/Tag';

const HeroContent = () => {
  // Animated words array
  const words = ['Modern', 'Reliable', 'Scalable'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Smoothly fade/slide out
      setFade(false);

      setTimeout(() => {
        // Step 2: Next word set karo
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        // Step 3: Smoothly fade/slide back in
        setFade(true);
      }, 300); // 300ms transition duration
    }, 2500); // Har 2.5 seconds baad change hoga

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white flex flex-col items-start gap-4 z-20 relative font-sans">
      
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
          AVAILABLE FOR NEW PROJECTS
        </span>
      </div>

      {/* Greeting */}
      <p className="text-gray-300 text-base md:text-lg font-medium tracking-wide">
        Hi, I'm <span className="font-extrabold text-white">Muhammed Ibrahim</span>
      </p>

      {/* Main Dynamic Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
        <span className="text-gray-200">Frontend Developer crafting </span>
        
        {/* Animated Word Box */}
        <span className="block h-[1.2em] overflow-hidden my-1">
          <span
            className={`block text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-black transition-all duration-300 transform ${
              fade
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-4 scale-95'
            }`}
          >
            {words[index]}
          </span>
        </span>

        <span className="text-gray-300 text-2xl sm:text-4xl lg:text-5xl font-bold">
          web & mobile products.
        </span>
      </h1>

      {/* Description */}
      <p className="w-full max-w-xl text-sm md:text-base text-gray-400 font-medium leading-relaxed mt-2">
        Specializing in building modern, responsive user interfaces and clean web applications with React, Tailwind CSS, and advanced frontend tools.
      </p>

    </div>
  );
};

export default HeroContent;