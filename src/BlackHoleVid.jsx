import React from 'react';

export default function BlackHoleVid() {
  return (
    /* mix-blend-screen yahan se hata diya hai */
    <div className="w-full h-full flex items-center justify-center relative select-none">
      
      {/* Ultra Glow - Behind the video to light up the header */}
      <div className="absolute top-1/4 w-[80%] h-[40%] bg-purple-800/30 rounded-full blur-[120px] pointer-events-none"></div>

      <video
        src="/blackhole.webm" 
        autoPlay
        loop
        muted
        playsInline
        /* brightness aur contrast filters ko hata diya taake original video aaye */
        className="w-full h-full object-cover rounded-full pointer-events-none rotate-180"
      />
    </div>
  );
}