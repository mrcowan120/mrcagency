"use client";

import { useReveal } from "@/hooks/useReveal";

const pillars = [
  {
    icon: "→",
    title: "Operator-Led",
    description:
      "We operate like your internal team — embedded in your brand, aligned with your goals, moving at your speed. Not another vendor. A growth partner.",
  },
  {
    icon: "⚡",
    title: "Strategy + Execution",
    description:
      "Idea to production to distribution to optimization. One team. No handoffs. No gaps between thinking and doing.",
  },
  {
    icon: "◆",
    title: "Volume + Quality",
    description:
      "Most agencies choose one. We build systems that deliver both — repeatable processes that compound results over time.",
  },
  {
    icon: "✦",
    title: "Cross-Disciplinary",
    description:
      "Creative, data, culture, and commerce working together. We see the full picture and connect the dots others miss.",
  },
];

export default function WhyMRC() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[#1A2744] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E85D3A]/[0.08] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E85D3A]/[0.05] rounded-full blur-[100px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Big statement */}
        <div className="reveal mb-16 md:mb-24">
          <h2 className="display-text text-[clamp(1.8rem,4vw,3.5rem)] text-white max-w-4xl leading-[1.15]">
            We&apos;re not another agency.
            <span className="text-white/30"> We&apos;re the team you wish you had in-house — with the range you can&apos;t hire for.</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal group p-6 md:p-8 rounded-2xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#E85D3A] flex items-center justify-center text-white text-lg mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
