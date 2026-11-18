import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SEO from '../components/common/SEO';
import BlackHoleVid from '../BlackHoleVid';
import HeroContent from '../HeroContent';
import MoreAboutMe from '../Buttons/MoreAboutMe';
import FloatingHeroGraphic from '../FloatingHeroGraphic';
import Section2 from '../Section_2/Section2';
import Section3 from '../Section_3/Section3';
import Section4 from '../Section_4/Section4';
import Section5 from '../Section_5/Section5';
import SphereDoubleSection from '../SphereDoubleSection';
import ReflectClassicSection from '../ReflectClassicSection';
import Section7 from '../Section7';
import GlobeSection from '../GlobeSection';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        '.sec-about', 
        '.sec-skills', 
        '.sec-projects', 
        '.sec-other1', 
        '.sec-sphere', 
        '.sec-classic',
        '.sec-section7',
        '.sec-globe'
      ];

      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full text-white">
      <SEO 
        title="Ibrahim Yousuf | Senior Full-Stack & AI Engineer"
        description="Explore the portfolio of Ibrahim Yousuf, Senior Full-Stack & AI Engineer specializing in React, Next.js, Three.js, Claude, Gemini, and ChatGPT integrations."
      />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen z-10 flex items-center justify-center pt-28 pb-16">
        
        {/* Animated Black Hole Background */}
        <div className="absolute top-[-185px] left-1/2 -translate-x-1/2 scale-y-130 scale-x-150 w-full max-w-[1000px] h-[500px] z-0 pointer-events-none">
          <BlackHoleVid />
        </div>

        {/* Hero Grid Container */}
        <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
          
          <div className="lg:col-span-7 flex flex-col gap-4">
            <HeroContent />
            <MoreAboutMe />
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <FloatingHeroGraphic />
          </div>

        </div>
      </section>

      {/* About Section */}
      <div id="about" className="sec-about relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <Section2 />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Skills / Toolkit Section */}
      <div id="skills" className="sec-skills relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <Section3 />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Services / 3D Card Stack Section */}
      <div id="projects" className="sec-projects relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <Section4 />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Dual Specialization (Web Architecture & Generative AI) */}
      <div id="specialization" className="sec-sphere relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <SphereDoubleSection />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Experience Timeline Section */}
      <div className="sec-other1 relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <Section5 />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* AI Agents & Neural Light Beam Section */}
      <div id="neural-ai" className="sec-section7 relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <Section7 />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* 3D Map Globe Section */}
      <div id="global" className="sec-globe relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <GlobeSection />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#02000f] via-[#02000f]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* High-Converting CTA / Collaboration Section */}
      <div id="cta" className="sec-classic relative py-12 my-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#02000f] to-transparent z-20 pointer-events-none" />
        <ReflectClassicSection />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#02000f] to-transparent z-20 pointer-events-none" />
      </div>

    </div>
  );
};

export default HomePage;
