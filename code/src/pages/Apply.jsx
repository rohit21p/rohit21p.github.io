import { useState } from 'react';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export default function Apply() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: '',
    monthlyVolume: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center border border-gray-700">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-5xl text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-gray-300 text-lg mb-8">
            Thank you for your interest in NexPay. Our team will review your application and 
            get back to you within 24-48 hours.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
            <p className="text-gray-400 mb-2">
              We've sent a confirmation email to <strong className="text-cyan-400">{formData.email}</strong>
            </p>
            <p className="text-gray-400">
              Application ID: <strong className="text-white">NP-{Date.now().toString().slice(-8)}</strong>
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Partnership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses already using NexPay to grow faster
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Business Information</h2>
              <p className="text-gray-400">
                Fill out the form below and our team will get back to you within 24-48 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-white font-semibold mb-2">
                  Business Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaBuilding className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>

              {/* Contact Name */}
              <div>
                <label htmlFor="contactName" className="block text-white font-semibold mb-2">
                  Contact Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="+91 9109315673"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-white font-semibold mb-2">
                  Business Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Street address"
                  />
                </div>
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-white font-semibold mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-white font-semibold mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-white font-semibold mb-2">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="12345"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-white font-semibold mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="online">Online Store</option>
                  <option value="distributor">Distributor</option>
                  <option value="chain">Retail Chain</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Monthly Volume */}
              <div>
                <label htmlFor="monthlyVolume" className="block text-white font-semibold mb-2">
                  Expected Monthly Device Volume *
                </label>
                <select
                  id="monthlyVolume"
                  name="monthlyVolume"
                  required
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="">Select volume range</option>
                  <option value="1-10">1-10 devices</option>
                  <option value="11-50">11-50 devices</option>
                  <option value="51-100">51-100 devices</option>
                  <option value="100+">100+ devices</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell us more about your business and financing needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
                <p className="text-gray-400 text-sm text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/terms" className="text-cyan-400 hover:underline">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Happens Next?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Application Review',
                description: 'Our team reviews your application within 24-48 hours'
              },
              {
                step: '2',
                title: 'Approval & Setup',
                description: 'Get approved and we\'ll help you set up your account'
              },
              {
                step: '3',
                title: 'Start Financing',
                description: 'Begin offering flexible payment options to your customers'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl text-center">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
