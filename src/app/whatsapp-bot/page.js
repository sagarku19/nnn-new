'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppBotPage() {
  const features = [
    {
      title: 'Instant Booking',
      description: 'Book your laundry service in seconds through our WhatsApp bot',
      icon: '⚡'
    },
    {
      title: '24/7 Availability',
      description: 'Place orders anytime, anywhere with our automated WhatsApp service',
      icon: '🕒'
    },
    {
      title: 'Order Tracking',
      description: 'Track your laundry status in real-time through WhatsApp',
      icon: '📱'
    },
    {
      title: 'Easy Payments',
      description: 'Secure payment options available through WhatsApp',
      icon: '💳'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Start Chat',
      description: 'Click the WhatsApp button or scan the QR code to start chatting with our bot'
    },
    {
      number: '2',
      title: 'Select Service',
      description: 'Choose from our range of laundry services'
    },
    {
      number: '3',
      title: 'Schedule Pickup',
      description: 'Select your preferred pickup time and location'
    },
    {
      number: '4',
      title: 'Confirm Order',
      description: 'Review and confirm your order details'
    }
  ];

  return (
    <div className="min-h-screen py-12 font-lora bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-80 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10"></div>
        <Image
          src="/laund2.jpg"
          alt="WhatsApp Laundry Service"
          fill
          priority
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
            WhatsApp Laundry Service
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Book your laundry service instantly through WhatsApp
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-custom mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center"
        >
          Why Use Our WhatsApp Bot?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container-custom mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="text-4xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom">
        <motion.div 
          className="relative rounded-xl p-8 text-center text-white shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/ln7.jpg"
              alt="WhatsApp Laundry Service"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Try Our WhatsApp Laundry Service?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Start chatting with our bot now and book your laundry service instantly!
            </p>
            <Link href="https://wa.me/917972303745" passHref>
              <button className="px-8 py-3 bg-white text-indigo-800 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Chatting on WhatsApp
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 