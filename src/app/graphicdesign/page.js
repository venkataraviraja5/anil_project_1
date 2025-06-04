
import {
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  PresentationChartBarIcon,
  PencilSquareIcon,
  PhotoIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline';

const graphicDesignFeatures = [
  {
    title: 'Creative Branding',
    icon: PaintBrushIcon,
    description:
      'Develop a strong, memorable brand identity that resonates with your target audience and sets you apart.',
  },
  {
    title: 'UI/UX Design',
    icon: DevicePhoneMobileIcon,
    description:
      'Design intuitive and engaging user interfaces that provide seamless experiences across devices.',
  },
  {
    title: 'Marketing Assets',
    icon: PresentationChartBarIcon,
    description:
      'Create impactful marketing collateral, from digital ads to print materials, that effectively communicate your message.',
  },
  {
    title: 'Illustrations & Icons',
    icon: PencilSquareIcon,
    description:
      'Custom illustrations and iconography crafted to enhance your visual storytelling and brand uniqueness.',
  },
  {
    title: 'Photography & Imagery',
    icon: PhotoIcon,
    description:
      'Professional photo selection and editing to complement your brand and marketing campaigns.',
  },
  {
    title: 'Print & Digital Collateral',
    icon: RectangleStackIcon,
    description:
      'Design brochures, flyers, banners, and other materials optimized for both print and digital channels.',
  },
];

export default function GraphicDesign() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Graphic Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creative branding, UI/UX design, and marketing assets crafted to visually engage and communicate your brand effectively across all channels.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Visual Creativity that Speaks</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine creativity and strategy to produce visual designs that capture your brand essence and connect with your audience.
            From digital interfaces to print media, our designs drive engagement and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Design Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {graphicDesignFeatures.map((feature, idx) => (
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
