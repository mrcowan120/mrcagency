"use client";

import { useReveal } from "@/hooks/useReveal";

const models = [
  {
    title: "Embedded Team",
    tag: "Most Common",
    description:
      "We operate as your Head of Content, Influencer Lead, or Social Director. Full integration with your team, your cadence, your goals.",
    emoji: "🤝",
  },
  {
    title: "Project-Based",
    tag: null,
    description:
      "Campaign launches, system builds, or brand refreshes with clear deliverables and timelines. Start to finish — no loose ends.",
    emoji: "🎯",
  },
  {
    title: "Consulting",
    tag: null,
    description:
      "Short-term engagements to audit, diagnose, and fix your content and marketing systems. Fast assessment, actionable roadmap.",
    emoji: "💡",
  },
];

export default function HowWeWork() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[#F0EDE8]/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="reveal mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
              Engagement
            </span>
            <h2 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744]">
              How we work
            </h2>
          </div>
          <p className="text-[#1A2744]/40 text-base md:text-lg max-w-md leading-relaxed">
            Flexible models designed to meet you where you are and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((model, i) => (
            <div
              key={model.title}
              className={`reveal group relative bg-white p-8 md:p-10 rounded-2xl border transition-all duration-500 hover-lift ${
                model.tag
                  ? "border-[#E85D3A]/20 hover:border-[#E85D3A]/40 shadow-[0_2px_20px_rgba(232,93,58,0.06)]"
                  : "border-[#E8E4DE] hover:border-[#E85D3A]/20"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {model.tag && (
                <span className="absolute -top-3 left-8 bg-[#E85D3A] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.08em]">
                  {model.tag}
                </span>
              )}
              <div className="text-3xl mb-5">{model.emoji}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2744] mb-3 tracking-[-0.01em] group-hover:text-[#E85D3A] transition-colors duration-400">
                {model.title}
              </h3>
              <p className="text-sm text-[#1A2744]/40 leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
