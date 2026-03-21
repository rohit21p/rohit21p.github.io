import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    "category": "General",
    "questions": [
      {
        "question": "What is NexPay Digital Lock Controller (DLC)?",
        "answer": "NexPay DLC is a Google-compliant device lock control system for Buy Now Pay Later (BNPL) businesses. It allows retailers to remotely restrict access to financed devices when customers miss payments, helping improve recovery and reduce defaults."
      },
      {
        "question": "How does NexPay DLC work?",
        "answer": "NexPay integrates directly with the Android OS, so no app installation is required. If a payment is missed, the retailer can lock the device via dashboard or API and unlock it after verifying payment."
      },
      {
        "question": "Who can use NexPay DLC?",
        "answer": "NexPay DLC is designed for BNPL businesses, mobile retailers, and device financing companies offering EMI-based purchases at any scale."
      }
    ]
  },
  {
    "category": "For BNPL Businesses",
    "questions": [
      {
        "question": "How do I get started with NexPay DLC?",
        "answer": "Simply contact our team through the website or call +91 9109315673. We will schedule a demo, understand your needs, and help integrate DLC into your existing workflow. Setup typically takes 2–3 days."
      },
      {
        "question": "What are the pricing and fees?",
        "answer": "Pricing depends on the number of devices and features required. We offer transparent, volume-based pricing with no hidden charges."
      },
      {
        "question": "How quickly can devices be locked?",
        "answer": "Device locking happens instantly within seconds of triggering the command from the dashboard or API."
      },
      {
        "question": "How does unlocking work?",
        "answer": "Unlocking is performed manually via dashboard or the API by retailer after confirming payment with the customer."
      },
      {
        "question": "Does NexPay handle payment collection or reminders?",
        "answer": "Nexpay only handles payment reminders. It does not handle payments collections. Payment collections are managed directly between the retailer and the customer."
      },
      {
        "question": "What happens if a customer defaults on payment?",
        "answer": "If a customer misses a payment, the retailer can restrict access to the device using NexPay DLC until the dues are cleared."
      }
    ]
  },
  {
    "category": "For Customers",
    "questions": [
      {
        "question": "Why is my device locked?",
        "answer": "Your device has been restricted by your retailer due to a missed EMI payment. Please contact them to resolve the issue."
      },
      {
        "question": "How do I unlock my device?",
        "answer": "Once you clear your dues with the retailer, they will unlock your device manually."
      },
      {
        "question": "Will my data be deleted when the device is locked?",
        "answer": "No. Your data remains completely safe. The lock only restricts access to the device, not your personal files."
      },
      {
        "question": "What payment methods can I use to unlock my device?",
        "answer": "Payment methods are decided by your retailer. NexPay is not involved in the payment process."
      }
    ]
  },
  {
    "category": "Technical",
    "questions": [
      {
        "question": "How does the device locking technology work?",
        "answer": "NexPay integrates at the Android OS level using Google-compliant mechanisms. When locked, the device remains restricted even after factory reset or SIM change. Only emergency calls and basic settings are accessible."
      },
      {
        "question": "Is NexPay DLC Google Play Protect compliant?",
        "answer": "Yes. NexPay DLC follows Google’s Device Lock Controller policies and Android compliance standards."
      },
      {
        "question": "Can I integrate NexPay DLC with my existing systems?",
        "answer": "Yes. NexPay provides APIs for seamless integration with your internal systems and workflows."
      },
      {
        "question": "What devices are compatible with NexPay DLC?",
        "answer": "NexPay supports most Android smartphones and tablets across major brands. Compatibility may vary depending on device model and OS version."
      }
    ]
  },
  {
    "category": "Support & Security",
    "questions": [
      {
        "question": "What kind of support do you offer?",
        "answer": "We provide dedicated support, onboarding assistance, and technical guidance for all clients."
      },
      {
        "question": "How do I contact support?",
        "answer": "You can reach our support team at support@nexpay.com, call +91 9109315673, or use the live chat feature on our website."
      },
      {
        "question": "Is customer data secure with NexPay DLC?",
        "answer": "Yes. NexPay does not access or manage user data. We only control device accessibility."
      },
      {
        "question": "Can customers bypass the device lock?",
        "answer": "No. The device remains restricted even after factory reset or SIM change and can only be unlocked by the retailer through the authorized system."
      }
    ]
  }
];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about NexPay Digital Lock Controller
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-2 h-8 rounded-full mr-4"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-white pr-8">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0 text-cyan-400">
                          {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
