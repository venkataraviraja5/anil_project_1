
import {
  ShoppingCartIcon,
  CreditCardIcon,
  PresentationChartBarIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const ecommerceFeatures = [
  {
    title: 'Custom Storefront Design',
    icon: ShoppingCartIcon,
    description:
      'Create visually engaging and user-friendly storefronts that reflect your brand identity and attract customers.',
  },
  {
    title: 'Secure Payment Integration',
    icon: CreditCardIcon,
    description:
      'Integrate trusted payment gateways for smooth and secure transactions, supporting multiple payment methods.',
  },
  {
    title: 'Mobile-Optimized Experience',
    icon: DevicePhoneMobileIcon,
    description:
      'Ensure your online store delivers seamless experiences on any device to capture sales from all users.',
  },
  {
    title: 'Performance Optimization',
    icon: PresentationChartBarIcon,
    description:
      'Optimize site speed, loading times, and scalability to handle traffic spikes and improve conversion rates.',
  },
  {
    title: 'Backend & Inventory Management',
    icon: Cog6ToothIcon,
    description:
      'Robust backend solutions to manage products, orders, stock levels, and customer data efficiently.',
  },
  {
    title: 'Security & Compliance',
    icon: ShieldCheckIcon,
    description:
      'Implement strong security measures and comply with standards like PCI-DSS to protect your customers and business.',
  },
];

export default function ECommerceSolutions() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">E-Commerce Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            End-to-end e-commerce development, including storefront design, payment integration, and performance optimization to drive online sales.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Complete Solutions for Online Success</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From designing your storefront to managing payments and optimizing performance, we provide comprehensive e-commerce services
            that help you grow sales and build loyal customers.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our E-Commerce Capabilities</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {ecommerceFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-slate-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
