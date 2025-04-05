'use client'

import { motion } from 'framer-motion'

export default function TermsAndConditions() {
  const sections = [
    {
      id: 'service-terms',
      title: '1. Service Terms',
      content: 'By using our laundry services, you agree to the following terms and conditions:',
      items: [
        'All items must be machine washable unless specified for dry cleaning',
        'We are not responsible for color bleeding or shrinkage of garments',
        'Check pockets before submitting clothes for any valuables',
        'Items left unclaimed for over 30 days may be donated or disposed of',
        'Report any issues within 24 hours of delivery for resolution'
      ]
    },
    {
      id: 'pricing-payment',
      title: '2. Pricing & Payment',
      content: 'Our pricing structure and payment terms:',
      items: [
        'Prices are subject to change without prior notice',
        'Payment is required upon delivery of completed orders',
        'We accept cash, UPI, and all major credit/debit cards',
        'Additional charges apply for express service and special handling',
        'Corporate billing available for bulk orders with approved accounts'
      ]
    },
    {
      id: 'delivery-policy',
      title: '3. Delivery Policy',
      content: 'Our delivery service terms:',
      items: [
        'Free pickup and delivery for orders above ₹500 within service area',
        'Standard service: 24-48 hour turnaround time',
        'Express service available with 6-12 hour turnaround (subject to availability)',
        'Delivery times may vary based on location, traffic, and weather conditions',
        'Specific delivery time slots can be requested but are not guaranteed'
      ]
    },
    {
      id: 'liability',
      title: '4. Liability',
      content: 'We take utmost care of your garments, however:',
      items: [
        'Maximum liability is limited to 5 times the service charge for the item',
        'Not responsible for items left unclaimed for over 30 days',
        'No liability for inherent weaknesses or defects in materials',
        'Claims must be reported within 24 hours of delivery with proper evidence',
        'We reserve the right to refuse service for heavily soiled or contaminated items'
      ]
    },
    {
      id: 'cancellation',
      title: '5. Cancellation',
      content: 'Orders can be cancelled before processing begins. Once processing starts, cancellation charges may apply as follows:',
      items: [
        'No charges if cancelled before pickup',
        '50% of service charge if cancelled after pickup but before processing',
        'Full service charge applies if cancelled after processing begins',
        'Rescheduling is available at no extra cost with 4-hour advance notice',
        'Repeated cancellations may result in service restrictions'
      ]
    },
    {
      id: 'quality-assurance',
      title: '6. Quality Assurance',
      content: 'We are committed to providing high-quality service:',
      items: [
        'All garments undergo quality checks before delivery',
        'Satisfaction guarantee with free re-processing for quality issues',
        'Eco-friendly detergents and processes are used when possible',
        'Special care instructions must be provided at the time of order',
        'We follow industry best practices for fabric care and handling'
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 font-lora">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          {/* Table of Contents */}
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-xl border border-gray-700 mb-8">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:bg-purple-400 transition-colors"></div>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section 
                key={section.id}
                id={section.id}
                className="bg-gray-800/50 rounded-xl p-8 shadow-xl border border-gray-700 scroll-mt-16"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-4 mt-1"></div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-300 mb-4">
                  {section.content}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="h-5 w-5 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}

            <motion.section 
              className="bg-gray-800/50 rounded-xl p-8 shadow-xl border border-gray-700"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: sections.length * 0.1 }}
            >
              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-300 italic text-center">
                  These terms and conditions are effective from April 1, 2023, and are subject to change without prior notice. 
                  Please check regularly for updates. Last updated: April 5, 2023.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 