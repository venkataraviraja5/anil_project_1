
import {
  PencilIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  SwatchIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

const designFeatures = [
  {
    title: 'User Research & Personas',
    icon: MagnifyingGlassCircleIcon,
    description:
      'Understand your audience through user interviews, personas, and behavior analysis to drive design decisions.',
  },
  {
    title: 'Wireframes & Prototyping',
    icon: PencilIcon,
    description:
      'Rapid low-to-high fidelity wireframes and interactive prototypes for layout clarity and testing.',
  },
  {
    title: 'Visual & Interaction Design',
    icon: SwatchIcon,
    description:
      'Create polished, modern interfaces that align with your brand and ensure intuitive interactions.',
  },
  {
    title: 'Mobile-First Design',
    icon: DevicePhoneMobileIcon,
    description:
      'Design responsive experiences that work seamlessly across all devices—mobile, tablet, and desktop.',
  },
  {
    title: 'Accessibility & Usability',
    icon: EyeIcon,
    description:
      'Incorporate WCAG standards and best usability practices to ensure your product is inclusive and easy to use.',
  },
  {
    title: 'User Testing & Feedback',
    icon: CursorArrowRaysIcon,
    description:
      'Conduct usability testing and iterative improvements based on real user feedback.',
  },
];

export default function UIUXDesignPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">UI/UX Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            User-centered design solutions that enhance usability and create memorable digital experiences for your customers.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Design That Drives Engagement</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine research, strategy, and aesthetics to craft interfaces that not only look great but also guide users effortlessly. Our UI/UX
            design process focuses on clarity, consistency, and conversion—delivering experiences your users will love.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our UI/UX Capabilities</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {designFeatures.map((feature, idx) => (
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
