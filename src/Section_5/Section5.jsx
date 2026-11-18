import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: 'JUN 2023 - PRESENT',
    role: 'Senior Software Engineer',
    company: 'Getweys - Full-time - Karachi',
    points: [
      'Built, deployed and scaled B2B SaaS web and mobile applications using React.js, Next.js, React Native, NestJS and Node.js, supporting real-world production systems.',
      'Leading cross-functional collaboration and shipping projects ahead of deadlines.',
      'Contributing to architecture decisions that keep codebases scalable and maintainable.',
      'Mentoring and upskilling team members, lifting overall productivity and code quality.'
    ]
  },
  {
    period: 'FEB 2023 - JUN 2023',
    role: 'Software Engineer',
    company: 'Digital Graphiks - Full-time - On-site',
    points: [
      'Built and delivered scalable web applications using JavaScript, React.js, Next.js and Node.js for client-facing and internal products.',
      'Streamlined workflows and code review standards across teams.',
      'Debugged and resolved production issues quickly to keep products running smoothly.'
    ]
  },
  {
    period: 'OCT 2022 - APR 2023',
    role: 'Frontend Developer',
    company: 'Lucid Web Solutions - Full-time - Karachi, On-site',
    points: [
      'Developed responsive and user-friendly web interfaces using JavaScript, React.js, HTML, CSS and modern UI frameworks.',
      'Built accessible UIs that improved user satisfaction.',
      'Integrated REST APIs and dynamic data visualization to enhance interactivity.'
    ]
  }
];

const Section5 = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Vertical Line Draw-down Effect as User Scrolls
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );

      // 2. Animate items & activate dots as the line passes them
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item, index) => {
        const dot = item.querySelector('.timeline-dot');

        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                dot.classList.add('active-dot');
              },
              onLeaveBack: () => {
                if (index !== 0) {
                  dot.classList.remove('active-dot');
                }
              }
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-28 px-4 md:px-12 bg-[#02000f10] text-white font-sans overflow-hidden select-none"
    >
      {/* Background Ambient Cosmic Mists */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-10 bottom-1/3 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-mono mb-3">
            <span className="w-4 h-[1px] bg-purple-400"></span>
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            A track record of <span className="text-purple-400">shipping &</span>
            <br />
            <span className="text-purple-400">leading.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full pb-16">
          
          {/* Base Background Line (Extended further down) */}
          <div className="absolute left-[160px] md:left-[220px] top-5 bottom-[-40px] w-[1px] bg-white/10" />

          {/* Animated Growing Line (Extended further down) */}
          <div 
            ref={lineRef}
            className="absolute left-[160px] md:left-[220px] top-5 bottom-[-40px] w-[1px] bg-gradient-to-b from-purple-400 via-purple-500 to-cyan-400 origin-top" 
          />

          {/* Timeline Items List (Increased gap for longer line spacing) */}
          <div className="flex flex-col gap-28">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative grid grid-cols-12 items-start gap-4 md:gap-8 group">
                
                {/* 1. Left Date Label */}
                <div className="col-span-4 md:col-span-3 text-right pr-4 md:pr-25 pt-1">
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-gray-400/80 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* 2. Timeline Center Dot */}
                <div className="absolute left-[160px] md:left-[220px] -translate-x-1/2 top-1.5 z-20">
                  <div className={`timeline-dot w-3.5 h-3.5 rounded-full bg-[#02000f] border-2 border-gray-600 transition-all duration-500 ${index === 0 ? 'active-dot' : ''}`} />
                </div>

                {/* 3. Right Content Details */}
                <div className="col-span-8 md:col-span-8 pl-6 md:pl-10">
                  
                  {/* Role Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                    {exp.role}
                  </h3>
                  
                  {/* Company & Details */}
                  <p className="text-xs md:text-sm font-medium text-purple-300/80 mb-6">
                    {exp.company}
                  </p>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-3 text-gray-300/90 text-xs md:text-sm leading-relaxed max-w-3xl">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gray-400 font-bold text-xs mt-0.5">–</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Active Dot Glow Style */}
      <style>{`
        .timeline-dot.active-dot {
          border-color: rgb(192 132 252) !important;
          background-color: rgba(192, 132, 252, 0.3) !important;
          box-shadow: 0 0 15px rgba(168, 85, 247, 1) !important;
          transform: scale(1.25);
        }
      `}</style>
    </section>
  );
};

export default Section5;