'use client';

import {
  FaReact, FaNodeJs, FaPython, FaAws,
  FaDocker, FaGitAlt, FaDatabase, FaJs
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss,
  SiPostgresql, SiMongodb, SiRedis, SiKubernetes
} from 'react-icons/si';
import { useEffect, useState } from 'react';

const technologies = [
  { name: "React", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
  { name: "JavaScript", icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" /> },
  { name: "Python", icon: <FaPython className="w-8 h-8 text-[#3776AB]" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-[#E10098]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
  { name: "Redis", icon: <SiRedis className="w-8 h-8 text-[#DC382D]" /> },
  { name: "AWS", icon: <FaAws className="w-8 h-8 text-[#FF9900]" /> },
  { name: "Docker", icon: <FaDocker className="w-8 h-8 text-[#2496ED]" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 text-[#326CE5]" /> },
  { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" /> },
  { name: "SQL", icon: <FaDatabase className="w-8 h-8 text-[#00758F]" /> }
];

export default function TechnologiesSection() {
  const [loopedTechs, setLoopedTechs] = useState([]);

  useEffect(() => {
    setLoopedTechs([...technologies, ...technologies]);
  }, []);

  return (
    <section className="py-12 sm:py-24 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Our stack combines cutting-edge technologies to deliver high-performance solutions.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-6">
            {loopedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow p-4 w-32 h-32 shrink-0 group hover:scale-105 transition-transform"
              >
                {tech.icon}
                <span className="text-sm mt-2 text-gray-800 dark:text-white group-hover:text-blue-500">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
