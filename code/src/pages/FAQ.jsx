import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is NexPay?',
          answer: 'NexPay is a comprehensive device financing platform that enables retailers to offer flexible payment plans to their customers. We provide device management, payment processing, and risk mitigation tools to help businesses grow while protecting their investments.'
        },
        {
          question: 'How does NexPay work?',
          answer: 'NexPay works in three simple steps: 1) Retailers apply and get approved for our platform, 2) They offer financing options to their customers at the point of sale, 3) We handle payment collection, device management, and provide analytics to help grow the business.'
        },
        {
          question: 'Who can use NexPay?',
          answer: 'NexPay is designed for retailers, distributors, and businesses that sell mobile devices, electronics, and other high-value items. Whether you\'re a small shop or a large chain, our platform scales to meet your needs.'
        }
      ]
    },
    {
      category: 'For Retailers',
      questions: [
        {
          question: 'How do I become a NexPay partner?',
          answer: 'Simply fill out our online application form with your business details. Our team will review your application and typically provide approval within 24-48 hours. Once approved, we\'ll help you set up your account and train your team.'
        },
        {
          question: 'What are the fees for retailers?',
          answer: 'We offer transparent, competitive pricing with no hidden fees. Our fee structure is based on transaction volume and the services you choose. Contact our sales team for a customized quote based on your business needs.'
        },
        {
          question: 'How quickly can I start offering financing?',
          answer: 'Once approved, you can start offering financing to your customers within 24 hours. We provide quick onboarding, training materials, and dedicated support to get you up and running fast.'
        },
        {
          question: 'What happens if a customer defaults on payment?',
          answer: 'Our platform includes built-in risk mitigation tools including remote device locking, automated payment reminders, and collection support. We work with you to minimize defaults and handle difficult situations professionally.'
        }
      ]
    },
    {
      category: 'For Customers',
      questions: [
        {
          question: 'What documents do I need to apply for financing?',
          answer: 'Customers typically need a valid ID, proof of income, and contact information. The exact requirements may vary based on the financing amount and plan selected. Our application process is quick and straightforward.'
        },
        {
          question: 'How long does approval take?',
          answer: 'Most applications are approved instantly. In some cases, additional verification may be required, which typically takes 1-2 business days. You\'ll be notified immediately of your approval status.'
        },
        {
          question: 'Can I pay off my device early?',
          answer: 'Yes! We encourage early payment and offer discounts for customers who pay off their devices ahead of schedule. There are no prepayment penalties.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept various payment methods including bank transfers, debit cards, credit cards, and digital wallets. Automatic payment options are also available for your convenience.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'How does device locking work?',
          answer: 'Our device management system can remotely lock devices if payments are missed. This is done through secure software that doesn\'t affect the device\'s data. Once payment is received, the device is unlocked immediately.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use bank-level encryption and comply with all major data protection regulations including GDPR and PCI DSS. Your data is stored securely and never shared with third parties without consent.'
        },
        {
          question: 'Can I integrate NexPay with my existing systems?',
          answer: 'Yes! We offer comprehensive API integration that works with most POS systems, inventory management software, and accounting platforms. Our technical team will assist with the integration process.'
        },
        {
          question: 'What devices are compatible with NexPay?',
          answer: 'NexPay supports all major smartphone brands (iOS and Android), tablets, laptops, and many other electronic devices. Contact us for specific device compatibility questions.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          question: 'What kind of support do you offer?',
          answer: 'We provide 24/7 customer support via phone, email, and live chat. Retailers also get access to a dedicated account manager, training resources, and a comprehensive knowledge base.'
        },
        {
          question: 'How do I contact support?',
          answer: 'You can reach our support team at support@nexpay.com, call us at +91 9109315673, or use the live chat feature on our website. We typically respond within minutes during business hours.'
        },
        {
          question: 'Do you offer training for my team?',
          answer: 'Yes! We provide comprehensive onboarding training for all new partners, including video tutorials, documentation, and live training sessions. Ongoing training is also available as needed.'
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
              Find answers to common questions about NexPay and our services
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
