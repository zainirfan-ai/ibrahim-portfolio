import React, { useState } from 'react';
import SEO from '../components/common/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'ai',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "ibrahim.yousuf.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is your current availability for client projects?',
      a: 'I am currently open for select full-stack development contracts, generative AI integration consulting (Claude, Gemini, ChatGPT), and technical leadership roles.'
    },
    {
      q: 'How do you handle project communication across time zones?',
      a: 'Based in Karachi (GMT+5), I maintain flexible overlap hours for clients in the US, UK, Europe, and the Middle East, utilizing Slack, GitHub, and weekly video syncs.'
    },
    {
      q: 'What tech stack do you recommend for new web apps?',
      a: 'For production-grade scalable systems, I recommend React 19 / Next.js 15 with TypeScript, Tailwind CSS, a Node/PostgreSQL backend, and an intelligent GenAI layer.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="Contact & Hire Ibrahim Yousuf | Senior Full-Stack & AI Engineer"
        description="Get in touch with Ibrahim Yousuf to discuss web development, React / Next.js applications, and frontier AI model integrations."
        keywords="Contact Ibrahim Yousuf, Hire Frontend Developer, AI Consultant, Web Developer Karachi"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>AVAILABLE FOR NEW WORK</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Extraordinary</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Have a project, job inquiry, or AI integration in mind? Drop a message below and I will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#09041a] border border-purple-500/20 flex flex-col gap-6">
              <h2 className="text-xl font-bold text-white">Direct Channels</h2>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-gray-400 uppercase">Primary Email</span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs md:text-sm font-mono text-purple-200 truncate">{email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1 rounded-lg bg-purple-600/60 hover:bg-purple-600 text-[11px] font-mono text-white transition-all"
                  >
                    {copied ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-gray-400 uppercase">Location</span>
                <p className="text-sm text-gray-200">Karachi, Pakistan (Remote Global Availability)</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-gray-400 uppercase">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                  >
                    GitHub ↗
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-[#0b061d] border border-purple-500/30 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-sm text-gray-300 max-w-md">
                    Thank you, {formData.name || 'there'}! Your message has been received. I will review your requirements and reach out to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', projectType: 'ai', message: '' }); }}
                    className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#030014] border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#030014] border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-2">Project Focus</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-[#030014] border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="ai">Generative AI Integration (Claude / Gemini / ChatGPT)</option>
                      <option value="fullstack">Full-Stack Web Application (React / Next.js)</option>
                      <option value="web3d">Interactive 3D / WebGL Portfolio / Landing Page</option>
                      <option value="mobile">Cross-Platform Mobile App (React Native)</option>
                      <option value="other">Consulting / Architecture Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-2">Message &amp; Project Details</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell me about your timeline, project vision, and technical goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#030014] border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/30 transition-all active:scale-95"
                  >
                    Submit Project Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs */}
        <div className="pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#080417] border border-white/10">
                <h3 className="text-sm font-bold text-purple-300 mb-2">{faq.q}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
