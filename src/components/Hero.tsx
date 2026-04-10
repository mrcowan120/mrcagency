"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-[120px] overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Decorative blobs */}
      <div className="gradient-blob absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#E85D3A]/[0.07]" />
      <div className="gradient-blob absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#1A2744]/[0.04]" />
      <div className="gradient-blob absolute top-[50%] right-[30%] w-[300px] h-[300px] bg-[#E85D3A]/[0.04]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Tagline pill */}
        <div className="reveal mb-8">
          <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] font-medium">
            Creative + Content + Growth
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal display-text text-[#1A2744] mb-8 max-w-[900px]" style={{ transitionDelay: "0.1s" }}>
          <span className="block text-[clamp(2.2rem,5vw,4.5rem)]">
            We build the systems
          </span>
          <span className="block text-[clamp(2.2rem,5vw,4.5rem)]">
            that make brands
          </span>
          <span className="block text-[clamp(2.2rem,5vw,4.5rem)] text-[#E85D3A]">
            impossible to ignore.
          </span>
        </h1>

        {/* Description + CTAs */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16" style={{ transitionDelay: "0.2s" }}>
          <p className="text-[18px] md:text-[20px] text-[#1A2744]/45 leading-relaxed max-w-[520px]">
            Content engines. Creator ecosystems. Growth strategies.
            All under one roof — built by operators, not account managers.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="text-[15px] font-semibold text-white bg-[#E85D3A] px-8 py-3.5 rounded-full hover:bg-[#D14E2D] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,93,58,0.3)]"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-[#1A2744] border border-[#1A2744]/20 px-8 py-3.5 rounded-full hover:bg-[#1A2744] hover:text-white transition-all duration-300"
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
