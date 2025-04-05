export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NeatnNext",
    "image": "https://neatnnext.vercel.app/LOGO.png",
    "logo": "https://neatnnext.vercel.app/LOGO.png",
    "@id": "https://neatnnext.vercel.app",
    "url": "https://neatnnext.vercel.app",
    "telephone": "+917972303745",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector-15",
      "addressLocality": "Noida",
      "postalCode": "201301",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5839,
      "longitude": 77.3157
    },
    "openingHoursSpecification": [
      {
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
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/neatnnext",
      "https://instagram.com/neatnnext"
    ],
    "priceRange": "₹₹",
    "description": "Professional laundry and dry cleaning services with free pickup and delivery in Noida. Quality care for all your garments with quick turnaround times.",
    "email": "contact@neatnnext.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+917972303745",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ],
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
          },
          "price": "20.00",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "20.00",
            "priceCurrency": "INR",
            "unitCode": "KGM",
            "unitText": "per kilogram"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dry Cleaning",
            "description": "Professional dry cleaning for delicate fabrics"
          },
          "price": "50.00",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "50.00",
            "priceCurrency": "INR",
            "unitText": "per item"
          }
        }
      ]
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 