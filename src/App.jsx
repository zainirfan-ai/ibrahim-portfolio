import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from './Preloader';
import Particles from './Particles';
import Navbar from './Header&Footer/Navbar';
import Footer from './Header&Footer/Footer/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AiHubPage from './pages/AiHubPage';
import ClaudePage from './pages/ClaudePage';
import GeminiPage from './pages/GeminiPage';
import ChatGPTPage from './pages/ChatGPTPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {/* Preloader on initial website launch */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`relative w-full min-h-screen bg-[#02000f] overflow-x-hidden text-white font-sans ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Floating Global Navbar */}
        <Navbar />

        {/* Global Space Particles */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#a855f7", "#38bdf8"]}
            particleCount={1200}
            particleSpread={20}
            speed={0.15}
            particleBaseSize={80}
            moveParticlesOnHover
            alphaParticles={true}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Multi-Page Routes */}
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/ai" element={<AiHubPage />} />
            <Route path="/ai/claude" element={<ClaudePage />} />
            <Route path="/ai/gemini" element={<GeminiPage />} />
            <Route path="/ai/chatgpt" element={<ChatGPTPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;
