import React from 'react';

const FloatingHeroGraphic = () => {
  return (
    <div className="relative w-full max-w-[450px] md:max-w-[500px] flex items-center justify-center pointer-events-none select-none ">
      
      {/* ─── Ambient Glow ─── */}
      <div className="absolute w-[320px] md:w-[400px] h-[320px] md:h-[400px] bg-purple-600/35 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute w-[200px] h-[200px] bg-fuchsia-500/20 rounded-full blur-[60px]" />

      {/* ─── Floating Character Container ─── */}
      <div className="relative z-10 w-full animate-[float_5s_ease-in-out_infinite] flex items-center justify-center">
        
        {/* 🌟 -scale-x-100 se image horizontally flip ho kar left side face karegi */}
        <img 
          src="/mypic3.png" // 👈 Apni file ka exact path check kar lena
          alt="Ibrahim Hero Graphic" 
          className="w-full h-auto object-contain drop-shadow-[0_10px_40px_rgba(168,85,247,0.45)] scale-105 -scale-x-100"
        />

        {/* Bottom Brush Stroke Blend Mask */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#02000f] via-[#02000f]/80 to-transparent z-20 pointer-events-none" />

      </div>

    </div>
  );
};

export default FloatingHeroGraphic;