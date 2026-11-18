import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';

const Section2 = () => {
  const stats = [
    { value: '5+', label: 'Years building products' },
    { value: '20+', label: 'Shipped production projects' },
    { value: '10k+', label: 'End users served' },
    { value: '40%', label: 'Avg. performance lift' },
  ];

  return (
    <section className="relative bg-transparent text-white min-h-[80vh] py-16 px-4 md:px-12 overflow-hidden flex items-center justify-center font-sans">
      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Top Subtitle */}
        <p className="text-xs tracking-widest text-purple-400 uppercase mb-3 font-semibold">
          ABOUT IBRAHIM
        </p>

        {/* Main Heading with Gradient (h2 for SEO single H1 rule) */}
        <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight mb-12">
          Engineering products that{' '}
          <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            people actually use.
          </span>
        </h2>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Large Card */}
          <div className="lg:col-span-7 relative bg-[#0b081e]/85 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div>
              <p className="text-xs tracking-widest text-purple-300 uppercase mb-2 font-mono">
                WHO I AM
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ibrahim Yousuf · Karachi, Pakistan
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                I'm a Senior Software Engineer with <span className="font-semibold text-white">5+ years</span> of experience designing and shipping production-grade web applications, interactive 3D experiences, and modern generative AI integrations.
              </p>

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
                From <span className="text-gray-200 font-medium">Front-End Developer</span> to <span className="text-gray-200 font-medium">Junior Team Lead</span>, and now <span className="text-gray-200 font-medium">Senior Software Engineer at Getweys</span>, I've led technical teams, architected clean component libraries, and embedded models like Claude, Gemini, and ChatGPT into real-world business systems.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 relative z-20">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-sm hover:opacity-95 transition-all shadow-lg shadow-purple-500/25 active:scale-95"
              >
                Start a project <span className="ml-2">→</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#181433] hover:bg-[#211b47] border border-purple-400/20 text-purple-200 font-medium text-sm transition-all"
              >
                Read Full Bio
              </Link>
            </div>

            {/* Bottom-Left Decorative Glowing Sphere Effect */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-600/25 blur-2xl pointer-events-none" />
          </div>

          {/* Right Stats Grid (2x2) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0b081e]/70 border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-all hover:border-purple-500/50 hover:bg-[#120d2e]/85 shadow-lg"
              >
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {stat.value}
                </h4>
                <p className="text-xs md:text-sm text-gray-400 font-normal leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;
