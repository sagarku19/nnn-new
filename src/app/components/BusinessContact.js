'use client'

import { motion } from 'framer-motion'

export default function BusinessContact() {
  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-lora font-bold mb-4">
          For Business Inquiries
        </h2>
        <p className="text-xl text-gray-100 font-lora mb-8 max-w-2xl mx-auto">
          Looking to partner with us or have a business proposal? We'd love to hear from you!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:business@neatnnext.com"
            className="inline-flex items-center justify-center space-x-2 bg-indigo-700 text-white px-8 py-4 rounded-full hover:bg-indigo-800 transition-colors font-lora group transform hover:scale-105"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">✉️</span>
            <span>business@neatnnext.com</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
} 