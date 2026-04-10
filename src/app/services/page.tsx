import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack marketing services: content production, influencer programs, brand strategy, social media, performance marketing, and event activations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | MRC Agency",
    description:
      "Full-stack marketing services: content production, influencer programs, brand strategy, social media, performance marketing, and event activations.",
    url: "https://mrcagency.co/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
              ]}
            />

            <div className="mb-16 md:mb-24">
              <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
                What We Do
              </span>
              <h1 className="display-text text-[clamp(2.2rem,5vw,4.5rem)] text-[#1A2744] mb-6">
                Full-stack growth.
              </h1>
              <p className="text-[#1A2744]/45 text-lg md:text-xl max-w-2xl leading-relaxed">
                Strategy and execution under one roof. Every service is designed
                to build systems that compound — not campaigns that expire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.number}
                  href={`/services/${service.slug}`}
                  className={`group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover-lift block ${
                    service.featured
                      ? `${service.color} text-white`
                      : "bg-white border border-[#E8E4DE] hover:border-[#E85D3A]/30"
                  }`}
                >
                  <span
                    className={`text-[12px] font-mono tracking-wider block mb-5 ${
                      service.featured ? "text-white/40" : "text-[#1A2744]/25"
                    }`}
                  >
                    {service.number}
                  </span>
                  <h2
                    className={`text-xl md:text-2xl font-bold tracking-[-0.01em] leading-tight mb-4 whitespace-pre-line ${
                      service.featured
                        ? "text-white"
                        : "text-[#1A2744] group-hover:text-[#E85D3A] transition-colors duration-400"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.featured ? "text-white/60" : "text-[#1A2744]/40"
                    }`}
                  >
                    {service.description}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1 text-[13px] font-semibold ${
                      service.featured ? "text-white/70" : "text-[#E85D3A]"
                    }`}
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
