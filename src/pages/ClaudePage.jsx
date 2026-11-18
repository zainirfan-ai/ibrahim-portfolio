import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const ClaudePage = () => {
  const [selectedTask, setSelectedTask] = useState('code');
  const [userCodePrompt, setUserCodePrompt] = useState('Create a custom React hook for debounced window resize with throttle backup.');
  const [simulatedResponse, setSimulatedResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const capabilities = [
    {
      title: 'State-of-the-Art Coding',
      desc: 'Dominates SWE-Bench benchmarks. Uncanny understanding of complex full-stack codebases, refactoring patterns, and modern frameworks.',
      icon: '💻'
    },
    {
      title: 'Interactive Artifacts',
      desc: 'Generates self-contained React apps, SVG diagrams, and algorithmic code in side-by-side interactive panels for rapid prototyping.',
      icon: '📦'
    },
    {
      title: 'Nuanced System Prompts',
      desc: 'Recognizes structured XML markup (<context>, <rules>, <output_format>) with unmatched precision and zero hallucinations.',
      icon: '🎯'
    },
    {
      title: 'Safety & Steerability',
      desc: 'Constitutional AI architecture gives predictable outputs without sycophancy or unsolicited disclaimers.',
      icon: '🛡️'
    }
  ];

  const handleRunSim = () => {
    setIsGenerating(true);
    setSimulatedResponse('Thinking & constructing optimal code structure...\n');
    setTimeout(() => {
      setSimulatedResponse(`// Output from Claude 3.5 Sonnet via Anthropic SDK
import { useState, useEffect } from 'react';

/**
 * Custom debounced & throttled window dimensions hook
 * @param {number} delay - Debounce duration in ms
 */
export function useWindowDimensions(delay = 150) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  });

  useEffect(() => {
    let timeoutId = null;
    let lastExecution = Date.now();
    const throttleLimit = delay * 2;

    const handleResize = () => {
      const now = Date.now();
      
      // Throttle trigger if user resizes continuously
      if (now - lastExecution >= throttleLimit) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile: window.innerWidth < 768,
        });
        lastExecution = now;
        return;
      }

      // Debounce trigger on settle
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile: window.innerWidth < 768,
        });
        lastExecution = Date.now();
      }, delay);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return dimensions;
}`);
      setIsGenerating(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="Anthropic Claude 3.5 Sonnet | AI Integration Showcase"
        description="Explore how Ibrahim Yousuf integrates Anthropic Claude 3.5 Sonnet into modern web applications for advanced coding, interactive Artifacts, and precision prompt engineering."
        keywords="Anthropic Claude, Claude 3.5 Sonnet, Artifacts, AI Coding, LLM Integration, Frontend React"
      />

      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/ai" className="hover:text-white">AI Models</Link>
          <span>/</span>
          <span className="text-amber-400">Claude AI</span>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
              🟠 ANTHROPIC FRONTIER MODEL
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              Claude 3.5 <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Sonnet</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Renowned across the global developer community as the undisputed heavyweight for frontend architecture, intricate refactoring, and natural conversational nuance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 backdrop-blur-xl flex flex-col gap-3 min-w-[280px]">
            <span className="text-[11px] font-mono text-amber-300 uppercase tracking-wider font-bold">Specs Snapshot</span>
            <div className="flex justify-between text-xs py-1 border-b border-amber-500/20">
              <span className="text-gray-400">Context Window</span>
              <span className="font-mono text-white">200K tokens</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-amber-500/20">
              <span className="text-gray-400">SWE-Bench Score</span>
              <span className="font-mono text-amber-300">Top Rank (64%+)</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-amber-500/20">
              <span className="text-gray-400">Output Mode</span>
              <span className="font-mono text-white">Code, Artifacts, JSON</span>
            </div>
          </div>
        </div>

        {/* 4 Superpowers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-[#0b061d] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col gap-3">
              <span className="text-3xl mb-1">{cap.icon}</span>
              <h3 className="text-xl font-bold text-white">{cap.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Claude Code Runner Demo */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#09041a] border border-amber-500/30 mb-16 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              ⚡ LIVE CLAUDE PROMPT SIMULATOR
            </span>
            <span className="text-xs text-gray-400 font-mono">Model: claude-3-5-sonnet-20241022</span>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-mono text-gray-300 mb-2">Task Prompt:</label>
            <input 
              type="text" 
              value={userCodePrompt}
              onChange={(e) => setUserCodePrompt(e.target.value)}
              className="w-full bg-[#030014] border border-amber-500/40 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            onClick={handleRunSim}
            disabled={isGenerating}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold text-xs uppercase tracking-wider transition-all mb-6 flex items-center gap-2 active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? 'Synthesizing...' : 'Generate with Claude Sonnet →'}
          </button>

          {simulatedResponse && (
            <div className="relative">
              <div className="text-[11px] font-mono text-gray-400 mb-1">Generated Artifact:</div>
              <pre className="p-5 rounded-2xl bg-[#02000f] border border-white/10 font-mono text-xs text-amber-200 overflow-x-auto leading-relaxed">
                {simulatedResponse}
              </pre>
            </div>
          )}
        </div>

        {/* Integration Code Snippet */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#070318] border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">
            How I Integrate Claude into Production React &amp; Node.js Stacks
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Using the official <code className="text-amber-300">@anthropic-ai/sdk</code> with streaming server-sent events (SSE) for low-latency user interfaces:
          </p>
          <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed">
{`import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function generateComponent(prompt: string) {
  const stream = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    system: "You are an elite React 19 architect. Output clean, modular components.",
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });

  for await (const chunk of stream) {
    if (chunk.type === 'content_block_delta') {
      process.stdout.write(chunk.delta.text || '');
    }
  }
}`}
          </pre>
        </div>

      </div>
    </div>
  );
};

export default ClaudePage;
