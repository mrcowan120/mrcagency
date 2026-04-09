import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
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
  title: "MRC Agency — Content Engines. Creator Ecosystems. Growth.",
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
      description:
        "MRC Agency is a hybrid creative, content, and growth agency that builds content engines, scales creator ecosystems, and turns storytelling into measurable growth.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Matthew Cowan",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Irvine",
        addressRegion: "CA",
        addressCountry: "US",
      },
      areaServed: "US",
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
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
