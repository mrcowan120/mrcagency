import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About MRC Agency | Irvine, CA",
  description:
    "Founded by Matthew Cowan with 9+ years in influencer marketing, content strategy, and DTC growth. Irvine, CA — serving brands nationwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MRC Agency | Irvine, CA",
    description:
      "Founded by Matthew Cowan with 9+ years in influencer marketing, content strategy, and DTC growth.",
    url: "https://mrcagency.co/about",
  },
  keywords: [
    "Irvine marketing agency",
    "about MRC Agency",
    "Matthew Cowan",
    "content marketing agency founder",
  ],
};

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

const models = [
  {
    title: "Embedded Team",
    tag: "Most Common",
    description:
      "We operate as your Head of Content, Influencer Lead, or Social Director. Full integration with your team, your cadence, your goals.",
  },
  {
    title: "Project-Based",
    tag: null,
    description:
      "Campaign launches, system builds, or brand refreshes with clear deliverables and timelines. Start to finish — no loose ends.",
  },
  {
    title: "Consulting",
    tag: null,
    description:
      "Short-term engagements to audit, diagnose, and fix your content and marketing systems. Fast assessment, actionable roadmap.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero / Founder */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-6 inline-block">
                  The Founder
                </span>
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#E8E4DE] relative">
                  <Image
                    src="/images/matthew.jpg"
                    alt="Matthew Cowan, founder of MRC Agency"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-center">
                <h1 className="display-text text-[clamp(2rem,4vw,3.5rem)] text-[#1A2744] mb-8">
                  Matthew Cowan
                </h1>
                <div className="space-y-5 text-[#1A2744]/50 text-base md:text-[17px] leading-[1.75]">
                  <p>
                    Nine years building influencer programs, content engines, and
                    growth strategies for brands across food, CPG, entertainment,
                    and lifestyle. From launching TikTok channels from zero to six
                    figures, to managing seven-figure marketing budgets for brands
                    like HexClad — the work speaks for itself.
                  </p>
                  <p>
                    MRC was built on a simple thesis: brands don&apos;t need more
                    campaigns. They need systems. Content engines that compound.
                    Creator ecosystems that scale. Storytelling that converts.
                    Every engagement is designed to build something repeatable.
                  </p>
                  <p>
                    When you work with MRC, you get the strategic depth of an
                    agency with the executional speed and ownership of an internal
                    team. No layers. No fluff. Just work that moves the needle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why MRC */}
        <section className="py-24 md:py-36 bg-[#1A2744] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E85D3A]/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E85D3A]/[0.05] rounded-full blur-[100px]" />

          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
            <div className="mb-16 md:mb-24">
              <h2 className="display-text text-[clamp(1.8rem,4vw,3.5rem)] text-white max-w-4xl leading-[1.15]">
                We&apos;re not another agency.
                <span className="text-white/30">
                  {" "}
                  We&apos;re the team you wish you had in-house — with the range
                  you can&apos;t hire for.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-6 md:p-8 rounded-2xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-500"
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

        {/* How We Work */}
        <section className="py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="mb-16 md:mb-20">
              <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
                Engagement
              </span>
              <h2 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744]">
                How we work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {models.map((model) => (
                <div
                  key={model.title}
                  className={`group relative bg-white p-8 md:p-10 rounded-2xl border transition-all duration-500 hover-lift ${
                    model.tag
                      ? "border-[#E85D3A]/20 hover:border-[#E85D3A]/40 shadow-[0_2px_20px_rgba(232,93,58,0.06)]"
                      : "border-[#E8E4DE] hover:border-[#E85D3A]/20"
                  }`}
                >
                  {model.tag && (
                    <span className="absolute -top-3 left-8 bg-[#E85D3A] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.08em]">
                      {model.tag}
                    </span>
                  )}
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

        {/* Client Logos */}
        <ClientLogos />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
