import React from 'react';

const Section7 = () => {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#02000f] text-white flex flex-col items-center justify-start pt-12 pb-20 px-4 overflow-hidden select-none font-sans">
      
      {/* ─── Full Star Graphic Container ─── */}
      <div className="relative w-full max-w-[1200px] flex items-center justify-center pointer-events-none z-0">
        
        {/* Clean Atmospheric Glow Behind Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/25 via-indigo-900/15 to-transparent rounded-[100%] blur-[90px] pointer-events-none" />

        {/* Original star.png image displayed cleanly */}
        <img 
          src="/star.png" 
          alt="Neural AI Star Beam" 
          className="w-full max-w-[750px] md:max-w-[950px] h-auto object-contain mix-blend-screen opacity-90"
        />

        {/* Floating Pill Badge Placed Over Light Beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span className="text-[10px] md:text-xs font-bold font-mono tracking-[0.2em] uppercase text-cyan-200 bg-[#030014]/90 border border-cyan-500/30 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap">
            AI AGENTS &amp; NEURAL ARCHITECTURE
          </span>
        </div>

      </div>

      {/* ─── Text Content ─── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mt-6">
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          Powering Next-Gen <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">AI Experiences</span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed opacity-90 mt-1">
          Bridging the frontier between modern high-performance web applications and cutting-edge Large Language Models: Anthropic Claude, Google Gemini, and OpenAI ChatGPT.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <a
            href="/ai"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-xs font-mono uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Explore AI Hub →
          </a>
        </div>

      </div>

    </section>
  );
};

export default Section7;
