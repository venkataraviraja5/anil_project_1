
import {
  CloudArrowUpIcon,
  CommandLineIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const devopsFeatures = [
  {
    title: 'CI/CD Pipelines',
    icon: CloudArrowUpIcon,
    description:
      'Set up continuous integration and deployment pipelines to automate code testing, building, and releasing.',
  },
  {
    title: 'Infrastructure as Code',
    icon: CommandLineIcon,
    description:
      'Define and manage your infrastructure using tools like Terraform, AWS CloudFormation, and Pulumi.',
  },
  {
    title: 'Containerization & Orchestration',
    icon: ServerStackIcon,
    description:
      'Docker and Kubernetes setups to ensure consistent environments, scalability, and zero-downtime deployments.',
  },
  {
    title: 'Monitoring & Logging',
    icon: WrenchScrewdriverIcon,
    description:
      'Integrated tools like Prometheus, Grafana, ELK Stack, and Datadog for real-time visibility and performance monitoring.',
  },
  {
    title: 'Security & Compliance',
    icon: ShieldCheckIcon,
    description:
      'Implement DevSecOps practices including vulnerability scans, access control, and policy automation.',
  },
  {
    title: 'Faster Release Cycles',
    icon: BoltIcon,
    description:
      'Automate testing and deployments to shorten feedback loops and accelerate time-to-market.',
  },
];

export default function DevOpsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps & CI/CD</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Automated deployment pipelines and infrastructure as code to accelerate your development cycles and improve reliability.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Optimize Your Delivery Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With DevOps and CI/CD practices, you can release software faster, with fewer bugs, and more confidence. We help you build resilient infrastructure,
            automate manual processes, and establish a development pipeline that supports agility and growth.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">What We Offer</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {devopsFeatures.map((feature, idx) => (
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
