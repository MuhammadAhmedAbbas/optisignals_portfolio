import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import Button from './Button';

export const Component = () => {
  const mountRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.003);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 8;
    camera.rotation.x = -0.2;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // POST PROCESSING
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.tintColor = new THREE.Color(0x3b82f6);
    
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // PARTICLES / STARS
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x60a5fa);
    const color2 = new THREE.Color(0x818cf8);
    const color3 = new THREE.Color(0x0ea5e9);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 150;
      posArray[i + 1] = (Math.random() - 0.5) * 150 + 20;
      posArray[i + 2] = (Math.random() - 0.5) * 150 - 20;

      const randColor = Math.random();
      const c = randColor < 0.33 ? color1 : randColor < 0.66 ? color2 : color3;
      colorsArray[i] = c.r;
      colorsArray[i + 1] = c.g;
      colorsArray[i + 2] = c.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // MOUNTAIN TERRAIN (Wireframe Grid)
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 60, 60);
    planeGeometry.rotateX(-Math.PI / 2);

    const vertices = planeGeometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];
      const y = Math.sin(x / 5) * 3 + Math.cos(z / 4) * 4;
      vertices[i + 1] = y > 0 ? y * 1.5 : y * 0.2;
    }
    planeGeometry.computeVertexNormals();

    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(planeMesh);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ANIMATION LOOP WITH INTERSECTION OBSERVER
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(mountRef.current);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;
      planeMesh.position.z = (elapsedTime * 4) % 1.66;
      
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 + 8 - camera.position.y) * 0.05;
      camera.lookAt(0, 5, 0);

      composer.render();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      planeGeometry.dispose();
      planeMaterial.dispose();
    };
  }, []);

  // GSAP TEXT ANIMATION
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 })
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=0.6")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6");
  }, []);

  return (
    <div className="hero-container relative w-full h-screen overflow-hidden bg-black">
      <div className="hero-canvas absolute top-0 left-0 w-full h-full" ref={mountRef}></div>
      <div className="hero-content absolute inset-0 flex flex-col items-start justify-center text-white text-left z-10 pointer-events-none px-6 md:px-24">
        <h1 ref={titleRef} className="hero-title text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-400 pb-4">
          Build Fast. Scale Smart. Stay Secure.
        </h1>
        <p ref={subtitleRef} className="hero-subtitle mt-6 text-xl md:text-2xl opacity-80 max-w-2xl text-slate-300 font-light">
          We design and develop high-performance websites, mobile apps, and secure digital solutions for growing businesses.
        </p>
        <div ref={ctaRef} className="mt-10 flex gap-4 pointer-events-auto">
          <Button to="/services" variant="primary" className="px-8 py-4 text-lg">
            Explore Services
          </Button>
          <Button to="/contact" variant="ghost" className="px-8 py-4 text-lg border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

