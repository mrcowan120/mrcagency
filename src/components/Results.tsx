"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: 220, suffix: "%", label: "Social Growth", color: "bg-[#E85D3A]" },
  { value: 36, suffix: "%", label: "YoY DTC Revenue Lift", color: "bg-[#1A2744]" },
  { value: 4.2, suffix: "x", label: "Blended ROAS", color: "bg-[#E85D3A]" },
  { value: 130, suffix: "K+", label: "Followers From Zero", color: "bg-[#1A2744]" },
  { value: 188, suffix: "%", label: "Impression Growth", color: "bg-[#E85D3A]" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const elRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const isDecimal = !Number.isInteger(value);
          const duration = 2000;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = value * eased;
            setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(isDecimal ? value.toFixed(1) : value.toString());
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elRef} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Results() {
  const ref = useReveal();

  return (
    <section id="results" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="reveal mb-16 md:mb-20 text-center">
          <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
            Impact
          </span>
          <h2 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744]">
            Numbers, not promises.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal ${stat.color} rounded-2xl p-5 md:p-6 text-center overflow-hidden`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-bold text-[clamp(1.5rem,2.5vw,2.25rem)] text-white mb-2 tracking-[-0.02em]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[11px] md:text-[12px] text-white/60 tracking-[0.08em] uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
