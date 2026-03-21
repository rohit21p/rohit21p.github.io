import { FaMobileAlt, FaLaptop, FaTabletAlt, FaHeadphones, FaGamepad, FaCamera, FaShieldAlt, FaCog, FaChartBar } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DLC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete Digital Lock Controller solutions for BNPL businesses
            </p>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Supported Devices</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our DLC technology works seamlessly across all major mobile and tablet devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="text-5xl text-cyan-400" />,
                title: 'Android Smartphones',
                description: 'All major Android brands - Samsung, Xiaomi, Oppo, Vivo, Realme, OnePlus, and more'
              },
              {
                icon: <FaTabletAlt className="text-5xl text-cyan-400" />,
                title: 'Android Tablets',
                description: 'Samsung Galaxy Tab, Lenovo, and other Android tablets with full lock control'
              },
              {
                icon: <FaMobileAlt className="text-5xl text-cyan-400" />,
                title: 'Budget Smartphones',
                description: 'Entry-level and mid-range devices perfect for BNPL programs'
              },
              {
                icon: <FaShieldAlt className="text-5xl text-cyan-400" />,
                title: 'OEM Compliant',
                description: 'Works with all major OEMs following Google Play Protect standards'
              },
              {
                icon: <FaTabletAlt className="text-5xl text-cyan-400" />,
                title: '4G & 5G Devices',
                description: 'Full support for both 4G and 5G enabled smartphones and tablets'
              },
              {
                icon: <FaMobileAlt className="text-5xl text-cyan-400" />,
                title: 'Dual SIM Support',
                description: 'Lock control works regardless of SIM card changes or swaps'
              }
            ].map((device, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700"
              >
                <div className="mb-4">{device.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{device.title}</h3>
                <p className="text-gray-400">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core DLC Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to secure your BNPL business and recover payments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Device Lock Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Instant remote lock/unlock via dashboard or API</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Tamper-proof security - blocks factory resets</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>SIM change detection and alerts</span>
                </li> */}
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Google Play Protect compliant</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCog className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Payment Recovery</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Smart payment reminders (SMS, WhatsApp, Voice)</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>UPI AutoPay + eNACH/ECS integration</span>
                </li> */}
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated lock triggers on missed EMIs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Instant unlock upon payment receipt</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartBar className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time device status monitoring</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Payment collection and delinquency tracking</span>
                </li> */}
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Lock/unlock history and audit logs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Export-ready MIS reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional DLC Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enhanced features to maximize your payment recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'White Label Solution',
                description: 'Fully customizable solution as per your brand identity and requirements'
              },
              {
                title: 'Unified API Integration',
                description: 'Single API for device locking + unlocking + tracking'
              },
              {
                title: 'Device Enrollment Support',
                description: '24/7 support for device onboarding and troubleshooting'
              },
              {
                title: 'Compliance & Legal',
                description: 'Google policy compliance documentation and legal framework support'
              },
              {
                title: 'Custom Lock Rules',
                description: 'Configure lock triggers based on your payment schedules and grace periods'
              },
              {
                title: 'Multi-Location Management',
                description: 'Manage devices across multiple retail locations from one central dashboard'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your BNPL Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start protecting your devices and recovering payments with NexPay DLC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Request Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
