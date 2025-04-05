'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'collection',
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us when you use our services. This information includes:`,
      listItems: [
        'Personal identification information (name, email address, phone number)',
        'Delivery and pickup addresses',
        'Order details and service preferences',
        'Payment information (processed securely through our payment partners)',
        'Communications you send to us',
        'Device information and usage data when you access our website'
      ]
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      content: `We use the information we collect for various purposes related to providing and improving our services:`,
      listItems: [
        'Process and fulfill your laundry orders',
        'Provide customer support and respond to your requests',
        'Send order confirmations, updates, and delivery notifications',
        'Improve our services and develop new features',
        'Personalize your experience based on your preferences',
        'Send promotional offers and updates (which you can opt out of)',
        'Ensure the security and integrity of our services'
      ]
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      content: `We value your privacy and do not sell your personal information. We may share your information in limited circumstances:`,
      listItems: [
        'With service providers who help us operate our business (delivery partners, payment processors)',
        'To comply with legal obligations or law enforcement requests',
        'To protect our rights, privacy, safety, or property',
        'In connection with a business transaction (merger, acquisition, or sale)'
      ]
    },
    {
      id: 'security',
      title: 'Information Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, loss, or misuse. These measures include:`,
      listItems: [
        'Encryption of sensitive information',
        'Secure processing of payment information',
        'Regular security assessments and updates',
        'Restricted access to personal information',
        'Staff training on privacy and security practices'
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights and Choices',
      content: `You have several rights regarding your personal information:`,
      listItems: [
        'Access and review the information we hold about you',
        'Request correction of inaccurate or incomplete information',
        'Request deletion of your information in certain circumstances',
        'Opt out of marketing communications',
        'Withdraw consent where processing is based on consent',
        'Lodge a complaint with a supervisory authority'
      ]
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: `We retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including:`,
      listItems: [
        'Providing our services to you',
        'Maintaining business records for accounting and tax purposes',
        'Complying with legal obligations',
        'Resolving disputes',
        'Enforcing our agreements'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:`,
      listItems: [
        'Remember your preferences and settings',
        'Understand how you use our website',
        'Improve site performance and functionality',
        'Provide relevant content and advertising',
        'Secure your account and transactions'
      ]
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.`
    },
    {
      id: 'updates',
      title: 'Updates to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website with a revised "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:`,
      contactInfo: [
        { label: 'Email', value: 'contact@neatnnext.com' },
        { label: 'Phone', value: '+91 79723 03745' },
        { label: 'Address', value: 'Sector-15, Noida, Uttar Pradesh - 201301, India' }
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 font-lora">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Last Updated: April 1, 2025
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            At NeatnNext, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
          </p>
        </motion.div>

        <div className="bg-gray-800/70 rounded-2xl shadow-xl border border-gray-700 p-8 mb-12">
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <a href={`#${section.id}`} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className="flex items-start">
                  <div className="hidden sm:block h-10 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-4 mt-1"></div>
                  <div className="w-full">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {section.title}
                    </h2>
                    
                    <div className="text-gray-300">
                      <p className="mb-4">{section.content}</p>
                      
                      {section.listItems && (
                        <ul className="list-none pl-1 space-y-2 mb-4">
                          {section.listItems.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {section.contactInfo && (
                        <div className="mt-4 space-y-3 pl-1">
                          {section.contactInfo.map((info, i) => (
                            <div key={i} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                              </div>
                              <span><strong className="text-white">{info.label}:</strong> {info.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {index < sections.length - 1 && (
                  <div className="border-b border-gray-700 w-full mt-8"></div>
                )}
              </motion.section>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-300"
        >
          <p>
            If you have questions about our Privacy Policy, please{' '}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              contact us
            </Link>.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 