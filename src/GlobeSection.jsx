import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlobeSection = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    const width = currentRef.clientWidth;
    const height = currentRef.clientHeight;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // ─── 1. Background Upward Floating Stars (Globe ke pichhe) ───
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 12;     // X spread
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;   // Y spread
      starPositions[i * 3 + 2] = -1.5 - Math.random() * 2.5; // Z position (Globe ke peeche)
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMat = new THREE.PointsMaterial({
      color: new THREE.Color('#ffffff'),
      size: 0.018,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const starParticles = new THREE.Points(starGeo, starMat);
    scene.add(starParticles);

    // ─── 2. 3D Globe with Map Data ───
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 2.4;
    const dotDensity = 55;

    const positions = [];
    
    for (let latIndex = -dotDensity; latIndex <= dotDensity; latIndex++) {
      const lat = (latIndex / dotDensity) * (Math.PI / 2);
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      
      const numPoints = Math.floor(Math.abs(cosLat) * dotDensity * 2.2);

      for (let lonIndex = 0; lonIndex < numPoints; lonIndex++) {
        const lon = (lonIndex / numPoints) * Math.PI * 2;

        let isLand = false;
        const degLat = lat * (180 / Math.PI);
        const degLon = lon * (180 / Math.PI);

        if (
          (degLon > -140 && degLon < -50 && degLat > -55 && degLat < 70) || 
          (degLon > -20 && degLon < 50 && degLat > -35 && degLat < 70) ||  
          (degLon > 40 && degLon < 150 && degLat > -10 && degLat < 75) || 
          (degLon > 110 && degLon < 155 && degLat > -45 && degLat < -10)   
        ) {
          isLand = true;
        }

        if (isLand || Math.random() > 0.85) {
          const x = radius * cosLat * Math.cos(lon);
          const y = radius * sinLat;
          const z = radius * cosLat * Math.sin(lon);
          positions.push(x, y, z);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#e9d5ff'),
      size: 0.022,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const globePoints = new THREE.Points(geometry, material);
    globeGroup.add(globePoints);

    // Globe Placement & Angle
    globeGroup.position.y = -1.5;
    globeGroup.rotation.x = 0.52;
    globeGroup.rotation.z = -0.1;

    // ─── 3. Animation Loop ───
    let animationFrameId;
    const animate = () => {
      // Globe Rotation
      globePoints.rotation.y += 0.002;

      // Stars Upward Floating Animation
      const posArr = starGeo.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        posArr[i * 3 + 1] += 0.003; // Niche se upar move karna
        
        // Screen ke top se bahar nikalte hi niche reset karna
        if (posArr[i * 3 + 1] > 4) {
          posArr[i * 3 + 1] = -4;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!currentRef) return;
      const newW = currentRef.clientWidth;
      const newH = currentRef.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] bg-[#02000f] text-white flex flex-col items-center justify-start pt-16 overflow-hidden select-none">
      
      {/* Text Overlay */}
      <div className="relative z-20 text-center max-w-3xl px-4 flex flex-col items-center gap-4">
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-purple-300/90 bg-purple-950/60 border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          About
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] mt-2">
          Building Scalable Products Across The Globe
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
          Creating high-performance interactive web interfaces, secure systems, and seamless user experiences.
        </p>

        <a 
          href="#skills" 
          className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-purple-900/40 border border-purple-400/40 text-purple-200 text-xs font-mono uppercase tracking-wider hover:bg-purple-800/60 hover:border-purple-300 transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          See My Core Values
        </a>
      </div>

      {/* 3D Map Globe & Floating Stars Canvas */}
      <div className="relative w-full h-[400px] md:h-[500px] -mt-6 pointer-events-none flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div ref={mountRef} className="w-full h-full z-10" />
      </div>

    </section>
  );
};

export default GlobeSection;