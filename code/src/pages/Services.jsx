import { FaMobileAlt, FaLaptop, FaTabletAlt, FaHeadphones, FaGamepad, FaCamera, FaShieldAlt, FaCog, FaChartBar } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financing solutions for all your device needs
            </p>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Devices We Finance</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From smartphones to laptops, we offer flexible financing for a wide range of devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="text-5xl text-cyan-400" />,
                title: 'Smartphones',
                description: 'Latest models from all major brands including Apple, Samsung, Google, and more'
              },
              {
                icon: <FaLaptop className="text-5xl text-cyan-400" />,
                title: 'Laptops',
                description: 'High-performance laptops for work, gaming, and creative professionals'
              },
              {
                icon: <FaTabletAlt className="text-5xl text-cyan-400" />,
                title: 'Tablets',
                description: 'iPads, Android tablets, and 2-in-1 devices for productivity on the go'
              },
              {
                icon: <FaHeadphones className="text-5xl text-cyan-400" />,
                title: 'Audio Devices',
                description: 'Premium headphones, earbuds, and sound systems'
              },
              {
                icon: <FaGamepad className="text-5xl text-cyan-400" />,
                title: 'Gaming Consoles',
                description: 'PlayStation, Xbox, Nintendo Switch, and gaming accessories'
              },
              {
                icon: <FaCamera className="text-5xl text-cyan-400" />,
                title: 'Cameras',
                description: 'Professional cameras, drones, and photography equipment'
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
            <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to offer seamless financing to your customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Device Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Remote device locking and unlocking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time device tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated payment reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Theft and fraud protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaCog className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Payment Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Flexible EMI plans (3-24 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Multiple payment methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Automated payment processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Early payment discounts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl shadow-2xl text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartBar className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Analytics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time sales dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Payment collection reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Customer behavior insights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Performance metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Financing Plans</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that works best for your customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Plan',
                duration: '3-6 Months',
                rate: '0% Interest',
                features: [
                  'No down payment required',
                  'Quick approval process',
                  'Basic device protection',
                  'Email support'
                ]
              },
              {
                name: 'Standard Plan',
                duration: '6-12 Months',
                rate: 'Low Interest',
                features: [
                  'Flexible down payment',
                  'Priority approval',
                  'Advanced device protection',
                  'Phone & email support',
                  'Payment flexibility'
                ],
                popular: true
              },
              {
                name: 'Premium Plan',
                duration: '12-24 Months',
                rate: 'Competitive Rates',
                features: [
                  'Minimal down payment',
                  'Instant approval',
                  'Complete device protection',
                  '24/7 priority support',
                  'Maximum flexibility',
                  'Insurance included'
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-cyan-400' : 'border-gray-700'
                } hover:border-cyan-400 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-cyan-400 text-lg font-semibold mb-1">{plan.duration}</div>
                <div className="text-gray-400 mb-6">{plan.rate}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Extra features to enhance your financing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'White Label Solution',
                description: 'Customize the platform with your brand identity and colors'
              },
              {
                title: 'API Integration',
                description: 'Seamlessly integrate with your existing systems and workflows'
              },
              {
                title: 'Training & Onboarding',
                description: 'Comprehensive training for your team to maximize platform usage'
              },
              {
                title: 'Marketing Support',
                description: 'Marketing materials and campaigns to promote financing options'
              },
              {
                title: 'Credit Assessment',
                description: 'Advanced AI-powered credit scoring and risk assessment'
              },
              {
                title: 'Multi-Currency Support',
                description: 'Accept payments in multiple currencies for global operations'
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn more about our services and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Schedule a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
