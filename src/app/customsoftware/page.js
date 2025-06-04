import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  SparklesIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Custom Web & Mobile Apps',
    icon: CodeBracketIcon,
    description:
      'Responsive web portals, native mobile apps, or hybrid solutions built to match your unique business needs.',
  },
  {
    title: 'Enterprise Integration',
    icon: ArrowsRightLeftIcon,
    description:
      'Integrate seamlessly with existing tools, CRMs, ERPs, and third-party platforms for maximum efficiency.',
  },
  {
    title: 'Cloud-Ready Architecture',
    icon: CloudIcon,
    description:
      'Deploy scalable, high-performance applications on AWS, Azure, or Google Cloud.',
  },
  {
    title: 'Security by Design',
    icon: ShieldCheckIcon,
    description:
      'Secure by default with encryption, role-based access, and modern data protection standards.',
  },
  {
    title: 'Agile Development',
    icon: SparklesIcon,
    description:
      'Rapid, collaborative development using agile workflows, sprint planning, and continuous delivery.',
  },
  {
    title: 'Ongoing Support',
    icon: LifebuoyIcon,
    description:
      'Long-term partnership with post-launch monitoring, updates, and tech support.',
  },
];

export default function CustomSoftwareDevelopment() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom Software Development
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tailored solutions to streamline your operations with scalable, secure, and modern applications.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Built for Your Business</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            No two businesses are the same—so your software shouldn’t be either. We build custom software solutions aligned with your unique needs,
            enhancing efficiency, improving workflows, and enabling you to scale faster.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            What We Offer
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    {feature.title}
                  </h3>
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
