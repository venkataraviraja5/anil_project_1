export default function Technology() {
    const images = [
      {
        name: "Technology",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/3d-robot-hand-background-ai-technology-side-view-scaled-e1741158062871.jpg",
        content : `We leverage the latest technologies to build innovative, scalable, and secure digital solutions. Our tech expertise ensures high performance across web, mobile, AI, and blockchain platforms.`,
      },
      {
        name: "Revolutionize Your Business with Nexonweb Solutions",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/01-3.png",
        content:`Nexonweb Solutions is committed to transforming businesses with innovative website and app development, along with advanced AI/ML and IoT services. Our team of experienced professionals creates tailored solutions to meet your specific requirements, ensuring your business stays ahead in today's competitive digital world.
                 Whether you're aiming to build a responsive website, a high-performing app, or integrate intelligent technologies, we deliver customer-focused services designed to boost your online presence and business efficiency.
                 We focus on understanding your goals and crafting solutions that elevate your brand, making sure your digital journey is seamless, efficient, and results-driven.`
      },
      {
        name: "AI/ML (Artificial Intelligence and Machine Learning):",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/02-1.png",
        content:`AI/ML Solutions Leverage the power of AI and ML to enhance business processes.
                 Automate operations for better efficiency. Deliver personalized user experiences. Gain insights from data-driven decision-making.`
      },
      {
        name: "IoT (Internet of Things)",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/03.png",
        content:`IoT Integration Transform your business with smart IoT solutions.
                 Improve connectivity and streamline workflows. Implement data-driven strategies for better customer experiences. Enable smarter operations with IoT-enabled devices and platforms.`
      },
      {
        name: "Web Development",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/04-1.png",
        content:`Front-End Development Develop user-friendly, visually appealing websites.
                Technologies: HTML, Bootstrap, AngularJS, ReactJS, WordPress Focused on responsiveness, accessibility, and SEO optimization. Back-End Development Create secure, scalable, and reliable systems for your website.
                Technologies: NodeJS, Python, PHP Laravel, Dotnet Core, Java. Built for handling large traffic and data loads seamlessly.`
      },
      {
        name: "Mobile App Development",
        url: "https://nexonweb.com/wp-content/uploads/2025/03/05-1.png",
        content:`React Native Development- Deliver cross-platform mobile applications for Android and iOS using a single codebase.
                 Seamless and powerful user experience. High-quality, efficient, and responsive mobile apps.
                 Flutter Development- Create visually stunning and high-performing apps for both Android and iOS.
                 Engaging and interactive user interfaces. Apps built to perform seamlessly across platforms. Native Android & iOS Development Customized, feature-rich native applications for specific platforms.
                 High performance and scalability. Designed to leverage platform-specific capabilities.`
      }
    ];
  
    return (
      <div>
        {/* Hero Section */}
        <div
          className="min-h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center bg-black/60 h-full w-full"
          style={{
            backgroundImage: `url(${images[0].url})`
          }}
        >
          <div className="flex items-center justify-center flex-col h-auto bg-black/60 w-[100%] " style={{height:"400px"}}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{images[0].name}</h2>
            <p className="text-[16px] md:text-[14px] max-w-2xl ">
             {images[0].content}
            </p>
          </div>
        </div>
  
        {/* Other Sections */}
        <div className="py-12 space-y-16">
          {images.slice(1).map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
            
            <div className=" md:text-left md:w-[70%] ">
                <h2 className="text-3xl font-semibold mb-4">{item.name}</h2>
                <p className="text-gray-600 text-lg">
                  {item.content}
                </p>
              </div>           
              <img
                src={item.url}
                alt={item.name}
                className="w-full md:w-[50%]  "
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  