'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import React from 'react'

// Optimize image loading with blur placeholder
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

// Loading component for Suspense
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-4 border-indigo-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-500">Something went wrong.</h2>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default function Services() {
  const services = [
    {
      id: 'wash-fold',
      name: 'Wash & Fold',
      description: 'Professional washing and folding service for your everyday clothes.',
      features: [
        'Sorting by color and fabric',
        'Premium detergents used',
        'Fabric softener included',
        '24-hour turnaround',
      ],
      image: '/ln2.jpeg',
      icon: '🧺',
    },
    {
      id: 'dry-cleaning',
      name: 'Dry Cleaning',
      description: 'Expert dry cleaning service for your delicate garments.',
      features: [
        'Suitable for delicate fabrics',
        'Stain removal treatment',
        'Professional pressing',
        '48-hour turnaround',
      ],
      image: '/ln3.jpeg',
      icon: '👔',
    },
    {
      id: 'ironing',
      name: 'Ironing Service',
      description: 'Professional pressing and ironing for crisp, wrinkle-free clothes.',
      features: [
        'Steam ironing',
        'Hanging or folding',
        'Same-day service available',
        'Bulk discounts',
      ],
      image: '/ln4.jpeg',
      icon: '👕',
    },
    {
      id: 'express',
      name: 'Express Service',
      description: 'Quick turnaround for urgent laundry needs.',
      features: [
        '6-hour turnaround',
        'Priority handling',
        'Available for all services',
        'WhatsApp updates',
      ],
      image: '/ln5.jpg',
      icon: '⚡',
    },
  ]

  const additionalInfo = [
    {
      id: 'pickup',
      title: 'Pickup & Delivery',
      description: 'Free pickup and delivery all Orders',
      icon: '🚚',
    },
    {
      id: 'turnaround',
      title: 'Turnaround Time',
      description: 'Standard service: 24-48 hours\nExpress service: 6-12 hours\n(subject to availability)',
      icon: '⏱️',
    },
    {
      id: 'payment',
      title: 'Payment Options',
      description: 'We accept cash, UPI, and all major credit/debit cards. Corporate billing available for bulk orders.',
      icon: '💳',
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <div className="min-h-screen py-12 font-lora bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {/* Hero Section */}
          <div className="relative h-80 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10"></div>
            <Image
              src="/laund2.jpg"
              alt="Laundry Services"
              fill
              priority
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              style={{ objectFit: 'cover' }}
              className="z-0"
            />
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
              <motion.h1 
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Premium Services
              </motion.h1>
              <motion.p 
                className="text-xl max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Professional laundry care with attention to detail and quality you can trust
              </motion.p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 rounded-xl p-6 shadow-xl border border-gray-700"
            >
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Our Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service) => (
                  <a 
                    key={service.id} 
                    href={`#${service.id}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:bg-purple-400 transition-colors"></div>
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={service.name}
                  id={service.id}
                  className="bg-gray-800/50 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 scroll-mt-16"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-700 to-purple-800 text-white mr-4 shadow-md text-2xl">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <div className="h-5 w-5 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link href="https://wa.me/917972303745" passHref>
                        <button className="px-6 py-2 bg-gradient-to-r from-indigo-700 to-purple-800 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Information */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center"
            >
              Additional Information
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {additionalInfo.map((info, index) => (
                <motion.div 
                  key={info.id}
                  className="bg-gray-800/50 rounded-xl p-6 shadow-xl border border-gray-700"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 bg-gradient-to-br from-indigo-700 to-purple-800 text-white rounded-full inline-flex mb-4 shadow-md text-2xl">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="relative rounded-xl p-8 text-center text-white shadow-xl overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/ln7.jpg"
                  alt="Laundry Service Background"
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Laundry Service?</h2>
                <p className="text-xl mb-6 max-w-3xl mx-auto">
                  Let us take care of your laundry needs with our professional services. Book now and enjoy freshly cleaned clothes without the hassle.
                </p>
                <Link href="https://wa.me/917972303745" passHref>
                  <button className="px-8 py-3 bg-white text-indigo-800 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Start Your Order on WhatsApp
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
} 