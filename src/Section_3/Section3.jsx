import React from 'react'

const Section3 = () => {
  const row1Skills = [
    'Expo',
    'REST APIs',
    'Tailwind',
    'Material-UI',
    'Three.js',
    'WebGL',
    'Git',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Redux',
    'Node.js',
    'Express.js',
    'MongoDB',
  ];

  const row2Skills = [
    'React Native',
    'SQL',
    'MongoDB',
    'Express.js',
    'Node.js',
    'Redux',
    'Next.js',
    'React.js',
    'TypeScript',
    'JavaScript',
    'Git',
    'WebGL',
    'Three.js',
    'Material-UI',
    'Tailwind',
  ];

  return (
    <section className="bg-[#09081316] text-white py-16 px-4 md:px-12 overflow-hidden font-sans border-t border-white/5 relative">
      <div className="max-w-[92%] mx-auto">
        {/* Header with line */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs tracking-[0.25em] text-gray-400 uppercase font-semibold whitespace-nowrap">
            MY TOOLKIT
          </span>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        {/* Marquee Wrapper with Fade Gradient Overlay on edges */}
        <div className="relative w-full overflow-hidden mask-gradient">
          {/* Edge Blur / Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#090813] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#090813] to-transparent pointer-events-none" />

          {/* Row 1: Left Infinite Marquee */}
          <div className="flex gap-3 mb-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...row1Skills, ...row1Skills].map((skill, index) => (
              <span
                key={`r1-${index}`}
                className="px-5 py-2.5 rounded-full text-xs md:text-sm font-medium bg-[#111022]/80 border border-white/10 text-gray-300 backdrop-blur-md whitespace-nowrap hover:border-purple-500/50 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-500/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Row 2: Right Infinite Marquee */}
          <div className="flex gap-3 w-max animate-scroll-right hover:[animation-play-state:paused]">
            {[...row2Skills, ...row2Skills].map((skill, index) => (
              <span
                key={`r2-${index}`}
                className="px-5 py-2.5 rounded-full text-xs md:text-sm font-medium bg-[#111022]/80 border border-white/10 text-gray-300 backdrop-blur-md whitespace-nowrap hover:border-purple-500/50 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS keyframes animation setup */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Section3
