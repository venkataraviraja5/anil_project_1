import {
  CubeIcon,
  ShieldCheckIcon,
  LinkIcon,
  LockClosedIcon,
  SparklesIcon,
  ChipIcon,
} from '@heroicons/react/24/outline';

const blockchainFeatures = [
  {
    title: 'Decentralized App (dApp) Development',
    icon: CubeIcon,
    description:
      'Build scalable and secure decentralized applications on Ethereum, Solana, and other leading blockchain platforms.',
  },
  {
    title: 'Smart Contract Development',
    icon: LockClosedIcon,
    description:
      'Create and audit smart contracts that automate business logic with transparency and trust.',
  },
  {
    title: 'Cross-Chain Solutions',
    icon: LinkIcon,
    description:
      'Develop interoperable blockchain solutions that communicate across multiple chains for greater flexibility.',
  },
  {
    title: 'Security Audits & Best Practices',
    icon: ShieldCheckIcon,
    description:
      'Implement rigorous security audits and follow blockchain best practices to protect your assets and users.',
  },
  {
    title: 'Token Development & ICOs',
    icon: SparklesIcon,
    description:
      'Design and deploy custom tokens and assist with ICO/IDO processes for fundraising and community building.',
  },
  {
    title: 'Blockchain Consulting',
    icon: ChipIcon,
    description:
      'Get expert advice on blockchain strategy, platform selection, and integration tailored to your business goals.',
  },
];

export default function BlockchainDevelopment() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Decentralized app (dApp) and smart contract development on Ethereum, Solana, and other blockchain platforms for secure, transparent solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Secure and Transparent Blockchain Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Leverage blockchain technology to build applications that offer enhanced security, transparency, and decentralization.
            Our expertise spans multiple platforms, helping you create innovative solutions that transform industries.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">What We Offer</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blockchainFeatures.map((feature, idx) => (
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
