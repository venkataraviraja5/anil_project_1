'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 50;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      starPositions[i * 3 + 2] = -Math.random() * 50;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: new THREE.Color(0x99ccff),
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Bloom effect
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.2,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.0;
    bloomPass.radius = 0.6;
    composer.addPass(bloomPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = starGeometry.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        positions[i * 3 + 2] += 0.2;

        if (positions[i * 3 + 2] > 5) {
          positions[i * 3 + 2] = -50;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      composer.render();
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
  <div className="relative min-h-screen bg-black text-white overflow-hidden">
    {/* Starfield Canvas */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />

    {/* Content Container */}
    <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="w-full max-w-3xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text-gradient"
        >
          Building Intelligent Software for the Future
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300"
        >
          We design and engineer powerful digital platforms that help startups and enterprises scale, automate, and lead in their industries.
        </motion.p>

        {/* Buttons */}
        <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-5 py-3 text-sm sm:text-base font-medium rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
                Let’s Talk <FiArrowRight className="h-5 w-5" />
            </motion.a>

        </motion.div>


        {/* Feature Tags */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            'Custom Web Apps',
            'AI-Driven Solutions',
            'Enterprise Integrations',
            'Cloud Architecture',
            'Scalable Platforms',
          ].map((text) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full"
            >
              <FiCheck className="text-green-400" />
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
);

}
