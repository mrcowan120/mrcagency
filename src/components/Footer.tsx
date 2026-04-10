import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[#E8E4DE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <Link href="/" className="display-text text-[22px] text-[#1A2744]">
            MRC
          </Link>
          <div className="flex items-center gap-10">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-[#1A2744]/30 hover:text-[#1A2744] transition-colors duration-300 tracking-[0.1em] uppercase font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-[#E8E4DE]">
          <p className="text-[12px] text-[#1A2744]/20 tracking-[0.05em]">
            &copy; {new Date().getFullYear()} MRC Agency. Irvine, CA.
          </p>
          <a
            href="mailto:matt@mrcagency.co"
            className="text-[12px] text-[#1A2744]/25 hover:text-[#E85D3A] transition-colors duration-300 tracking-[0.05em]"
          >
            matt@mrcagency.co
          </a>
        </div>
      </div>
    </footer>
  );
}
