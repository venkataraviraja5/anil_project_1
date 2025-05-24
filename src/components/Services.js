// components/ServicesSection.js
import Image from 'next/image';

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions designed to streamline your business operations with scalable, secure applications built using modern technologies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "Team collaborating on software development"
  },
  {
    title: "Web Application Development",
    description: "High-performance web applications with intuitive interfaces that drive engagement and conversions for your business.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "Web application dashboard on multiple devices"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android platforms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "Mobile app development process"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance usability and create memorable digital experiences for your customers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "Designer creating user interface wireframes"
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "Cloud computing infrastructure diagram"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure as code to accelerate your development cycles and improve reliability.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    alt: "DevOps automation workflow"
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - SEO Optimized */}
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and growth objectives.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="service-card bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                //   priority={index < 3} // Lazy load after first 3 images
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3" itemProp="name">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4" itemProp="description">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}