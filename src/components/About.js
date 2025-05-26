// pages/about.js
import Head from 'next/head';
import Image from 'next/image';
import about_us from "../app/assets/images/about_us.jpeg"

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Your Company</title>
        <meta name="description" content="Learn about our company's mission and values" />
      </Head>

      {/* Hero Section */}
      {/* <section className="relative bg-gray-900 text-white py-20 md:py-32">
        <div 
          className="min-h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center bg-black/60 h-full w-full"
          
        >
         
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-indigo-400">Story</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Dedicated to excellence and innovation in everything we do.
            </p>
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={about_us} // Replace with your image
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-indigo-600">Purpose</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We exist to create meaningful solutions that make a difference in people's lives. 
                Our approach combines deep expertise with a commitment to quality and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Customer-first approach in all we do</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Uncompromising quality standards</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Continuous improvement mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-indigo-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and actions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We do what's right, even when no one is watching. Honesty and transparency form the foundation of all our relationships.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace change and continuously seek better ways to serve our customers and improve our processes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership to achieve exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-4xl sm:text-5xl font-bold mb-2">2010</p>
              <p className="text-indigo-200">Founded</p>
            </div>
            <div className="p-4">
              <p className="text-4xl sm:text-5xl font-bold mb-2">500+</p>
              <p className="text-indigo-200">Projects Completed</p>
            </div>
            <div className="p-4">
              <p className="text-4xl sm:text-5xl font-bold mb-2">100%</p>
              <p className="text-indigo-200">Client Satisfaction</p>
            </div>
            <div className="p-4">
              <p className="text-4xl sm:text-5xl font-bold mb-2">24/7</p>
              <p className="text-indigo-200">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Want to learn more?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We'd be happy to discuss how we can help with your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}