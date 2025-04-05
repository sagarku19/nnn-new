'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const steps = [
  {
    title: 'Start on WhatsApp',
    description: 'Scan QR code or click to start',
    icon: '💬',
    delay: 0.1
  },
  {
    title: 'Send "Hi"',
    description: 'Start the conversation',
    icon: '👋',
    delay: 0.2
  },
  {
    title: 'Select Location',
    description: 'Choose your area',
    icon: '📍',
    delay: 0.3
  },
  {
    title: 'Choose Shop',
    description: 'Select preferred laundry',
    icon: '🏪',
    delay: 0.4
  },
  {
    title: 'Place Order',
    description: 'Specify your requirements',
    icon: '📝',
    delay: 0.5
  },
  {
    title: 'Pickup',
    description: 'Delivery partner collects',
    icon: '🚶',
    delay: 0.6
  },
  {
    title: 'Processing',
    description: 'Cleaning in progress',
    icon: '🧺',
    delay: 0.7
  },
  {
    title: 'Ready',
    description: 'Items cleaned & packed',
    icon: '✨',
    delay: 0.8
  },
  {
    title: 'Delivery',
    description: 'Items delivered to you',
    icon: '🚚',
    delay: 0.9
  },
  {
    title: 'Payment',
    description: 'Pay online or cash',
    icon: '💳',
    delay: 1.0
  }
]

export default function OrderTimeline() {
  const [activeStep, setActiveStep] = useState(null);
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [20, 0, 20],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6"
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              How to Order
            </h2>
            <p className="text-xl text-gray-300 font-lora">
              Simple steps to get your laundry done
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div 
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            className="relative pl-10"
          >
            {/* Zig-Zag Line Segments */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex items-start space-x-6 relative group"
                >
                  {/* Step number and icon container */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      animate={activeStep === index ? 
                        { scale: 1.1, boxShadow: "0 0 15px 5px rgba(99, 102, 241, 0.3)" } : 
                        { scale: 1 }
                      }
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800/80 border border-indigo-500/50 shadow-lg text-2xl z-10"
                    >
                      <motion.span
                        animate={activeStep === index ? 
                          { scale: 1.2, rotate: [0, 10, -10, 0] } : 
                          { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.span>
                    </motion.div>
                    {/* Zig-Zag Line Segment */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "2rem" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 bg-gradient-to-b from-indigo-500/80 via-purple-500/50 to-indigo-500/80 z-0"
                      ></motion.div>
                    )}
                  </div>
                  <motion.div 
                    animate={activeStep === index ? 
                      { x: 5, color: "#a5b4fc" } : 
                      { x: 0, color: "#fff" }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex-grow pt-3"
                  >
                    <h3 className="font-lora font-bold text-lg text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <motion.p 
                      animate={activeStep === index ? 
                        { color: "#cbd5e1" } : 
                        { color: "#94a3b8" }
                      }
                      transition={{ duration: 0.3 }}
                      className="font-lora text-base transition-colors duration-300"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-2xl shadow-xl border border-gray-700/50 text-center backdrop-blur-sm mt-10 md:mt-0"
          >
            <motion.h3 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-lora font-bold text-white mb-6"
            >
              Start Ordering Now
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              className="relative w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-all duration-300"
            >
              <Image
                src="/whatsapp-qr.jpg"
                alt="WhatsApp QR Code"
                fill
                className="object-contain bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-medium text-sm px-3 py-1 bg-indigo-600/80 rounded-full backdrop-blur-sm">
                  Scan to Order
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/917972303745?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg font-lora"
              >
                <motion.span 
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="text-xl"
                >
                  📱
                </motion.span>
                <span>Order Now</span>
              </a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-gray-400 text-sm"
            >
              Quick response within 5 minutes
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 