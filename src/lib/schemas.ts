import { siteConfig } from "./data";

export function generateLocalBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    founder: {
      "@id": `${siteConfig.url}/#founder`,
    },
    serviceType: [
      "Content Production & Content Engines",
      "Influencer & Creator Programs",
      "Brand Strategy & Storytelling",
      "Social Media Management & Growth",
      "Performance & Conversion Strategy",
      "Campaigns, Activations & Events",
    ],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: {
  titleOneLine: string;
  description: string;
  slug: string;
}) {
  return {
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}/#service`,
    name: service.titleOneLine,
    description: service.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@id": `${siteConfig.url}/#founder`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: `${siteConfig.url}/work/${article.slug}`,
  };
}
