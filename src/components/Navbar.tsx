"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_1px_0_#E8E4DE]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col items-center leading-none"
        >
          <span className="display-text text-[24px] text-[#1A2744]">MRC</span>
          <span className="font-semibold uppercase text-[#1A2744] block text-center" aria-label="Agency" style={{ fontSize: "6.5px", transform: "scaleX(3.5)", transformOrigin: "center", letterSpacing: "-0.02em" }}>AGENCY</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#1A2744]/50 hover:text-[#1A2744] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[14px] font-semibold text-white bg-[#E85D3A] px-6 py-2.5 rounded-full hover:bg-[#D14E2D] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(232,93,58,0.3)]"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[2px] w-5 bg-[#1A2744] rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-[#1A2744] rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#FAF8F5] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="display-text text-[32px] text-[#1A2744] hover:text-[#E85D3A] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-[16px] font-semibold text-white bg-[#E85D3A] px-8 py-3.5 rounded-full hover:bg-[#D14E2D] transition-colors mt-4"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}
