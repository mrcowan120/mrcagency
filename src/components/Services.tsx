"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    number: "01",
    slug: "content-production",
    title: "Content Production\n& Content Engines",
    description:
      "We design and execute high-output content systems — short-form video, UGC frameworks, creative direction, and editing pipelines. Not just making content. Building machines that produce it at scale.",
    color: "bg-[#E85D3A]",
    featured: true,
  },
  {
    number: "02",
    slug: "influencer-programs",
    title: "Influencer &\nCreator Programs",
    description:
      "End-to-end creator ecosystems — sourcing, outreach, deal structuring, affiliate programs, and long-term ambassador partnerships. We build creator infrastructure, not just influencer posts.",
    color: "bg-[#1A2744]",
    featured: true,
  },
  {
    number: "03",
    slug: "brand-strategy",
    title: "Brand Strategy\n& Storytelling",
    description:
      "Messaging architecture, persona-driven storytelling, and social-first brand voice. We build the narrative foundation that makes everything else work.",
    color: "",
    featured: false,
  },
  {
    number: "04",
    slug: "social-media-management",
    title: "Social Media\nManagement & Growth",
    description:
      "Content calendars, posting strategy, community management, and platform-native growth tactics across TikTok, Instagram, and YouTube.",
    color: "",
    featured: false,
  },
  {
    number: "05",
    slug: "performance-marketing",
    title: "Performance &\nConversion Strategy",
    description:
      "Paid + organic alignment, conversion scripting, funnel integration, and retention strategy. The goal isn't views — it's revenue per piece of content.",
    color: "bg-[#1A2744]",
    featured: true,
  },
  {
    number: "06",
    slug: "campaigns-events",
    title: "Campaigns,\nActivations & Events",
    description:
      "Event activations, sweepstakes, sponsorship integrations, and high-concept campaign execution. From food festivals to viral stunts — we make brands show up.",
    color: "bg-[#E85D3A]",
    featured: true,
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="reveal mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
              What We Do
            </span>
            <h2 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744]">
              Full-stack growth.
            </h2>
          </div>
          <p className="text-[#1A2744]/40 text-base md:text-lg max-w-md leading-relaxed">
            Strategy and execution under one roof. No handoffs. No gaps. No excuses.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.number}
              href={`/services/${service.slug}`}
              className={`reveal group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover-lift block ${
                service.featured
                  ? `${service.color} text-white`
                  : "bg-white border border-[#E8E4DE] hover:border-[#E85D3A]/30"
              }`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <span className={`text-[12px] font-mono tracking-wider block mb-5 ${
                service.featured ? "text-white/40" : "text-[#1A2744]/25"
              }`}>
                {service.number}
              </span>
              <h3 className={`text-xl md:text-2xl font-bold tracking-[-0.01em] leading-tight mb-4 whitespace-pre-line ${
                service.featured
                  ? "text-white"
                  : "text-[#1A2744] group-hover:text-[#E85D3A] transition-colors duration-400"
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                service.featured ? "text-white/60" : "text-[#1A2744]/40"
              }`}>
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View all services link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-[14px] font-semibold text-[#E85D3A] hover:text-[#D14E2D] transition-colors duration-300 inline-flex items-center gap-2"
          >
            View all services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
