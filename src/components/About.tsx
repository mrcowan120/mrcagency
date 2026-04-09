"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 items-center">
          {/* Left column - photo */}
          <div className="md:col-span-5 reveal">
            <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-6 inline-block">
              The Founder
            </span>
            <div className="aspect-square rounded-2xl overflow-hidden border border-[#E8E4DE] relative">
              <Image
                src="/images/matthew.jpg"
                alt="Matthew Cowan, founder of MRC Agency"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
          </div>

          {/* Right column - bio */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="reveal display-text text-[clamp(2rem,4vw,3.5rem)] text-[#1A2744] mb-8">
              Matthew Cowan
            </h2>
            <div className="space-y-5 text-[#1A2744]/50 text-base md:text-[17px] leading-[1.75]">
              <p className="reveal">
                Nine years building influencer programs, content engines, and
                growth strategies for brands across food, CPG, entertainment,
                and lifestyle. From launching TikTok channels from zero to six
                figures, to managing seven-figure marketing budgets for brands
                like HexClad — the work speaks for itself.
              </p>
              <p className="reveal">
                MRC was built on a simple thesis: brands don&apos;t need more
                campaigns. They need systems. Content engines that compound.
                Creator ecosystems that scale. Storytelling that converts.
                Every engagement is designed to build something repeatable.
              </p>
              <p className="reveal">
                When you work with MRC, you get the strategic depth of an
                agency with the executional speed and ownership of an internal
                team. No layers. No fluff. Just work that moves the needle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
