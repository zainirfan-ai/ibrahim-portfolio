import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const AboutPage = () => {
  const experiences = [
    {
      period: 'JUN 2023 - PRESENT',
      role: 'Senior Software Engineer',
      company: 'Getweys - Full-time - Karachi',
      points: [
        'Built, deployed and scaled B2B SaaS web and mobile applications using React.js, Next.js, React Native, NestJS and Node.js.',
        'Pioneered AI copilot integrations leveraging Anthropic Claude and OpenAI APIs for automated data analysis.',
        'Spearheaded frontend architecture, decreasing time-to-interactive by 40% across client flagships.',
        'Mentored 6+ junior and mid-level developers in clean architecture, testing, and modern React 19 paradigms.'
      ]
    },
    {
      period: 'FEB 2023 - JUN 2023',
      role: 'Software Engineer',
      company: 'Digital Graphiks - Full-time',
      points: [
        'Built scalable web applications using JavaScript, React.js, Next.js and Node.js.',
        'Streamlined team-wide code reviews and established automated ESLint/Prettier CI pipelines.',
        'Resolved critical production bottlenecks under tight release deadlines.'
      ]
    },
    {
      period: 'OCT 2022 - APR 2023',
      role: 'Frontend Developer',
      company: 'Lucid Web Solutions - Karachi',
      points: [
        'Crafted dynamic responsive user interfaces with React.js, Tailwind CSS, and REST API endpoints.',
        'Engineered accessible semantic UIs improving client retention metrics.'
      ]
    }
  ];

  const skillGroups = [
    {
      category: 'Frontend & UI Engineering',
      skills: ['React 19', 'Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'GSAP', 'Framer Motion', 'Redux / Zustand']
    },
    {
      category: 'Generative AI & LLMs',
      skills: ['Anthropic Claude 3.5 Sonnet', 'Google Gemini 1.5 Pro / Flash', 'OpenAI GPT-4o & o1', 'Prompt Engineering', 'RAG & Vector Embeddings', 'Function Calling']
    },
    {
      category: 'Backend & Cloud Infrastructure',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST & GraphQL APIs', 'Docker', 'Vercel / AWS', 'Git / GitHub CI/CD']
    }
  ];

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="About Ibrahim Yousuf | Senior Full-Stack & AI Engineer"
        description="Learn more about Ibrahim Yousuf, Senior Full-Stack & AI Engineer with 5+ years of experience shipping production web and AI systems in Karachi, Pakistan."
        keywords="About Ibrahim Yousuf, Senior Frontend Developer, Resume, Bio, Software Engineer Karachi"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Section with Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 pb-12 border-b border-white/10">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-2xl flex-shrink-0">
            <img 
              src="/mypic3.png" 
              alt="Ibrahim Yousuf" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02000f] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold mb-2">
              BIOGRAPHY &amp; ENGINEERING LEADERSHIP
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ibrahim Yousuf
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
              Senior Software Engineer with 5+ years of hands-on experience architecting high-performance web applications, interactive 3D experiences, and modern generative AI copilot systems. Based in Karachi, Pakistan, serving clients globally.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 hover:opacity-95 transition-all"
              >
                Hire Ibrahim →
              </Link>
              <a
                href="#experience"
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                View Experience ↓
              </a>
            </div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technical Arsenal &amp; Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a051d]/85 border border-purple-500/20 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-purple-300 mb-4 pb-2 border-b border-purple-500/20">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div id="experience" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Professional Experience Timeline
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-3xl bg-[#09041a] border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-xs md:text-sm text-purple-400 font-mono mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300 leading-relaxed">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
