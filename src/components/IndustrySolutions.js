// components/IndustrySolutions.js
import { FaHospital, FaMoneyBillWave, FaTruck, FaGraduationCap, FaHotel, FaShoppingCart, FaIndustry, FaBuilding, FaUtensils, FaBus, FaRunning } from 'react-icons/fa';

export default function IndustrySolutions() {
  const industries = [
    { name: "Healthcare", icon: <FaHospital className="w-6 h-6" /> },
    { name: "Fintech", icon: <FaMoneyBillWave className="w-6 h-6" /> },
    { name: "Logistics", icon: <FaTruck className="w-6 h-6" /> },
    { name: "Education", icon: <FaGraduationCap className="w-6 h-6" /> },
    { name: "Travel & Hospitality", icon: <FaHotel className="w-6 h-6" /> },
    { name: "Retail", icon: <FaShoppingCart className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <FaIndustry className="w-6 h-6" /> },
    { name: "Real Estate", icon: <FaBuilding className="w-6 h-6" /> },
    { name: "Restaurants", icon: <FaUtensils className="w-6 h-6" /> },
    { name: "Transportation", icon: <FaBus className="w-6 h-6" /> },
    { name: "Sports & Entertainment", icon: <FaRunning className="w-6 h-6" /> },
    { name: "Software & Tech", icon: <FaIndustry className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Custom Software Solutions for Every Industry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We pride ourselves on creating custom-made software that aligns perfectly with the unique challenges faced by businesses in different sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                {industry.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}