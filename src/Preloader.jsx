import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import BlackHoleVid from './BlackHoleVid';
import SphereCanvas from './SphereCanvas'; // 👈 Naya Component

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      gsap.to('.preloader-container', {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.2,
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }
  }, [progress, onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-[#02000f] text-white flex flex-col items-center justify-center font-sans overflow-hidden select-none">
      
      {/* 1. Top Black Hole Arc */}
      <div className="absolute top-[-185px] left-1/2 -translate-x-1/2 scale-y-130 scale-x-160 w-full -mt-[8%] max-w-[1000px] h-[700px] z-0 pointer-events-none">
        <BlackHoleVid />
      </div>

      {/* Background Space Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-1" />

      {/* 2. Center Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16">
        
        {/* Animated Particle Sphere with "HI" Text */}
        <div className="relative mb-4 flex items-center justify-center">
          
          {/* Three.js 3D Sphere */}
          <SphereCanvas />

          {/* Center Glowing "HI" */}
          <div className="absolute z-20 pointer-events-none">
            <span className="text-white font-black text-[35px] tracking-wider drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
              HI
            </span>
          </div>

        </div>

        {/* Name and Tagline */}
        <div className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center">
          Muhammed Ibrahim
        </div>
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-purple-300/70 mb-8 text-center">
          FullStack Developer · BUILDING SCALABLE PRODUCTS
        </p>

        {/* Percentage Counter */}
        <div className="text-2xl font-mono font-bold text-purple-300 mb-3 tracking-wider text-center">
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Label */}
        <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-500 text-center">
          LOADING THE WORLD
        </p>

      </div>

    </div>
  );
};

export default Preloader;