import {
  GlobeAltIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const appTypes = [
  {
    title: 'E-commerce Platforms',
    icon: ShoppingCartIcon,
    description:
      'Online storefronts, secure checkouts, product management, and responsive design tailored for online sales.',
  },
  {
    title: 'Business Dashboards',
    icon: ChartBarIcon,
    description:
      'Real-time analytics platforms with visual reports to help you make smarter, data-driven decisions.',
  },
  {
    title: 'Customer Portals',
    icon: UserGroupIcon,
    description:
      'Self-service web apps where customers can log in, manage accounts, access documents, and more.',
  },
  {
    title: 'SaaS Applications',
    icon: CpuChipIcon,
    description:
      'Subscription-based, scalable web apps designed for cloud deployment with user authentication and multi-tenancy.',
  },
  {
    title: 'Admin & Internal Tools',
    icon: LockClosedIcon,
    description:
      'Secure backend interfaces for managing your operations, roles, permissions, and data workflows.',
  },
  {
    title: 'Marketing Websites',
    icon: GlobeAltIcon,
    description:
      'Fast-loading, SEO-optimized content websites and landing pages built to drive conversions.',
  },
];

export default function WebApplicationDevelopment() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Application Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            High-performance web applications with intuitive interfaces that drive engagement and conversions for your business.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Custom Web Apps?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A powerful web application goes beyond just functionality — it's built to perform, engage, and scale. We craft custom web apps that
            streamline operations, deliver seamless user experiences, and support your business goals with precision and performance.
          </p>
        </div>
      </section>

      {/* Types of Web Apps Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Types of Web Applications We Build</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {appTypes.map((app, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <app.icon className="h-8 w-8 text-slate-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{app.title}</h3>
                </div>
                <p className="text-gray-700">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
