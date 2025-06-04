
import {
  CloudIcon,
  ServerStackIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const cloudFeatures = [
  {
    title: 'Cloud Infrastructure Setup',
    icon: CloudIcon,
    description:
      'Design and deploy secure, scalable cloud environments on AWS, Azure, or Google Cloud tailored to your needs.',
  },
  {
    title: 'Migration Services',
    icon: ArrowPathIcon,
    description:
      'Seamlessly migrate your existing applications and data to the cloud with minimal downtime and risk.',
  },
  {
    title: 'Cloud-Native Application Development',
    icon: ServerStackIcon,
    description:
      'Build and optimize applications specifically designed to leverage cloud scalability and services.',
  },
  {
    title: 'Security & Compliance',
    icon: ShieldCheckIcon,
    description:
      'Implement cloud security best practices and compliance standards to protect your data and users.',
  },
  {
    title: 'Cost Optimization',
    icon: ChartBarSquareIcon,
    description:
      'Analyze and optimize your cloud spend to maximize ROI without sacrificing performance.',
  },
  {
    title: 'Managed Cloud Services',
    icon: Cog6ToothIcon,
    description:
      'Ongoing cloud management, monitoring, and support to ensure peak performance and reliability.',
  },
];

export default function CloudSolutions() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Secure, scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Empower Your Business with the Cloud</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Embrace the cloud to unlock agility, scalability, and cost savings. We provide comprehensive cloud solutions—from initial assessment
            and migration to ongoing management—that help you leverage cloud technologies with confidence.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Cloud Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cloudFeatures.map((feature, idx) => (
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
