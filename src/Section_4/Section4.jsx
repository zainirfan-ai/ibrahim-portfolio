'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'Web Applications',
    desc: 'Production-grade Next.js & React apps that are fast, accessible, SEO-friendly and built to scale.',
    icon: '⚛️',
    included: ['React / Next.js architecture', 'Tailwind CSS styling', 'Performance optimization'],
  },
  {
    id: '02',
    title: 'UI/UX & Visual Design',
    desc: 'Crafting stunning cosmic interfaces, high-end vector branding, and user-centric prototyping.',
    icon: '🎨',
    included: ['Figma prototyping', 'Wireframing & UI layouts', 'Design systems'],
  },
  {
    id: '03',
    title: 'Frontend Architecture',
    desc: 'Scalable component structures, state management, and modern fluid animations.',
    icon: '⚡',
    included: ['GSAP & CSS animations', 'Clean component patterns', 'State management'],
  },
  {
    id: '04',
    title: 'APIs & Backends',
    desc: 'Robust Node.js / Express APIs with SQL or MongoDB, cron jobs, and clean integration patterns.',
    icon: '🌐',
    included: ['REST API design & docs', 'Database modelling (SQL & NoSQL)', 'Background jobs & webhooks'],
  },
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const Section4 = ({
  cardWidth = 520,
  cardHeight = 440,
  radius = 24,
  tint = '#05060a',
  depth = 220,
  spread = 110,
  tilt = 18,
  tiltDirection = 'right',
  perspective = 1400,
  visibleCards = 3,
  falloff = 0.2,
  blur = 6,
  duration = 700,
  ease = 'power3.out',
  className = ''
}) => {
  const data = servicesData;
  const count = data.length;

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef({});

  const dragRef = useRef(null);
  const wheelTimerRef = useRef(null);
  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);

  cfgRef.current = {
    count,
    depth,
    spread,
    tilt,
    tiltDirection,
    visibleCards,
    falloff,
    blur,
    duration,
    ease,
    cardWidth,
  };

  const layout = useCallback(pos => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    const sc = scaleRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, -1, 1);

      let opacity = 1;
      if (!shown || d < -1 || d > cfg.visibleCards) opacity = 0;
      if (d < 0) opacity = Math.max(0, 1 + d);

      const brightness = Math.max(0.15, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';

      const ov = overlayRefs.current[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
    }
  }, []);

  const tweenTo = useCallback(
    (target, animate) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const clampedTarget = clamp(target, 0, cfg.count - 1);
      const proxy = { p: posRef.current };
      const dur = animate && !reducedRef.current ? cfg.duration / 1000 : 0;
      tweenRef.current = gsap.to(proxy, {
        p: clampedTarget,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          posRef.current = clamp(posRef.current, 0, cfg.count - 1);
          layout(posRef.current);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      const idx = clamp(rawIndex, 0, n - 1);
      tweenTo(idx, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        setActive(idx);
      }
    },
    [tweenTo]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      const cfg = cfgRef.current;
      const needed = cfg.cardWidth + Math.abs(cfg.spread) * 2 + 120;
      scaleRef.current = clamp(w / needed, 0.5, 1);
      layout(posRef.current);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [layout]);

  // SMART WHEEL SCROLL FIX: Allow page to scroll if at start/end boundaries
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onWheel = e => {
      const cfg = cfgRef.current;
      if (cfg.count < 2) return;

      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const delta = e.deltaMode === 1 ? raw * 24 : raw;

      const currentPos = posRef.current;
      const isAtStart = currentPos <= 0.05 && delta < 0;
      const isAtEnd = currentPos >= cfg.count - 1.05 && delta > 0;

      // Agar user pehle card par upar scroll kare ya aakhri card par niche scroll kare, toh page ko natural scroll karne dein!
      if (isAtStart || isAtEnd) {
        return; 
      }

      e.preventDefault();
      tweenRef.current?.kill();
      const step = clamp(delta / (cfg.cardWidth * 0.9), -0.4, 0.4);
      
      posRef.current = clamp(posRef.current + step, 0, cfg.count - 1);
      layout(posRef.current);

      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => setFocus(Math.round(posRef.current), true), 130);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [layout, setFocus]);

  const onPointerDown = useCallback(e => {
    tweenRef.current?.kill();
    dragRef.current = {
      x: e.clientX,
      startPos: posRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    e => {
      const drag = dragRef.current;
      if (!drag) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        rootRef.current?.setPointerCapture(drag.id);
      }
      if (!drag.moved) return;
      const now = performance.now();
      const dt = Math.max(now - drag.lastT, 1);
      drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = now;
      
      const newPos = drag.startPos - dx / stepPx;
      posRef.current = clamp(newPos, 0, cfg.count - 1);
      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const cfg = cfgRef.current;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
    const projected = posRef.current - (drag.v * 180) / stepPx;
    setFocus(Math.round(projected), true);
  }, [setFocus]);

  useEffect(() => {
    layout(posRef.current);
  }, [layout, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count]);

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-[#02000f10] text-white font-sans relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-8 text-center md:text-left">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-mono mb-2">
          SERVICES · 04
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          What I can build for you, <span className="text-purple-400">end-to-end.</span>
        </h2>
      </div>

      {/* 3D Depth Carousel Container */}
      <div
        ref={rootRef}
        className={`relative flex h-[500px] w-full cursor-grab touch-pan-y select-none items-center justify-center outline-none [perspective-origin:50%_50%] active:cursor-grabbing ${className}`}
        style={{ perspective: `${perspective}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        <div className="absolute inset-0 [transform-style:preserve-3d]" ref={stageRef}>
          {data.map((service, i) => (
            <div
              key={service.id}
              className="absolute left-1/2 top-1/2 cursor-pointer rounded-3xl border border-purple-500/20 bg-gradient-to-r from-[#2c133f] via-[#1a0e2e] to-[#0f091a] p-8 md:p-10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] [transform:translate(-50%,-50%)] [transform-origin:center] [will-change:transform,opacity,filter] overflow-hidden group"
              ref={el => (cardRefs.current[i] = el)}
              style={{ width: cardWidth, height: cardHeight, borderRadius: radius }}
              onClick={() => {
                if (!dragRef.current?.moved) setFocus(i, true);
              }}
            >
              {/* Background Giant Number & Icon */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[140px] md:text-[180px] font-black text-white/5 select-none pointer-events-none z-0 flex items-center">
                {service.id}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <span className="text-3xl animate-pulse">{service.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-purple-300 tracking-wider mb-3 uppercase">
                    <span>SERVICE {service.id} / 04</span>
                    <span className="w-10 h-[1px] bg-purple-500/50"></span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* What's Included Bullets */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2">
                    WHAT'S INCLUDED
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-300 font-medium">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tint Overlay for Depth Dimming */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300"
                ref={el => (overlayRefs.current[i] = el)}
                style={{ background: tint }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section4;