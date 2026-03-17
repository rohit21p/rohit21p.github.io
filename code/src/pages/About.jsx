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
              Revolutionizing device financing with innovative technology and customer-first solutions
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
                  Founded in 2020, NexPay emerged from a simple observation: millions of people 
                  wanted access to the latest mobile devices and electronics, but traditional 
                  financing options were either unavailable or too restrictive.
                </p>
                <p>
                  We set out to change that by creating a platform that empowers retailers to 
                  offer flexible financing options while protecting their investments through 
                  smart device management technology.
                </p>
                <p>
                  Today, we're proud to serve over 500 partner retailers and have helped finance 
                  more than 50,000 devices, making technology accessible to everyone.
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
                To democratize access to technology by providing innovative financing solutions 
                that benefit both retailers and consumers, while maintaining the highest standards 
                of security and service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To become the leading device financing platform globally, recognized for our 
                innovation, reliability, and commitment to making technology accessible to everyone, 
                everywhere.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-400">
                Integrity, innovation, and customer success drive everything we do. We believe in 
                transparent practices, continuous improvement, and building lasting relationships 
                with our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're more than just a financing platform - we're your growth partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Advanced Technology',
                description: 'State-of-the-art device management and payment processing systems'
              },
              {
                title: 'Risk Management',
                description: 'Comprehensive tools to minimize defaults and protect your business'
              },
              {
                title: 'Flexible Solutions',
                description: 'Customizable financing options to meet diverse customer needs'
              },
              {
                title: 'Expert Support',
                description: 'Dedicated team available 24/7 to assist you and your customers'
              },
              {
                title: 'Fast Integration',
                description: 'Quick and easy setup process to get you started in no time'
              },
              {
                title: 'Competitive Rates',
                description: 'Industry-leading rates and transparent pricing with no hidden fees'
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
            We're a diverse team of finance experts, technologists, and customer service 
            professionals united by a common goal: making device financing simple, secure, 
            and accessible for everyone.
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-200 text-lg italic">
              "Our team brings together decades of experience in fintech, retail, and technology 
              to create solutions that truly make a difference in people's lives."
            </p>
            <p className="text-cyan-400 font-semibold mt-4">- NexPay Leadership Team</p>
          </div>
        </div>
      </section>
    </div>
  );
}
