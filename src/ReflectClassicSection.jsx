import React from 'react';
import { Link } from 'react-router-dom';

const ReflectClassicSection = () => {
  return (
    <section className="relative w-full min-h-[65vh] bg-[#02000f] text-white flex flex-col items-center justify-start pt-12 pb-20 px-4 overflow-hidden select-none font-sans">
      
      {/* ─── 1. Atmospheric Glow ─── */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] pointer-events-none z-0 overflow-hidden flex justify-center items-top">
        <div className="absolute top-0 w-[700px] md:w-[900px] h-[220px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/40 via-purple-900/20 to-transparent rounded-[100%] blur-[60px] opacity-80" />
        <div className="absolute top-[20px] w-[450px] md:w-[600px] h-[140px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-400/30 via-purple-600/10 to-transparent rounded-[100%] blur-[40px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#02000f] via-[#02000f]/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* ─── 2. Main Content Layout ─── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4 pt-16 md:pt-20">
        
        {/* Badge */}
        <span className="text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-purple-200/90 bg-[#120826]/80 border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          Engineering &amp; AI Consulting
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] mt-1">
          Have a Project in Mind? <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Let's Build It.</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed mt-1">
          Whether you need a high-performance web application, an interactive 3D user experience, or cutting-edge Claude, Gemini, or ChatGPT integrations, I'm ready to bring your vision to life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link 
            to="/contact" 
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95"
          >
            Start a Conversation →
          </Link>

          <Link 
            to="/projects" 
            className="px-7 py-3 rounded-xl bg-[#0d071d]/90 border border-purple-500/25 text-gray-300 text-sm font-medium hover:bg-purple-950/60 hover:text-white hover:border-purple-500/50 transition-all duration-300 backdrop-blur-md"
          >
            Browse Past Work
          </Link>
        </div>

      </div>

    </section>
  );
};

export default ReflectClassicSection;
