
import {
  CpuChipIcon,
  BrainIcon,
  ArrowPathIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

// Since BrainIcon isn't in Heroicons, let's replace it with a related icon:
import { ChipIcon } from '@heroicons/react/24/outline';

const aiFeatures = [
  {
    title: 'Custom AI Models',
    icon: CpuChipIcon,
    description:
      'Develop tailored AI and machine learning models designed specifically for your business needs.',
  },
  {
    title: 'Data Automation',
    icon: ArrowPathIcon,
    description:
      'Automate repetitive workflows to increase efficiency and reduce manual effort using AI-driven processes.',
  },
  {
    title: 'Predictive Analytics',
    icon: ChartBarSquareIcon,
    description:
      'Leverage data insights and predictive models to make smarter, data-driven decisions.',
  },
  {
    title: 'Natural Language Processing',
    icon: ChipIcon,
    description:
      'Integrate advanced NLP capabilities to improve customer interactions, chatbots, and content analysis.',
  },
  {
    title: 'AI-Powered Recommendations',
    icon: BoltIcon,
    description:
      'Deliver personalized experiences with recommendation engines that adapt to user behavior.',
  },
  {
    title: 'Security & Ethics',
    icon: ShieldCheckIcon,
    description:
      'Ensure your AI solutions are secure, transparent, and aligned with ethical AI guidelines.',
  },
];

export default function AIDevelopment() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Custom AI and machine learning solutions to automate workflows, enhance decision-making, and deliver intelligent customer experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Intelligent Solutions for Modern Business</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our AI development services focus on building innovative systems that transform your data into actionable insights,
            streamline operations, and personalize customer interactions. Stay ahead of the competition with scalable, intelligent solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">What We Provide</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature, idx) => (
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
