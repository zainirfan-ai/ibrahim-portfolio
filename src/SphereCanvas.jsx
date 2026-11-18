import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SphereCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    const width = currentRef.clientWidth || 240;
    const height = currentRef.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Particles count and positions
    const particlesCount = 1200;
    const positions = new Float32Array(particlesCount * 3);
    const radius = 1.2;

    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#a855f7'),
      size: 0.035,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particleSystem);

    // Inner Core Sphere
    const coreGeometry = new THREE.SphereGeometry(0.95, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#3b0764'),
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // Outer Ring
    const ringGeometry = new THREE.TorusGeometry(1.4, 0.01, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#c084fc'),
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      group.rotation.y += 0.008;
      group.rotation.x += 0.003;
      ringMesh.rotation.z += 0.005;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      <div className="absolute w-44 h-44 bg-purple-600/30 rounded-full blur-2xl animate-pulse pointer-events-none" />
      <div ref={mountRef} className="w-full h-full pointer-events-none z-10" />
    </div>
  );
};

export default SphereCanvas;