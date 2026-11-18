import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cosmic AI Copilot Platform',
      category: 'ai',
      desc: 'Next-generation AI workspace orchestrating Anthropic Claude 3.5 and Google Gemini with multi-turn chat, Artifacts preview, and vector search.',
      tags: ['Next.js 15', 'Claude 3.5', 'Gemini API', 'Tailwind', 'Zustand'],
      image: '/mypic3.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Interactive 3D WebGL Portfolio & Canvas',
      category: 'web3d',
      desc: 'High-performance interactive 3D particle experience powered by Three.js, GSAP ScrollTrigger, and custom GLSL vertex shaders.',
      tags: ['React 19', 'Three.js', 'GSAP', 'WebGL', 'Tailwind CSS'],
      image: '/Mynewpic.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Enterprise B2B SaaS Dashboard',
      category: 'fullstack',
      desc: 'Full-featured enterprise dashboard with real-time analytics, user role-based access control, Stripe billing, and exportable reports.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
      image: '/Mynewpic1.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Cross-Platform React Native Mobile App',
      category: 'mobile',
      desc: 'Sleek iOS and Android mobile app built with React Native and Expo featuring offline-first SQLite sync and push notifications.',
      tags: ['React Native', 'Expo', 'Redux Toolkit', 'Tailwind'],
      image: '/Mypic1.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Autonomous OpenAI Function Calling Agent',
      category: 'ai',
      desc: 'Agentic framework using GPT-4o structured tool calling to automate customer onboarding, CRM syncing, and automated ticket resolution.',
      tags: ['GPT-4o', 'OpenAI API', 'Node.js', 'FastAPI', 'Docker'],
      image: '/mypic3.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'E-Commerce Headless Storefront',
      category: 'fullstack',
      desc: 'Ultra-fast headless e-commerce store with server-side rendering, instant product search, Algolia integration, and multi-currency checkout.',
      tags: ['Next.js', 'Shopify Storefront API', 'Tailwind', 'Stripe'],
      image: '/Mynewpic.png',
      demoUrl: 'https://github.com',
      codeUrl: 'https://github.com',
      featured: false,
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="Featured Projects & Work | Ibrahim Yousuf"
        description="Explore production web applications, 3D interactive experiences, and generative AI systems built by Ibrahim Yousuf."
        keywords="Web Projects, React Portfolio, AI Projects, Full Stack Applications, Three.js, Ibrahim Yousuf"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            PORTFOLIO SHOWCASE
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Engineered with <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Precision</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            A curated collection of web applications, AI copilot integrations, and interactive graphics engineered for performance, scalability, and user delight.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: '⚡ Generative AI' },
            { id: 'fullstack', label: '💻 Full-Stack SaaS' },
            { id: 'web3d', label: '🌌 3D & Creative Web' },
            { id: 'mobile', label: '📱 Mobile (React Native)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0b061d]/85 border border-purple-500/20 hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl group"
            >
              <div>
                <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-purple-950/60 to-black/80 border border-white/10 mb-5 overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-radial-gradient from-purple-600/20 to-transparent pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-purple-600/80 text-white backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold text-xs text-center transition-all shadow-md active:scale-95"
                >
                  Live Preview
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-semibold text-xs transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-black/80 border border-purple-500/30 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Have a custom web or AI project in mind?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl">
            Let's discuss how we can engineer an exceptional digital product tailored to your exact business objectives.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all mt-2"
          >
            Start a Conversation →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
