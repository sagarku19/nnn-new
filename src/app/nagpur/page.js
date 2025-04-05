'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function NagpurPage() {
  const areas = [
    {
      name: 'Butibori',
      description: 'Professional laundry service for Butibori industrial area and surrounding residential areas.',
      image: '/ln2.jpeg'
    },
    {
      name: 'IIITN',
      description: 'Convenient laundry service for IIITN students and faculty members.',
      image: '/ln3.jpeg'
    },
    {
      name: 'Hingna',
      description: 'Reliable laundry service for Hingna MIDC and nearby residential areas.',
      image: '/ln4.jpeg'
    },
    {
      name: 'Wadi',
      description: 'Quality laundry service for Wadi industrial area and surrounding localities.',
      image: '/ln5.jpg'
    },
    {
      name: 'Kamptee',
      description: 'Professional laundry service for Kamptee and nearby areas.',
      image: '/ln6.jpg'
    },
    {
      name: 'Koradi',
      description: 'Convenient laundry service for Koradi and surrounding areas.',
      image: '/ln7.jpg'
    },
    {
      name: 'Manewada',
      description: 'Reliable laundry service for Manewada and nearby residential areas.',
      image: '/ln8.jpg'
    },
    {
      name: 'Dharampeth',
      description: 'Premium laundry service for Dharampeth and surrounding areas.',
      image: '/ln9.jpg'
    }
  ];

  return (
    <div className="min-h-screen py-12 font-lora bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-80 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10"></div>
        <Image
          src="/laund2.jpg"
          alt="Laundry Services in Nagpur"
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
            Laundry Services in Nagpur
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

      {/* Areas Served Section */}
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center"
        >
          Areas We Serve in Nagpur
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="relative h-48">
                <Image
                  src={area.image}
                  alt={`Laundry service in ${area.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {area.name}
                </h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <Link href="https://wa.me/917972303745" passHref>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-800 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom mt-16">
        <motion.div 
          className="relative rounded-xl p-8 text-center text-white shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/ln7.jpg"
              alt="Laundry Service Background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Laundry Service in Nagpur?</h2>
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
  )
} 