import { FaRocket, FaEye, FaHeart, FaAward } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NexPay</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Securing Buy Now Pay Later businesses with Digital Lock Controller technology
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Founded in 2020, NexPay emerged from a critical challenge: Buy Now Pay Later businesses 
                  were losing millions due to payment defaults and had no effective way to secure their 
                  devices when customers stopped paying EMIs.
                </p>
                <p>
                  We developed the Digital Lock Controller (DLC) - a Google-compliant solution that allows 
                  BNPL businesses to remotely lock mobile and tablet devices when payments are missed, 
                  dramatically improving payment recovery rates.
                </p>
                <p>
                  Today, we protect over 500 BNPL businesses and have 50,000+ devices under lock control, 
                  helping businesses recover payments and reduce defaults by 85%.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-white text-center">
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">2020</div>
                  <div className="text-sm">Founded</div>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm">Partners</div>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-sm">Devices</div>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To protect Buy Now Pay Later businesses from payment defaults by providing the most 
                advanced Digital Lock Controller technology, ensuring secure device management and 
                maximizing payment recovery rates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To become the global standard for device lock control in the BNPL industry, 
                recognized for our Google-compliant technology, instant lock/unlock capabilities, 
                and industry-leading payment recovery rates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-400">
                Security, compliance, and business protection drive everything we do. We believe in 
                Google-compliant solutions, instant response times, and empowering BNPL businesses 
                to operate with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexPay DLC?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're more than just a lock controller - we're your payment recovery partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Google Policy Compliant',
                description: 'Fully compliant with Android Play Protect and OEM standards'
              },
              {
                title: 'Instant Lock/Unlock',
                description: 'Trigger device locks in seconds via dashboard or API'
              },
              {
                title: 'Cloud-Based Control',
                description: 'Manage all devices from one centralized web portal'
              },
              {
                title: '24/7 Monitoring',
                description: 'Real-time device status, payment tracking, and lock history'
              },
              {
                title: 'API Integration',
                description: 'Single API for device locking + unlocking + tracking'
              },
              {
                title: '85% Default Reduction',
                description: 'Proven track record of reducing payment defaults significantly'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <FaAward className="text-3xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We're a team of security experts, Android developers, and BNPL specialists 
            united by a common goal: protecting businesses from payment defaults through 
            cutting-edge device lock technology.
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-200 text-lg italic">
              "Our team combines deep expertise in Android security, payment systems, and BNPL 
              operations to deliver the most reliable Digital Lock Controller in the industry."
            </p>
            <p className="text-cyan-400 font-semibold mt-4">- NexPay Leadership Team</p>
          </div>
        </div>
      </section>
    </div>
  );
}
