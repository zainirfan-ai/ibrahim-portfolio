import React from 'react';
import { Link } from 'react-router-dom';
import Lightning from './Lightning';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#02000f] text-white pt-20 pb-12 px-6 md:px-16 overflow-hidden select-none font-sans border-t border-purple-950/40">
      
      {/* ─── Background Horizontal Lightning Effect Layer ─── */}
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none">
        <Lightning 
          color="#a855f7" 
          bolts={4} 
          speed={0.7} 
          intensity={1.1} 
          glow={1.6} 
          flicker={0.7} 
          angle={90} 
          spread={0.8}
          mouseInteraction={false} 
        />
      </div>

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02000f]/60 via-[#02000f]/85 to-[#02000f] pointer-events-none z-1" />

      {/* ─── Footer Main Content Grid ─── */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
        
        {/* Left Column: Brand & Bio */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <span className="text-xs font-bold text-purple-200">IY</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Ibrahim Yousuf</span>
          </Link>
          <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
            Senior Full-Stack &amp; AI Engineer building high-performance web applications, interactive 3D interfaces, and autonomous agent systems.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-mono">GitHub ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-mono">LinkedIn ↗</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-mono">Twitter ↗</a>
          </div>
        </div>

        {/* Right Columns: Links Navigation */}
        <div className="md:col-span-7 grid grid-cols-3 gap-8">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">Navigation</h4>
            <Link to="/" className="text-gray-400 hover:text-white text-xs transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-400 hover:text-white text-xs transition-colors">Projects</Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-xs transition-colors">About Ibrahim</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-xs transition-colors">Contact / Hire</Link>
          </div>

          {/* Column 2: AI Models */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">AI Models</h4>
            <Link to="/ai" className="text-gray-400 hover:text-white text-xs transition-colors">AI Models Hub</Link>
            <Link to="/ai/claude" className="text-gray-400 hover:text-amber-300 text-xs transition-colors">Claude 3.5 Sonnet</Link>
            <Link to="/ai/gemini" className="text-gray-400 hover:text-cyan-300 text-xs transition-colors">Google Gemini</Link>
            <Link to="/ai/chatgpt" className="text-gray-400 hover:text-emerald-300 text-xs transition-colors">ChatGPT &amp; GPT-4o</Link>
          </div>

          {/* Column 3: Expertise */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">Expertise</h4>
            <span className="text-gray-400 text-xs">React 19 &amp; Next.js</span>
            <span className="text-gray-400 text-xs">Three.js / WebGL</span>
            <span className="text-gray-400 text-xs">Autonomous Agents</span>
            <span className="text-gray-400 text-xs">Tailwind CSS</span>
          </div>

        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 pt-6 border-t border-purple-950/90 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
        <p>© {new Date().getFullYear()} Ibrahim Yousuf. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono text-purple-400/80">Engineered with React 19, Three.js &amp; Tailwind CSS</p>
      </div>

    </footer>
  );
};

export default Footer;
