import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const GeminiPage = () => {
  const [activeMedia, setActiveMedia] = useState('codebase');

  const mediaExamples = {
    codebase: {
      title: 'Full Repository Ingestion (2M Token Context)',
      desc: 'Ingests entire codebases with 50+ files to identify cross-module architectural bottlenecks and generate end-to-end integration tests without vector fragmentation.',
      code: `// Gemini 1.5 Pro analyzes entire git diff in one prompt:
const response = await ai.models.generateContent({
  model: 'gemini-1.5-pro',
  contents: [
    { text: "Audit this 85-file repository for React 19 forwardRef deprecations and memory leaks:" },
    { inlineData: { mimeType: 'text/plain', data: fullRepoArchiveBase64 } }
  ]
});`
    },
    multimodal: {
      title: 'Real-time UI Video & DOM Analysis',
      desc: 'Pass high-resolution UI screen recordings or Figma design files directly to Gemini Vision to automatically extract CSS tokens, inspect responsiveness, and detect rendering anomalies.',
      code: `// Gemini Vision analyzes screen recording frame-by-frame:
const videoAnalysis = await ai.models.generateContent({
  model: 'gemini-1.5-flash',
  contents: [
    { text: "Detect any visual layout shift (CLS) in this 10-second mobile scroll recording:" },
    { fileData: { fileUri: recordedVideoGcsUri, mimeType: 'video/mp4' } }
  ]
});`
    },
    audio: {
      title: 'Native Audio Understanding & Speech-to-Code',
      desc: 'Direct speech understanding without separate Whisper transcription steps. Listens to client voice notes or standup recordings and auto-generates JIRA ticket tasks.',
      code: `// Direct audio buffer processing:
const taskExtraction = await ai.models.generateContent({
  model: 'gemini-1.5-pro',
  contents: [
    { text: "Extract structured architecture requirements from this team voice memo:" },
    { inlineData: { mimeType: 'audio/mp3', data: voiceMemoBase64 } }
  ]
});`
    }
  };

  return (
    <div className="min-h-screen bg-[#02000f] text-white pt-28 pb-20 px-4 md:px-12 font-sans">
      <SEO 
        title="Google Gemini 1.5 Pro & Flash | AI Integration Showcase"
        description="Discover how Ibrahim Yousuf harnesses Google DeepMind Gemini 1.5 Pro's 2M token context, native video, audio, and multimodal capabilities in production."
        keywords="Google Gemini, Gemini 1.5 Pro, Multimodal AI, Gemini Flash, Google DeepMind, Vertex AI, React Integration"
      />

      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/ai" className="hover:text-white">AI Models</Link>
          <span>/</span>
          <span className="text-cyan-400">Google Gemini</span>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
              🔵 GOOGLE DEEPMIND MULTIMODAL POWERHOUSE
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              Gemini 1.5 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Pro &amp; Flash</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Pioneering the industry's longest context window: 2,000,000+ tokens capable of consuming entire video streams, hours of audio, and sprawling monolithic repositories in one breath.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-950/20 border border-cyan-500/30 backdrop-blur-xl flex flex-col gap-3 min-w-[280px]">
            <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider font-bold">Key Specifications</span>
            <div className="flex justify-between text-xs py-1 border-b border-cyan-500/20">
              <span className="text-gray-400">Context Window</span>
              <span className="font-mono text-cyan-300 font-bold">2,000,000+ tokens</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-cyan-500/20">
              <span className="text-gray-400">Native Modalities</span>
              <span className="font-mono text-white">Video, Audio, Code, Text</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-cyan-500/20">
              <span className="text-gray-400">Speed Tier</span>
              <span className="font-mono text-white">Gemini 1.5 Flash (sub-sec)</span>
            </div>
          </div>
        </div>

        {/* Multimodal Showcase Tabs */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#09041a] border border-cyan-500/30 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                MULTIMODAL CAPABILITY MATRIX
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Explore Native Modalities</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveMedia('codebase')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  activeMedia === 'codebase'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                📁 2M Token Codebase
              </button>
              <button
                onClick={() => setActiveMedia('multimodal')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  activeMedia === 'multimodal'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                🎬 Video &amp; Vision
              </button>
              <button
                onClick={() => setActiveMedia('audio')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  activeMedia === 'audio'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                🎙️ Native Audio
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#030014] border border-white/10">
            <h3 className="text-lg font-bold text-cyan-200 mb-2">
              {mediaExamples[activeMedia].title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {mediaExamples[activeMedia].desc}
            </p>
            <pre className="p-4 rounded-xl bg-black/70 border border-cyan-500/20 font-mono text-xs text-cyan-100 overflow-x-auto leading-relaxed">
              {mediaExamples[activeMedia].code}
            </pre>
          </div>
        </div>

        {/* Why Gemini in Production */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#08031a] border border-cyan-500/20">
            <span className="text-2xl mb-2 block">⚡</span>
            <h3 className="text-lg font-bold text-white mb-2">Sub-Second Flash Tier</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Gemini 1.5 Flash provides lightning response times for live autocomplete, form validation, and user chatbots without draining API budgets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08031a] border border-cyan-500/20">
            <span className="text-2xl mb-2 block">🌐</span>
            <h3 className="text-lg font-bold text-white mb-2">Google Cloud Native</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Seamlessly binds with BigQuery, Cloud Run, Firebase, and Vertex AI with enterprise IAM security and zero data training leaks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08031a] border border-cyan-500/20">
            <span className="text-2xl mb-2 block">📚</span>
            <h3 className="text-lg font-bold text-white mb-2">Context Caching</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Enables 75% cost reduction on large repeated contexts by storing prompt tokens in Google Cloud RAM for instant query reuse.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GeminiPage;
