import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const AiHubPage = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [activeTab, setActiveTab] = useState('claude');

  const models = [
    {
      id: 'claude',
      name: 'Claude 3.5 Sonnet',
      company: 'Anthropic',
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      path: '/ai/claude',
      tagline: 'World-leading coding, architectural reasoning, and human nuance.',
      strengths: ['Complex Coding & Refactoring', 'Artifacts & Canvas UI', 'Strict System Prompt Adherence', 'Natural Tone'],
      contextWindow: '200,000 tokens',
      bestFor: 'Software development, deep analytical writing, automated agents'
    },
    {
      id: 'gemini',
      name: 'Gemini 1.5 Pro',
      company: 'Google DeepMind',
      color: 'from-blue-500 to-cyan-500',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      path: '/ai/gemini',
      tagline: 'Massive 2M multimodal context window with audio, video & native code execution.',
      strengths: ['2,000,000+ Token Context', 'Native Video & Audio Processing', 'GCP & BigQuery Integrations', 'Lightning-fast Flash Tier'],
      contextWindow: '2,000,000 tokens',
      bestFor: 'Full-codebase ingestion, hours of video analysis, large document processing'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT & GPT-4o',
      company: 'OpenAI',
      color: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      path: '/ai/chatgpt',
      tagline: 'Omni-modal intelligence, real-time voice, structured outputs & reasoning.',
      strengths: ['Function Calling & Tool Use', 'o1 Chain-of-Thought Reasoning', 'Assistants API & Custom GPTs', 'Structured JSON Outputs'],
      contextWindow: '128,000 tokens',
      bestFor: 'AI agent orchestration, customer-facing chatbots, math & logic'
    }
  ];

  const samplePrompts = [
    {
      title: 'Architect a Scalable Micro-Frontend',
      prompt: 'Design a micro-frontend architecture with Next.js 15, Vite, and Module Federation. Detail state synchronization and CI/CD pipelines.',
      responses: {
        claude: `## Micro-Frontend Architectural Blueprint (Claude 3.5 Sonnet)

1. **Host Orchestration (Next.js 15 App Router):**
   - Implements dynamic remote container loading using Native Webpack 5 / Rolldown Module Federation.
   - Shared dependencies: React 19, Zustand store shell.

2. **Cross-Micro-Frontend Event Bus:**
   \`\`\`typescript
   export const createGlobalEventBus = () => {
     const target = new EventTarget();
     return {
       dispatch: (event: string, payload: unknown) => 
         target.dispatchEvent(new CustomEvent(event, { detail: payload })),
       listen: (event: string, handler: (data: any) => void) => 
         target.addEventListener(event, (e: any) => handler(e.detail))
     };
   };
   \`\`\`

3. **Resilience Strategy:**
   - Fallback error boundaries per remote container to prevent single micro-app crashes from taking down the entire shell.`,
        gemini: `## Multi-Source Micro-Frontend Ingestion (Gemini 1.5 Pro)

- **Context Analyzed:** Ingested 12 repository trees simultaneously using 2M token context.
- **Data Pipeline:**
  - Remote components stream assets directly through Edge CDN with HTTP/3 early hints.
  - Automated performance telemetry dispatched directly to Google Cloud Logging & BigQuery for latency profiling.
- **Multimodal Monitoring:** Gemini Vision audits DOM hydration screenshots in automated headless Playwright tests.`,
        chatgpt: `## Autonomous Agentic Deployment (GPT-4o / o1)

- **Structured Output Strategy:**
  - Automated OpenAI Function Calling verifies manifest JSON schemas before container binding.
- **o1 Reasoning Verification:**
  - 14 verification steps executed to validate zero circular imports between remote packages.
  - Generated Docker multi-stage build pipelines with sub-second health-checks.`
      }
    },
    {
      title: 'Optimize 3D Canvas Rendering Performance',
      prompt: 'Diagnose frame drops in Three.js when rendering 5,000 instanced particle meshes alongside post-processing bloom.',
      responses: {
        claude: `### Performance Optimization Protocol (Claude 3.5)
1. Replace individual mesh draw calls with **THREE.InstancedMesh**.
2. Offload particle positions, velocity, and color buffers directly to a custom **GLSL Vertex Shader**.
3. Implement frustum culling and clamp maximum pixel ratio to \`Math.min(window.devicePixelRatio, 2)\`.`,
        gemini: `### GPU Profile & Memory Diagnosis (Gemini 1.5)
- Evaluated WebGL draw buffers: Identified overdraw in Unused RenderTargets.
- Resolution: Enable selective bloom pass using stencil buffer layers instead of global post-processing pass.`,
        chatgpt: `### Structured Performance Checklist (ChatGPT)
- [x] Dispose unused geometries and materials on unmount.
- [x] Utilize \`requestVideoFrameCallback\` or offscreen canvas web workers.
- [x] Limit SelectiveBloomPass blur passes to 3 iterations max.`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="Generative AI Hub | Claude, Gemini & ChatGPT"
        description="Comprehensive AI engineering showcase comparing Anthropic Claude, Google Gemini, and OpenAI ChatGPT. Explore architecture, live prompt comparisons, and production integrations."
        keywords="Generative AI, Claude 3.5 Sonnet, Google Gemini, ChatGPT, OpenAI, Anthropic, Large Language Models, AI Architecture"
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            ⚡ FRONTIER AI ARCHITECTURE
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            The AI Frontier: <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Claude, Gemini &amp; ChatGPT</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I build modern production software that taps into the distinct superpowers of the world's leading foundation models. Explore their architectures, benchmarks, and interactive comparisons below.
          </p>
        </div>

        {/* 3 Core Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {models.map((model) => (
            <div
              key={model.id}
              className="relative rounded-3xl bg-[#09041a]/85 border border-white/10 hover:border-purple-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${model.badgeBg}`}>
                    {model.company}
                  </span>
                  <span className="text-xs font-mono text-gray-400">Context: {model.contextWindow}</span>
                </div>

                <h2 className="text-2xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {model.name}
                </h2>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                  {model.tagline}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-semibold block">
                    Core Strengths:
                  </span>
                  {model.strengths.map((str, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-purple-400 text-sm">✔</span>
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={model.path}
                className={`w-full py-3 rounded-xl bg-gradient-to-r ${model.color} text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2`}
              >
                <span>Deep Dive into {model.company}</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Model Comparison / Prompt Playground */}
        <div className="rounded-3xl bg-[#09041a]/90 border border-purple-500/30 p-6 md:p-10 mb-20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Interactive Playground
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
                Side-by-Side Model Outputs
              </h2>
            </div>
            
            {/* Prompt Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedPrompt === idx
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Prompt {idx + 1}: {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Current Prompt Box */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6 font-mono text-xs md:text-sm text-purple-200">
            <span className="text-gray-400 select-none block mb-1">PROMPT:</span>
            {samplePrompts[selectedPrompt].prompt}
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveTab('claude')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'claude'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              🟠 Claude 3.5 Output
            </button>
            <button
              onClick={() => setActiveTab('gemini')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'gemini'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              🔵 Gemini 1.5 Output
            </button>
            <button
              onClick={() => setActiveTab('chatgpt')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'chatgpt'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              🟢 ChatGPT Output
            </button>
          </div>

          {/* Response Viewer */}
          <div className="p-6 rounded-2xl bg-[#030014] border border-white/10 font-mono text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
            {samplePrompts[selectedPrompt].responses[activeTab]}
          </div>
        </div>

        {/* Integration Architecture Table */}
        <div className="rounded-3xl bg-[#09041a]/70 border border-white/10 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Model Matrix &amp; Production Benchmarks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 font-mono uppercase text-[11px]">
                  <th className="py-4 px-4">Feature / Metric</th>
                  <th className="py-4 px-4 text-amber-300">Anthropic Claude 3.5</th>
                  <th className="py-4 px-4 text-blue-300">Google Gemini 1.5</th>
                  <th className="py-4 px-4 text-emerald-300">OpenAI ChatGPT / o1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Context Window</td>
                  <td className="py-4 px-4">200K tokens</td>
                  <td className="py-4 px-4 font-bold text-cyan-300">2M+ tokens (Industry Max)</td>
                  <td className="py-4 px-4">128K tokens</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Code Intelligence</td>
                  <td className="py-4 px-4 font-bold text-amber-300">Tier 1 (SWE-Bench Leader)</td>
                  <td className="py-4 px-4">Tier 1-2 (Excellent multi-file)</td>
                  <td className="py-4 px-4">Tier 1 (Deep reasoning with o1)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Multimodal Inputs</td>
                  <td className="py-4 px-4">Images, PDFs, Text</td>
                  <td className="py-4 px-4 font-bold text-cyan-300">Video, Audio, Images, PDFs</td>
                  <td className="py-4 px-4">Realtime Voice, Vision, Text</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">System Prompt Compliance</td>
                  <td className="py-4 px-4 font-bold text-amber-300">Highest adherence</td>
                  <td className="py-4 px-4">High adherence</td>
                  <td className="py-4 px-4">Very High</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Production Role in My Stack</td>
                  <td className="py-4 px-4">Code Generation &amp; Complex UI building</td>
                  <td className="py-4 px-4">Codebase ingestion &amp; Data pipelines</td>
                  <td className="py-4 px-4">Tool execution &amp; Autonomous agents</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AiHubPage;
