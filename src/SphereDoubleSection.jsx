import React from 'react';
import { Link } from 'react-router-dom';

const SphereDoubleSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#02000f] text-white flex flex-col items-center justify-start pt-16 pb-24 px-4 overflow-hidden select-none font-sans">
      
      {/* ─── 1. Top Section: Badge & Main Heading ─── */}
      <div className="relative z-20 text-center flex flex-col items-center gap-3 mb-10">
        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-purple-300/90 bg-[#120826] border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          Dual Specialization
        </span>
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Engineering Meets <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Intelligence</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-lg text-center mt-1">
          Two core pillars powering enterprise-ready digital products.
        </p>
      </div>

      {/* ─── 2. Sphere Canvas Wrapper ─── */}
      <div className="relative w-full max-w-[850px] md:max-w-[1000px] flex flex-col items-center justify-start min-h-[460px] md:min-h-[520px] pt-8 md:pt-12">
        
        {/* Background Sphere 2 Image Container */}
        <div className="absolute inset-0 w-full h-full flex items-start justify-center pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#02000f] via-[#02000f]/85 to-transparent z-10 pointer-events-none" />

          <img 
            src="/Speher2.png" 
            alt="Glowing Crescent Sphere" 
            className="w-full h-auto max-w-[780px] md:max-w-[844px] object-contain mix-blend-screen opacity-95"
          />
        </div>

        {/* ─── 3. Two Specializations Grid (Inside Sphere Bowl) ─── */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-2xl w-full mx-auto divide-y md:divide-y-0 md:divide-x divide-purple-500/20 text-center mt-2 md:mt-4">
          
          {/* Full-Stack Column */}
          <div className="flex flex-col items-center justify-start px-6 py-4 md:py-6">
            <span className="text-xs font-mono uppercase text-purple-300 tracking-wider font-semibold">
              Pillar 01
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mt-1 mb-2 tracking-tight">
              Full-Stack Architecture
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed max-w-xs">
              Modern React 19, Next.js, Node.js, Three.js 3D, and high-throughput REST/GraphQL APIs with clean state management.
            </p>
            <Link 
              to="/projects" 
              className="px-6 py-2 rounded-xl bg-[#140b2e] border border-purple-500/40 text-purple-200 text-xs font-mono uppercase tracking-wider hover:bg-purple-900/80 hover:border-purple-300 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.25)]"
            >
              Explore Web Work
            </Link>
          </div>

          {/* GenAI Column */}
          <div className="flex flex-col items-center justify-start px-6 py-4 md:py-6">
            <span className="text-xs font-mono uppercase text-cyan-300 tracking-wider font-semibold">
              Pillar 02
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-cyan-100 mt-1 mb-2 tracking-tight">
              Generative AI &amp; LLMs
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed max-w-xs">
              Deep integrations with Anthropic Claude, Google Gemini, and OpenAI ChatGPT. Autonomous agents, RAG, and prompt workflows.
            </p>
            <Link 
              to="/ai" 
              className="px-6 py-2 rounded-xl bg-[#091b2e] border border-cyan-500/40 text-cyan-200 text-xs font-mono uppercase tracking-wider hover:bg-cyan-900/80 hover:border-cyan-300 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              Explore AI Models
            </Link>
          </div>

        </div>

        {/* ─── 4. Subtext Overlay Near Bottom Crescent ─── */}
        <p className="relative z-10 text-[11px] md:text-xs text-gray-400 font-mono tracking-wide text-center mt-12 md:mt-16 opacity-80 max-w-md px-4">
          All solutions engineered for speed, high availability, and measurable business impact.
        </p>

      </div>

    </section>
  );
};

export default SphereDoubleSection;
