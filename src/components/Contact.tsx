"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-[#1A2744] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#E85D3A]/[0.08] rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - CTA text */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="pill bg-[#E85D3A]/20 text-[#E85D3A] mb-6 inline-block">
                Get in Touch
              </span>
              <h2 className="display-text text-[clamp(2rem,5vw,3.5rem)] text-white mb-6 leading-[1.1]">
                Let&apos;s build your
                <br />
                growth engine.
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8 max-w-sm">
                Tell us about your brand and what you&apos;re trying to build.
                We&apos;ll tell you exactly how we can help.
              </p>
              <div className="text-sm text-white/25">
                Or reach out directly:
                <br />
                <a
                  href="mailto:matt@mrcagency.co"
                  className="text-white/50 hover:text-[#E85D3A] transition-colors"
                >
                  matt@mrcagency.co
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 reveal">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-14 h-14 rounded-full bg-[#E85D3A] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message received.
                </h3>
                <p className="text-white/40">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[11px] text-white/30 mb-2 tracking-[0.15em] uppercase font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-base placeholder-white/20 focus:outline-none focus:border-[#E85D3A]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-white/30 mb-2 tracking-[0.15em] uppercase font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-base placeholder-white/20 focus:outline-none focus:border-[#E85D3A]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-[11px] text-white/30 mb-2 tracking-[0.15em] uppercase font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-base placeholder-white/20 focus:outline-none focus:border-[#E85D3A]/50 focus:bg-white/[0.08] transition-all"
                      placeholder="Your brand or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-[11px] text-white/30 mb-2 tracking-[0.15em] uppercase font-medium">
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white/40 text-base focus:outline-none focus:border-[#E85D3A]/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-15k">$10,000 – $15,000</option>
                      <option value="15k+">$15,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] text-white/30 mb-2 tracking-[0.15em] uppercase font-medium">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-base placeholder-white/20 focus:outline-none focus:border-[#E85D3A]/50 focus:bg-white/[0.08] transition-all resize-none"
                    placeholder="What are you building? What do you need?"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="text-[14px] font-semibold text-white bg-[#E85D3A] px-10 py-4 rounded-full hover:bg-[#D14E2D] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,93,58,0.3)] tracking-[0.02em]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
