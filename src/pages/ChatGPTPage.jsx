import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const ChatGPTPage = () => {
  const [selectedCapability, setSelectedCapability] = useState('function_calling');

  const capabilities = {
    function_calling: {
      title: 'Automated Tool Execution & Function Calling',
      desc: 'GPT-4o seamlessly converts natural language instructions into strictly formatted JSON schema arguments, invoking backend SQL databases, Stripe checkouts, or external third-party APIs.',
      example: `{
  "name": "book_consultation_call",
  "arguments": {
    "client_name": "Sarah Connor",
    "topic": "Generative AI Architecture & Next.js Audit",
    "timezone": "America/New_York",
    "preferred_date": "2026-11-20T14:00:00Z"
  }
}`
    },
    o1_reasoning: {
      title: 'o1 Model Chain-of-Thought Reasoning',
      desc: 'OpenAI o1 series spends deliberate compute time generating internal hidden thoughts before producing outputs. Ideal for complex cryptographic algorithms, competitive math, and deep code auditing.',
      example: `Thinking Process:
1. Parse AST for React 19 forwardRef and ref prop migration.
2. Check for race conditions in concurrent transition states.
3. Verify that zero memory leaks occur across Web Worker threads.
-> Output synthesized with mathematical verification.`
    },
    voice_assistants: {
      title: 'Realtime Voice & Audio Streaming',
      desc: 'Native audio-to-audio multimodal streaming with sub-300ms latency. Allows building conversational voice assistants with human-like prosody, intonation, and interruption handling.',
      example: `// Realtime WebSocket Session Initialization:
const ws = new WebSocket("wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview");
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: "session.update",
    session: { modalities: ["audio", "text"], voice: "alloy" }
  }));
};`
    }
  };

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="OpenAI ChatGPT & GPT-4o | AI Integration Showcase"
        description="Learn how Ibrahim Yousuf integrates OpenAI GPT-4o, o1 reasoning models, function calling, and real-time audio into enterprise web applications."
        keywords="OpenAI ChatGPT, GPT-4o, OpenAI o1, Function Calling, Assistants API, AI Agents, Full Stack"
      />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/ai" className="hover:text-white">AI Models</Link>
          <span>/</span>
          <span className="text-emerald-400">ChatGPT &amp; OpenAI</span>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
              🟢 OPENAI REASONING &amp; AGENTIC ECOSYSTEM
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              ChatGPT &amp; <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">GPT-4o</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The vanguard of autonomous tool execution, structured output guarantees, and cutting-edge chain-of-thought mathematical reasoning with OpenAI o1.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 backdrop-blur-xl flex flex-col gap-3 min-w-[280px]">
            <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider font-bold">Specs Overview</span>
            <div className="flex justify-between text-xs py-1 border-b border-emerald-500/20">
              <span className="text-gray-400">Flagship Models</span>
              <span className="font-mono text-white">GPT-4o, o1-preview, o1-mini</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-emerald-500/20">
              <span className="text-gray-400">Specialty</span>
              <span className="font-mono text-emerald-300">Tool Calling &amp; Reasoning</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-emerald-500/20">
              <span className="text-gray-400">Structured Output</span>
              <span className="font-mono text-white">Strict JSON Schema (100%)</span>
            </div>
          </div>
        </div>

        {/* Interactive Feature Matrix */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#09041a] border border-emerald-500/30 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Autonomous Agent Features</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCapability('function_calling')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  selectedCapability === 'function_calling'
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                ⚙️ Function Calling
              </button>
              <button
                onClick={() => setSelectedCapability('o1_reasoning')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  selectedCapability === 'o1_reasoning'
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                🧠 o1 Deep Reasoning
              </button>
              <button
                onClick={() => setSelectedCapability('voice_assistants')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  selectedCapability === 'voice_assistants'
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                🎙️ Realtime Voice
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#030014] border border-white/10">
            <h3 className="text-lg font-bold text-emerald-200 mb-2">
              {capabilities[selectedCapability].title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {capabilities[selectedCapability].desc}
            </p>
            <pre className="p-4 rounded-xl bg-black/70 border border-emerald-500/20 font-mono text-xs text-emerald-100 overflow-x-auto leading-relaxed">
              {capabilities[selectedCapability].example}
            </pre>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#061412] border border-emerald-500/20">
            <span className="text-2xl mb-2 block">🤖</span>
            <h3 className="text-lg font-bold text-white mb-2">Autonomous Agents</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Building multi-step reasoning agents that chain web search, database lookups, and code interpreters to solve end-to-end workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061412] border border-emerald-500/20">
            <span className="text-2xl mb-2 block">🔒</span>
            <h3 className="text-lg font-bold text-white mb-2">Strict JSON Guarantees</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              OpenAI Structured Outputs guarantee 100% adherence to defined Zod/TypeScript types, eliminating runtime parse errors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#061412] border border-emerald-500/20">
            <span className="text-2xl mb-2 block">⚡</span>
            <h3 className="text-lg font-bold text-white mb-2">Vector Search &amp; RAG</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Embedding knowledgebases with text-embedding-3-small/large with Pinecone and pgvector for semantic retrieval.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatGPTPage;
