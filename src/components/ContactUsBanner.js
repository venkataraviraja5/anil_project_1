'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const ContactBanner = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 0.5 + 0.5,
      color: [
        'bg-blue-400',
        'bg-purple-400',
        'bg-pink-400',
        'bg-yellow-400',
        'bg-green-400',
      ][Math.floor(Math.random() * 5)],
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 shadow-2xl my-16 h-96 flex items-center justify-center">
      {/* Fireworks particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} opacity-0`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Large central firework */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <div className="absolute rounded-full bg-white w-64 h-64 mix-blend-screen opacity-20 blur-xl"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch With Us
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's connect and transform your online experience
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Us Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactBanner;
