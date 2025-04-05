'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const stats = [
    { id: 'years', value: '5+', label: 'Years Experience' },
    { id: 'customers', value: '10K+', label: 'Happy Customers' },
    { id: 'satisfaction', value: '99%', label: 'Satisfaction Rate' },
  ]

  const values = [
    { 
      id: 'quality', 
      icon: '🌟', 
      title: 'Quality First', 
      description: 'We never compromise on the quality of our services, using premium products and advanced techniques for every garment.'
    },
    { 
      id: 'efficiency', 
      icon: '⚡', 
      title: 'Efficiency', 
      description: 'Our streamlined processes ensure quick turnaround times without compromising on quality or attention to detail.'
    },
    { 
      id: 'customer', 
      icon: '🤝', 
      title: 'Customer Focus', 
      description: 'Your satisfaction is our top priority. We listen, adapt, and continuously improve based on your feedback.'
    },
    { 
      id: 'innovation', 
      icon: '💡', 
      title: 'Innovation', 
      description: 'We constantly explore new technologies and methods to enhance our services and provide better results.'
    },
    { 
      id: 'sustainability', 
      icon: '🌱', 
      title: 'Sustainability', 
      description: 'We are committed to eco-friendly practices, using biodegradable detergents and energy-efficient equipment.'
    },
    { 
      id: 'integrity', 
      icon: '⭐', 
      title: 'Integrity', 
      description: 'We operate with honesty, transparency, and fair pricing for all our services without hidden charges.'
    },
  ]

  const team = [
    {
      id: 'member1',
      name: 'Rajiv Sharma',
      role: 'Founder & CEO',
      image: '/team/founder.jpg'
    },
    {
      id: 'member2',
      name: 'Priya Patel',
      role: 'Operations Manager',
      image: '/team/operations.jpg'
    },
    {
      id: 'member3',
      name: 'Ankit Verma',
      role: 'Customer Relations',
      image: '/team/customer-relations.jpg'
    }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About NeatnNext
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Transforming the way you think about laundry with premium care and convenience
            </p>
          </motion.div>
        </div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Our Laundry Story Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founderneatnnext.png"
                  alt="Founder of NeatnNext"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-lora font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Our Laundry Story
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At NeatnNext, our journey began with a simple yet powerful vision: to revolutionize the laundry industry by combining premium service with unmatched convenience. Founded with the belief that everyone deserves access to professional laundry care, we've grown from a small local service to a trusted name across multiple cities.
                </p>
                <p>
                  Our founder's commitment to excellence and innovation has driven us to develop a service that not only meets but exceeds customer expectations. We understand that your clothes are more than just fabric - they're an expression of your personality and style.
                </p>
                <p>
                  Today, we proudly serve communities in Lucknow, Nagpur, and Patna, bringing professional laundry services right to your doorstep. Our team of experienced professionals ensures that each garment receives the care and attention it deserves.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">3+</h3>
                  <p className="text-gray-400">Cities Served</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">1000+</h3>
                  <p className="text-gray-400">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl shadow-xl border border-indigo-800/50 p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Our Values
              </h2>
              <p className="text-gray-300 max-w-2xl">
                These core principles guide everything we do at NeatnNext, ensuring consistency and excellence in all our services.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team
        <div className="mb-24">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-300 max-w-2xl">
                The dedicated professionals who make NeatnNext exceptional every day.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-gray-700"
              >
                <div className="relative h-80 w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl shadow-xl border border-indigo-800/50 p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the NeatnNext Difference
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust us with their laundry needs. 
            We're committed to providing you with the highest quality service, every time.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </main>
  )
} 