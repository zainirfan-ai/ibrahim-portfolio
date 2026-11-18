import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAiDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { 
      label: 'AI Models', 
      path: '/ai',
      hasDropdown: true,
      children: [
        { label: 'All AI Hub', path: '/ai', desc: 'Models Overview & Comparison' },
        { label: 'Claude AI', path: '/ai/claude', desc: 'Anthropic Claude 3.5 & Artifacts', badge: 'Anthropic' },
        { label: 'Google Gemini', path: '/ai/gemini', desc: 'Multimodal 1M+ Context', badge: 'Google' },
        { label: 'ChatGPT', path: '/ai/chatgpt', desc: 'OpenAI GPT-4o & Assistants', badge: 'OpenAI' },
      ]
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1240px]">
      {/* Floating Glass Navbar Container */}
      <nav 
        className={`flex items-center justify-between px-5 md:px-7 py-3 rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'border-purple-500/30 bg-[#060114]/85 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.65)]' 
            : 'border-white/15 bg-black/45 backdrop-blur-[14px] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Left Side: Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-sm tracking-wider">IY</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base md:text-lg tracking-tight group-hover:text-purple-300 transition-colors">
              Ibrahim<span className="text-purple-400">.</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono hidden sm:block -mt-1">
              Full-Stack &amp; AI
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.path} 
                  className="relative"
                  onMouseEnter={() => setAiDropdownOpen(true)}
                  onMouseLeave={() => setAiDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
                      isActive(link.path)
                        ? 'text-white bg-white/10 shadow-sm border border-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-purple-400">▾</span>
                  </Link>

                  {/* AI Dropdown Menu */}
                  {aiDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-[#09041a]/95 border border-purple-500/30 rounded-2xl shadow-2xl backdrop-blur-2xl p-2.5 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="p-2.5 rounded-xl hover:bg-purple-950/50 hover:border-purple-500/30 border border-transparent transition-all flex flex-col"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{child.label}</span>
                            {child.badge && (
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                {child.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400 mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-white/10 shadow-sm border border-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side: CTA Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-gray-950 font-bold text-xs tracking-wide hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95 transition-all"
          >
            <span>Let's Talk</span>
            <span>→</span>
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 w-full rounded-2xl bg-[#09031a]/95 border border-purple-500/30 backdrop-blur-2xl shadow-2xl p-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === '/' ? 'bg-purple-900/40 text-purple-200 border border-purple-500/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname.startsWith('/projects') ? 'bg-purple-900/40 text-purple-200 border border-purple-500/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              Projects &amp; Portfolio
            </Link>

            {/* AI Models Sub-group */}
            <div className="p-3 rounded-xl bg-purple-950/25 border border-purple-500/20 my-1">
              <span className="text-[11px] font-mono uppercase text-purple-400 tracking-wider font-bold">
                AI Models &amp; Showcase
              </span>
              <div className="flex flex-col gap-1 mt-2">
                <Link to="/ai" className="text-xs text-gray-200 py-1.5 px-2 hover:bg-purple-900/40 rounded-lg">
                  ⚡ All Models Comparison Hub
                </Link>
                <Link to="/ai/claude" className="text-xs text-gray-200 py-1.5 px-2 hover:bg-purple-900/40 rounded-lg">
                  🟠 Claude AI (Anthropic)
                </Link>
                <Link to="/ai/gemini" className="text-xs text-gray-200 py-1.5 px-2 hover:bg-purple-900/40 rounded-lg">
                  🔵 Google Gemini (Multimodal)
                </Link>
                <Link to="/ai/chatgpt" className="text-xs text-gray-200 py-1.5 px-2 hover:bg-purple-900/40 rounded-lg">
                  🟢 ChatGPT (OpenAI GPT-4o)
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname.startsWith('/about') ? 'bg-purple-900/40 text-purple-200 border border-purple-500/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              About Ibrahim
            </Link>

            <Link
              to="/contact"
              className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname.startsWith('/contact') ? 'bg-purple-900/40 text-purple-200 border border-purple-500/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              Contact &amp; Hire
            </Link>
          </div>

          <Link
            to="/contact"
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/30"
          >
            Start a Project Together
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
