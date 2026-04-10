import Link from "next/link";

export default function CTASection({
  headline = "Ready to build your growth engine?",
  description = "Tell us about your brand and what you're trying to build. We'll tell you exactly how we can help.",
}: {
  headline?: string;
  description?: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-[#1A2744] relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#E85D3A]/[0.08] rounded-full blur-[120px]" />
      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="display-text text-[clamp(1.8rem,4vw,3rem)] text-white mb-6 leading-[1.15]">
          {headline}
        </h2>
        <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="text-[15px] font-semibold text-white bg-[#E85D3A] px-10 py-4 rounded-full hover:bg-[#D14E2D] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,93,58,0.3)]"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="text-[15px] font-semibold text-white/60 border border-white/15 px-10 py-4 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
