'use client'

import Head from 'next/head'

export default function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NeatnNext",
    "image": "/logo.png",
    "@id": "https://neatnnext.com",
    "url": "https://neatnnext.com",
    "telephone": "+91-7972303745",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Multiple Locations",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1458",
      "longitude": "79.0882"
    },
    "description": "Best laundry service in India with WhatsApp bot for easy booking. Professional dry cleaning, wash & fold, and garment care services at your doorstep. Book instantly through our WhatsApp bot or website.",
    "areaServed": [
      "Nagpur",
      "Lucknow",
      "Patna",
      "Noida",
      "Butibori",
      "IIITN",
      "Gomti Nagar",
      "Hazratganj",
      "Aliganj",
      "Indira Nagar",
      "Boring Road",
      "Kankarbagh",
      "Patliputra",
      "Bailey Road",
      "Sector 62",
      "Sector 18",
      "Sector 137",
      "Sector 168"
    ],
    "servesCuisine": "None",
    "sameAs": [
      "https://www.facebook.com/neatnnext",
      "https://www.instagram.com/neatnnext",
      "https://twitter.com/neatnnext"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional laundry and dry cleaning services",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laundry Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wash & Fold",
            "description": "Regular laundry service with careful handling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dry Cleaning",
            "description": "Professional dry cleaning for delicate fabrics"
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>NeatnNext - WhatsApp Laundry Service | Book Instantly via WhatsApp Bot</title>
      <meta name="title" content="NeatnNext - WhatsApp Laundry Service | Book Instantly via WhatsApp Bot" />
      <meta name="description" content="Book laundry services instantly through our WhatsApp bot. Professional wash & fold, dry cleaning, and garment care services. Free pickup & delivery. Available in Nagpur, Lucknow, Patna, and Noida." />
      <meta name="keywords" content="whatsapp laundry service, laundry whatsapp bot, book laundry on whatsapp, instant laundry booking, whatsapp laundry booking, neatnnext whatsapp, laundry service bot, automated laundry booking, whatsapp laundry app, laundry chatbot, instant laundry service, doorstep laundry whatsapp, laundry booking app, laundry service automation, whatsapp laundry order" />
      <meta name="author" content="NeatnNext" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neatnnext.com/" />
      <meta property="og:title" content="Best Laundry Service in India | NeatnNext - Premium Laundry in Nagpur, Lucknow, Patna & Noida" />
      <meta property="og:description" content="Top-rated laundry service in Nagpur, Lucknow, Patna, and Noida. Professional wash & fold, dry cleaning, and garment care services. Free pickup & delivery. Serving residential areas, colleges, and corporate offices across multiple cities." />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://neatnnext.com/" />
      <meta property="twitter:title" content="Best Laundry Service in India | NeatnNext - Premium Laundry in Nagpur, Lucknow, Patna & Noida" />
      <meta property="twitter:description" content="Top-rated laundry service in Nagpur, Lucknow, Patna, and Noida. Professional wash & fold, dry cleaning, and garment care services. Free pickup & delivery. Serving residential areas, colleges, and corporate offices across multiple cities." />
      <meta property="twitter:image" content="/twitter-image.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://neatnnext.com/" />

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
} 