import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks.png';
import { FaLock, FaBell, FaBolt, FaDesktop, FaChartBar, FaShieldAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Digital Lock Controller for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                EMI Devices
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your Buy Now Pay Later business with NexPay's Digital Lock Controller (DLC). 
              Remotely lock mobile and tablet devices when EMI payments are missed.
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexPay DLC?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Protect your Buy Now Pay Later business with advanced device locking technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLock className="text-5xl text-cyan-400" />,
                title: 'Remote Lock / Unlock',
                description: 'Trigger locks and unlocks instantly from the cloud dashboard or via API. No manual intervention — seconds from click to action.'
              },
              {
                icon: <FaBell className="text-5xl text-cyan-400" />,
                title: 'Smart Payment Reminders',
                description: 'AI-driven reminder engine across SMS, WhatsApp and voice calls. Configurable cadence before and after EMI due dates.'
              },
              {
                icon: <FaBolt className="text-5xl text-cyan-400" />,
                title: 'Unified API Integration',
                description: 'One API endpoint for UPI AutoPay + eNACH/ECS collection combined with device locking. Single integration, end-to-end control.'
              },
              {
                icon: <FaDesktop className="text-5xl text-cyan-400" />,
                title: 'Cloud-Based Dashboard',
                description: 'Manage every enrolled device across all locations from one web portal. Real-time device status, lock history, and payment events.'
              },
              {
                icon: <FaChartBar className="text-5xl text-cyan-400" />,
                title: 'MIS & Analytics',
                description: 'Live tracking of payments, device status, collection rates and delinquency. Export-ready reports for your finance and risk teams.'
              },
              {
                icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
                title: 'Google Policy Compliant',
                description: 'Built to Google\'s Device Lock Controller policy. Fully compliant with Android Play Protect standards across all major OEMs.'
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
              { number: '50K+', label: 'Devices Under Lock Control' },
              { number: '98%', label: 'Payment Recovery Rate' },
              { number: '500+', label: 'BNPL Businesses Protected' },
              { number: '85%', label: 'Reduction in Payment Defaults' }
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
      {/* <section className="py-20 bg-gray-900"> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get started with NexPay in three simple steps
            </p>
          </div> */}

          <section class="steps-section">
  <div class="container">
    {/* <h2 class="steps-title">
      Four steps.<br /> */}
    <h2 class="steps-title">How It Works<br />
      <span>Just four steps</span>
    </h2>

    <p class="steps-subtitle">
      From device sale to lock enforcement — the entire lifecycle managed in one platform.
    </p>

    <div class="steps-grid">
      
      <div class="step-card">
        <div class="step-number">01</div>
        <h3>Customer Selects Device</h3>
        <p>Customer picks a smartphone and opts into an EMI or BNPL plan at your store.</p>
      </div>

      <div class="step-card">
        <div class="step-number">02</div>
        <h3>Device Activated</h3>
        <p>Device auto-registers with OEM-level locking software pre-installed.</p>
      </div>

      <div class="step-card">
        <div class="step-number">03</div>
        <h3>Smart Reminders</h3>
        <p>Automated reminders via SMS, WhatsApp & calls before and after due dates.</p>
      </div>

      <div class="step-card">
        <div class="step-number">04</div>
        <h3>Lock / Unlock</h3>
        <p>Missed payment? Device locks instantly. Paid? Unlock happens in seconds.</p>
      </div>

    </div>
  </div>
</section>

          {/* <img
            src={HowItWorks}
            alt="How It Works"
            className="w-full rounded-lg shadow-lg"
          /> */}

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
        {/* </div>
      </section> */}

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
