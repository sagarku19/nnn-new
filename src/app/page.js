'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import OrderTimeline from './components/OrderTimeline'
import BusinessContact from './components/BusinessContact'

export default function Home() {
  const [hoverFeature, setHoverFeature] = useState(null);
  const [hoverService, setHoverService] = useState(null);
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const features = [
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Expert care for all your garments',
      image: '/ln2.jpeg'
    },
    {
      icon: '🚚',
      title: 'Free Pickup & Delivery',
      description: 'Convenient doorstep service',
      image: '/ln3.jpeg'
    },
    {
      icon: '⚡',
      title: 'Quick Turnaround',
      description: '24-hour service available',
      image: '/ln4.jpeg'
    },
  ];
  
  const services = [
    {
      icon: '👕',
      title: 'Wash & Fold',
      image: '/ln6.jpg'
    },
    {
      icon: '👔',
      title: 'Dry Cleaning',
      image: '/ln7.jpg'
    },
    {
      icon: '👗',
      title: 'Premium Care',
      image: '/ln8.jpg'
    },
    {
      icon: '⚡',
      title: 'Express Service',
      image: '/ln9.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-gray-900/70 z-10"></div>
          <Image
            src="/ln5.jpg"
            alt="Laundry Service"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-custom relative z-20">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="mb-4">
                <div className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-6"></div>
                <h1 className="text-6xl md:text-7xl font-lora font-bold relative">
                  <span className="inline-block bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
                    NeatnNext
                  </span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-6"></div>
              </div>

              <p className="text-2xl md:text-3xl text-gray-300 font-lora mb-12 transition-colors duration-300 hover:text-indigo-300">
                A Laundry Marketplace
              </p>

              <div className="mb-8">
                <div className="text-white text-2xl animate-bounce">
                  ↓
                </div>
              </div>

              <div className="inline-block mb-8">
                <a
                  href="https://wa.me/917972303745?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-full font-lora font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  <span className="text-3xl mr-3 transition-transform duration-300 hover:rotate-12">
                    📱
                  </span>
                  <span className="text-lg">Order Now on WhatsApp</span>
                </a>
              </div>

              <p className="text-xl md:text-2xl font-lora text-gray-200 transition-colors duration-300 hover:text-indigo-300">
                Premium laundry service at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="container-custom relative z-10"
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ width: 0 }}
                animate={isFeaturesInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6"
              ></motion.div>
              <h2 className="text-3xl md:text-4xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Why Choose NeatnNext?
              </h2>
              <p className="text-xl text-gray-300 font-lora">
                Experience the difference with our premium services
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoverFeature(index)}
                onMouseLeave={() => setHoverFeature(null)}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden transform"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={hoverFeature === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.div 
                    animate={hoverFeature === index ? { scale: 1.2, y: -5 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-lora font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-lora">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [20, 0, 20],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        ></motion.div>
      </section>

      {/* Order Timeline Section */}
      <OrderTimeline />

      {/* Services Preview */}
      <section ref={servicesRef} className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isServicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="container-custom relative z-10"
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ width: 0 }}
                animate={isServicesInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6"
              ></motion.div>
              <h2 className="text-3xl md:text-4xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 font-lora">
                Professional care for all your laundry needs
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoverService(index)}
                onMouseLeave={() => setHoverService(null)}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)"
                }}
                className="bg-gray-800/50 rounded-xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden group">
                  <motion.div
                    animate={hoverService === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoverService === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-indigo-900/80 to-transparent"
                  >
                    <div className="text-white text-sm font-medium">View Details →</div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.div 
                    animate={hoverService === index ? { scale: 1.2, y: -5 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-4xl mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-lora font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-40 left-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [20, 0, 20],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        ></motion.div>
      </section>

      {/* Serviceable Locations Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6 w-24"></div>
              <h2 className="text-3xl md:text-4xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Serviceable Locations
              </h2>
              <p className="text-xl text-gray-300 font-lora">
                Currently serving these areas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location Card 1 */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 p-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  📍
                </div>
                <h3 className="text-xl font-lora font-bold text-white">
                  Lucknow
                </h3>
              </div>
            </div>

            {/* Location Card 2 */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 p-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  📍
                </div>
                <h3 className="text-xl font-lora font-bold text-white">
                  Nagpur
                </h3>
              </div>
            </div>

            {/* Location Card 3 */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 p-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  📍
                </div>
                <h3 className="text-xl font-lora font-bold text-white">
                  Patna
                </h3>
              </div>
            </div>

            {/* Location Card 4 - Coming Soon */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 p-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  🔜
                </div>
                <h3 className="text-xl font-lora font-bold text-white">
                  Coming soon to your area
                </h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </section>

      {/* Business Contact Section with Background Image */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-gray-900/70 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/ln10.jpg"
            alt="Laundry Service"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <BusinessContact />
        </motion.div>
      </section>
    </div>
  )
}
