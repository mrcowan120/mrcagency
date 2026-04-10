import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrcagency.co"),
  title: {
    default: "MRC Agency — Content Engines. Creator Ecosystems. Growth.",
    template: "%s | MRC Agency",
  },
  description:
    "MRC Agency builds content engines, scales creator ecosystems, and turns storytelling into measurable growth for brands in food, CPG, entertainment, and lifestyle.",
  keywords: [
    "marketing agency",
    "content production",
    "influencer marketing",
    "creator partnerships",
    "social media agency",
    "DTC marketing",
    "brand strategy",
    "content engine",
    "creator ecosystem",
    "influencer agency",
    "UGC agency",
    "social media management",
    "Irvine marketing agency",
    "content production agency",
    "influencer marketing agency",
    "performance marketing agency",
    "social media management agency",
    "brand strategy agency",
    "event activation agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MRC Agency — Content Engines. Creator Ecosystems. Growth.",
    description:
      "We build content engines, scale creator ecosystems, and turn storytelling into measurable growth.",
    url: "https://mrcagency.co",
    siteName: "MRC Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRC Agency — Content Engines. Creator Ecosystems. Growth.",
    description:
      "We build content engines, scale creator ecosystems, and turn storytelling into measurable growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mrcagency.co/#organization",
      name: "MRC Agency",
      url: "https://mrcagency.co",
      email: "matt@mrcagency.co",
      logo: {
        "@type": "ImageObject",
        url: "https://mrcagency.co/images/og-logo.png",
      },
      description:
        "MRC Agency is a hybrid creative, content, and growth agency that builds content engines, scales creator ecosystems, and turns storytelling into measurable growth.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        "@id": "https://mrcagency.co/#founder",
        name: "Matthew Cowan",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Irvine",
        addressRegion: "CA",
        postalCode: "92618",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Content Production",
        "Influencer Marketing",
        "Creator Programs",
        "Brand Strategy",
        "Social Media Management",
        "DTC Marketing",
        "UGC",
        "Performance Marketing",
      ],
      serviceType: [
        "Content Production & Content Engines",
        "Influencer & Creator Programs",
        "Brand Strategy & Storytelling",
        "Social Media Management & Growth",
        "Performance & Conversion Strategy",
        "Campaigns, Activations & Events",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://mrcagency.co/#localbusiness",
      name: "MRC Agency",
      url: "https://mrcagency.co",
      email: "matt@mrcagency.co",
      description:
        "MRC Agency builds content engines, scales creator ecosystems, and turns storytelling into measurable growth for brands in food, CPG, entertainment, and lifestyle.",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Irvine",
        addressRegion: "CA",
        postalCode: "92618",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.6846,
        longitude: -117.8265,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      founder: {
        "@id": "https://mrcagency.co/#founder",
      },
      serviceType: [
        "Content Production & Content Engines",
        "Influencer & Creator Programs",
        "Brand Strategy & Storytelling",
        "Social Media Management & Growth",
        "Performance & Conversion Strategy",
        "Campaigns, Activations & Events",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mrcagency.co/#website",
      url: "https://mrcagency.co",
      name: "MRC Agency",
      publisher: {
        "@id": "https://mrcagency.co/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://mrcagency.co/#founder",
      name: "Matthew Cowan",
      jobTitle: "Founder",
      worksFor: {
        "@id": "https://mrcagency.co/#organization",
      },
      knowsAbout: [
        "Influencer Marketing",
        "Content Strategy",
        "DTC Growth",
        "Brand Partnerships",
        "Creator Programs",
        "Social Media Growth",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Search Console verification — replace content value with your verification code */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE"
        />
      </head>
      <body className="min-h-screen">
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
