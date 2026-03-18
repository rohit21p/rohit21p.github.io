import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks.png';
import { FaMobileAlt, FaShieldAlt, FaChartLine, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Smart Financing for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empower your business with NexPay's innovative device financing solutions. 
              Control EMI devices, reduce defaults, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexPay?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We provide comprehensive financing solutions tailored for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="text-5xl text-cyan-400" />,
                title: 'Device Control',
                description: 'Advanced remote device management and control features to protect your investment'
              },
              {
                icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
                title: 'Tamper-Proof Device Security',
                description: 'Block factory resets and bypass attempts completely. Devices remain locked until dues are cleared.'
              },
              {
                icon: <FaChartLine className="text-5xl text-cyan-400" />,
                title: 'Business Growth',
                description: 'Scale your business faster with flexible financing options and analytics'
              },
              {
                icon: <FaUsers className="text-5xl text-cyan-400" />,
                title: 'Always-On Customer Support',
                description: '24/7 dedicated support team to assist you and your customers'
              },
              {
                icon: <FaClock className="text-5xl text-cyan-400" />,
                title: 'Instant Device Onboarding',
                description: 'Add new devices in seconds with a simple QR scan. Manage everything from one clean dashboard.'
              },
              {
                icon: <FaCheckCircle className="text-5xl text-cyan-400" />,
                title: 'Automated Payment Nudges',
                description: 'Send smart, timely reminders that feel natural to customers.Reduce missed EMIs and improve repayment effortlessly.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Devices' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '500+', label: 'Partner Retailers' },
              { number: '76%', label: 'Drop in late payments' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get started with NexPay in three simple steps
            </p>
          </div>

          <img
            src={HowItWorks}
            alt="How It Works"
            className="w-full rounded-lg shadow-lg"
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Apply Online',
                description: 'Fill out our simple application form with basic business information'
              },
              {
                step: '02',
                title: 'Get Approved',
                description: 'Receive instant approval and access to your financing dashboard'
              },
              {
                step: '03',
                title: 'Start Selling',
                description: 'Offer flexible payment options to your customers and grow your business'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-cyan-400 text-4xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using NexPay to grow faster
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Apply Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  );
}
