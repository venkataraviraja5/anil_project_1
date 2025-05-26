// components/ServicesSection.js
import Image from 'next/image';
import webDevImage from '../app/assets/images/web_development.jpg';
import customSoftware from '../app/assets/images/custom_software.jpeg'
import mobileDev from '../app/assets/images/mobile_dev.jpg'
import ui_ux from '../app/assets/images/ui_ux.jpg'
import cloud_dev from '../app/assets/images/cloud_dev.jpeg'
import devops_dev from '../app/assets/images/devops_dev.jpeg'
import ai_dev from '../app/assets/images/Ai_development.jpeg'
import ecommerce_dev from '../app/assets/images/e_commerce.jpeg'
import blockchain_dev from '../app/assets/images/block_chain.jpeg'
import graphic_design from '../app/assets/images/graphic_design.jpeg'

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions designed to streamline your business operations with scalable, secure applications built using modern technologies.",
    image: customSoftware,
    alt: "Team collaborating on software development"
  },
  {
    title: "Web Application Development",
    description: "High-performance web applications with intuitive interfaces that drive engagement and conversions for your business.",
    image: webDevImage,
    alt: "Web application dashboard on multiple devices"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android platforms.",
    image: mobileDev,
    alt: "Mobile app development process"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance usability and create memorable digital experiences for your customers.",
    image: ui_ux,
    alt: "Designer creating user interface wireframes"
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    image: cloud_dev,
    alt: "Cloud computing infrastructure diagram"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure as code to accelerate your development cycles and improve reliability.",
    image: devops_dev,
    alt: "DevOps automation workflow"
  },
  {
  title: "AI Development",
  description: "Custom AI and machine learning solutions to automate workflows, enhance decision-making, and deliver intelligent customer experiences.",
  image: ai_dev,
  alt: "Artificial intelligence development illustration"
},
{
  title: "E-Commerce Solutions",
  description: "End-to-end e-commerce development, including storefront design, payment integration, and performance optimization to drive online sales.",
  image: ecommerce_dev,
  alt: "E-commerce platform design and shopping cart icons"
},
{
  title: "Blockchain Development",
  description: "Decentralized app (dApp) and smart contract development on Ethereum, Solana, and other blockchain platforms for secure, transparent solutions.",
  image: blockchain_dev,
  alt: "Blockchain network and smart contract concept illustration"
},
{
  title: "Graphic Design",
  description: "Creative branding, UI/UX design, and marketing assets crafted to visually engage and communicate your brand effectively across all channels.",
  image: graphic_design,
  alt: "Modern graphic design elements and color palette"
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}