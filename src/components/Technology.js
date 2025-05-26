'use client'; // if you're using this inside the /app directory (Next 13+)

import Image from 'next/image';
import technology from '../app/assets/images/technology.jpeg';
import tech1 from '../app/assets/images/technology1.png';
import tech2 from '../app/assets/images/tech2.png';
import tech3 from '../app/assets/images/tech3.png'
import tech4 from '../app/assets/images/tech4.png'
import tech5 from '../app/assets/images/tech5.png'

export default function Technology() {
  const images = [
    {
      name: 'Technology',
      url: technology,
      content: `We leverage the latest technologies to build innovative, scalable, and secure digital solutions. Our tech expertise ensures high performance across web, mobile, AI, and blockchain platforms.`,
    },
    {
      name: 'Revolutionize Your Business with Nexonweb Solutions',
      url: tech1,
      content: `Nexonweb Solutions is committed to transforming businesses with innovative website and app development, along with advanced AI/ML and IoT services. Our team of experienced professionals creates tailored solutions to meet your specific requirements, ensuring your business stays ahead in today's competitive digital world.
      
      Whether you're aiming to build a responsive website, a high-performing app, or integrate intelligent technologies, we deliver customer-focused services designed to boost your online presence and business efficiency.
      
      We focus on understanding your goals and crafting solutions that elevate your brand, making sure your digital journey is seamless, efficient, and results-driven.`,
    },
    {
      name: 'Web Development',
      url: tech2,
      content: `Front-End Development: Develop user-friendly, visually appealing websites.
Technologies: HTML, Bootstrap, AngularJS, ReactJS, WordPress. Focused on responsiveness, accessibility, and SEO optimization.
      
Back-End Development: Create secure, scalable, and reliable systems for your website.
Technologies: NodeJS, Python, PHP Laravel, Dotnet Core, Java. Built for handling large traffic and data loads seamlessly.`,
    },
    {
      name: 'Mobile App Development',
      url: tech3,
      content: `React Native Development: Deliver cross-platform mobile applications for Android and iOS using a single codebase.
      
Flutter Development: Create visually stunning and high-performing apps for both Android and iOS.
      
Native Android & iOS Development: Customized, feature-rich native applications for specific platforms.`,
    },
    {
      name: 'AI/ML (Artificial Intelligence and Machine Learning)',
      url:tech4,
      content: `Leverage the power of AI and ML to enhance business processes.
      
Automate operations for better efficiency. Deliver personalized user experiences. Gain insights from data-driven decision-making.`,
    },
    {
      name: 'IoT (Internet of Things)',
      url: tech5,
      content: `Transform your business with smart IoT solutions. Improve connectivity and streamline workflows.
      
Implement data-driven strategies for better customer experiences. Enable smarter operations with IoT-enabled devices and platforms.`,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center bg-black/60 h-full w-full"
        style={{
          backgroundImage: `url(${images[0]?.url.src || images[0]?.url})`,
        }}
      >
        <div className="flex items-center justify-center flex-col h-auto bg-black/60 w-full" style={{ height: '400px' }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{images[0].name}</h2>
          <p className="text-[16px] md:text-[14px] max-w-2xl">{images[0].content}</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 space-y-16">
        {images.slice(1).map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-16 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-[70%]">
              <h2 className="text-3xl font-semibold mb-4">{item.name}</h2>
              <p className="text-gray-600 text-lg whitespace-pre-line">{item.content}</p>
            </div>

            <div className="w-full md:w-[50%] relative h-[300px]">
              <Image
                src={item.url}
                alt={item.name}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
