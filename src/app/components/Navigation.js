'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home', ariaLabel: 'Go to Home page' },
  { href: '/about', label: 'About Us', ariaLabel: 'Learn more about NeatnNext' },
  { href: '/services', label: 'Services', ariaLabel: 'View our laundry services' },
  { href: '/contact', label: 'Contact', ariaLabel: 'Contact NeatnNext' },
  { href: '/privacy', label: 'Privacy Policy', ariaLabel: 'Read our privacy policy' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      role="banner"
      className={`w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1221]/95 backdrop-blur-sm shadow-lg border-b border-gray-800/20' 
          : 'bg-[#0B1221]/90 backdrop-blur-sm'
      }`}
    >
      <nav role="navigation" aria-label="Main navigation" className="container-custom">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center group"
              aria-label="NeatnNext - Premium Laundry Service"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-lora font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent bg-size-200 group-hover:bg-pos-100 transition-all duration-500"
              >
                NeatnNext
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group text-gray-200 hover:text-white font-lora transition-colors"
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                  className="block"
                >
                  {link.label}
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400/40 to-purple-400/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={false}
                  aria-hidden="true"
                />
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 1 }}
              href="https://wa.me/917972303745?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 hover:from-indigo-600/80 hover:to-purple-600/80 text-white px-6 py-2 rounded-full transition-all duration-300 font-lora shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2"
              aria-label="Order now via WhatsApp"
            >
              <span>Order Now</span>
              <span className="text-lg" role="img" aria-label="Phone">📱</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 p-2 rounded-lg hover:bg-gray-700/30 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#0B1221]/95 backdrop-blur-sm"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col space-y-2 py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-200 hover:text-white px-4 py-3 rounded-lg hover:bg-gray-700/30 font-lora transition-colors text-left"
                    onClick={() => {
                      scrollToSection(link.href.replace('/', ''))
                      setIsMenuOpen(false)
                    }}
                    role="menuitem"
                    aria-label={link.ariaLabel}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                      className="block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/917972303745?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 hover:from-indigo-600/80 hover:to-purple-600/80 text-white px-4 py-3 rounded-lg transition-all duration-300 font-lora text-center mx-4 shadow-lg flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-label="Order now via WhatsApp"
                >
                  <span>Order Now</span>
                  <span className="text-lg" role="img" aria-label="Phone">📱</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 