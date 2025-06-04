
import {
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ArrowPathIcon,
  CloudArrowDownIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const mobileFeatures = [
  {
    title: 'Native iOS & Android Apps',
    icon: DevicePhoneMobileIcon,
    description:
      'Custom mobile applications built specifically for iOS (Swift) and Android (Kotlin) to ensure high performance and platform compliance.',
  },
  {
    title: 'Cross-Platform Development',
    icon: ArrowPathIcon,
    description:
      'Leverage frameworks like React Native and Flutter to build apps for both platforms with a single codebase, reducing cost and time.',
  },
  {
    title: 'Offline Functionality',
    icon: CloudArrowDownIcon,
    description:
      'Ensure your app works even without internet access, using intelligent caching and local data sync strategies.',
  },
  {
    title: 'Scalable Backend Integration',
    icon: CpuChipIcon,
    description:
      'Connect your app with scalable APIs, databases, and third-party services for real-time performance and dynamic content.',
  },
  {
    title: 'Custom UI/UX Design',
    icon: Cog6ToothIcon,
    description:
      'Craft intuitive user experiences with custom-designed interfaces tailored for mobile interaction patterns.',
  },
  {
    title: 'Security & App Store Compliance',
    icon: ShieldCheckIcon,
    description:
      'We build secure apps that follow App Store and Google Play guidelines, ensuring smooth approval and user data protection.',
  },
];

export default function MobileAppDevelopment() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android platforms.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Powering Your App Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From sleek consumer apps to enterprise-grade mobile solutions, we design and develop mobile applications that are fast, intuitive, and built
            for growth. Our process ensures seamless functionality across platforms with a focus on user experience, performance, and scalability.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Mobile Development Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {mobileFeatures.map((feature, idx) => (
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
