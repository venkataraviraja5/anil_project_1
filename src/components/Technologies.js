// components/TechnologiesSection.js
import { 
  FaReact, FaNodeJs, FaPython, FaAws, 
  FaDocker, FaGitAlt, FaDatabase, FaJs 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss,
  SiPostgresql, SiMongodb, SiRedis, SiKubernetes 
} from 'react-icons/si';

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
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our stack combines cutting-edge technologies to deliver high-performance solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="tech-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}