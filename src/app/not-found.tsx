import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="max-w-lg mx-auto px-6 text-center">
        <span className="text-[120px] md:text-[160px] font-bold text-[#E85D3A]/10 leading-none block select-none">
          404
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A2744] -mt-8 mb-4 tracking-[-0.02em]">
          Page not found
        </h1>
        <p className="text-[#1A2744]/40 text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="text-[14px] font-semibold text-white bg-[#E85D3A] px-8 py-3.5 rounded-full hover:bg-[#D14E2D] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(232,93,58,0.3)]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="text-[14px] font-semibold text-[#1A2744] border border-[#1A2744]/20 px-8 py-3.5 rounded-full hover:bg-[#1A2744] hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6 text-[12px] text-[#1A2744]/25 tracking-[0.05em] uppercase">
          <Link href="/services" className="hover:text-[#1A2744] transition-colors">
            Services
          </Link>
          <Link href="/work" className="hover:text-[#1A2744] transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-[#1A2744] transition-colors">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
