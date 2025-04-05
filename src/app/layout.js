import './globals.css'
import { Inter, Lora } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata = {
  metadataBase: new URL('https://neatnnext.com'),
  title: 'NeatnNext - Premium Laundry Services',
  description: 'Professional laundry care with attention to detail and quality you can trust. Serving Lucknow, Nagpur, and Patna with premium laundry services.',
  keywords: 'laundry service, dry cleaning, wash and fold, ironing service, premium laundry, Lucknow, Nagpur, Patna',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'NeatnNext - Premium Laundry Services',
    description: 'Professional laundry care with attention to detail and quality you can trust.',
    url: 'https://neatnnext.com',
    siteName: 'NeatnNext',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeatnNext Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeatnNext - Premium Laundry Services',
    description: 'Professional laundry care with attention to detail and quality you can trust.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={
            <header className="w-full h-20 bg-[#0B1221]/90 backdrop-blur-sm">
              <nav className="container-custom h-full">
                <div className="flex justify-between items-center h-full">
                  <div className="w-32 h-8 bg-gray-700/30 rounded animate-pulse"></div>
                  <div className="hidden md:flex space-x-8">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-16 h-6 bg-gray-700/30 rounded animate-pulse"></div>
                    ))}
                  </div>
                  <div className="md:hidden">
                    <div className="w-8 h-8 bg-gray-700/30 rounded animate-pulse"></div>
                  </div>
                </div>
              </nav>
            </header>
          }>
            <Navigation />
          </Suspense>
          <main className="flex-grow">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
        
        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 flex items-center z-50 group">
          <div className="absolute right-0 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 mr-14 bg-white text-gray-800 font-lora font-medium px-4 py-2 rounded-lg shadow-lg">
            Order Now
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
          <a
            href="https://wa.me/917972303745?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <div className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-25"></div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="drop-shadow-lg"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </div>
          </a>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
