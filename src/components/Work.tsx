"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    slug: "hexclad-holiday-dinner",
    title: "HexClad — Creator Holiday Dinner",
    category: "Event Activation",
    description:
      "Produced an exclusive creator dinner event for HexClad, bringing together top food and lifestyle influencers for an immersive brand experience that generated organic content at scale.",
    tags: ["Events", "Creator Programs", "Content"],
    image: "/images/work/hexclad-dinner.jpg",
    objectPosition: "center 40%",
  },
  {
    slug: "bloomhouse-content-engine",
    title: "Bloomhouse — The Little Moments",
    category: "Content Engine",
    description:
      "Built a content engine around everyday cooking moments, producing a high-volume series of short-form videos that drove engagement and brand affinity for Bloomhouse.",
    tags: ["Content Engine", "Social", "UGC"],
    image: "/images/work/bloomhouse.jpg",
    objectPosition: "center 20%",
  },
  {
    slug: "campo-grande-dtc-growth",
    title: "Campo Grande — DTC Growth",
    category: "Performance & Growth",
    description:
      "Scaled Campo Grande's DTC business through integrated content and conversion strategy — aligning paid, organic, and email to drive a 36% YoY revenue increase.",
    tags: ["DTC", "Performance", "Email"],
    image: "/images/work/campo-grande.jpg",
    objectPosition: "center 60%",
  },
  {
    slug: "typhur-launch",
    title: "Typhur — Launch to Scale",
    category: "Full-Stack Growth",
    description:
      "Took Typhur from launch to brand awareness through creator seeding, social content production, and a TikTok-first strategy that built the brand's digital presence from scratch.",
    tags: ["Social", "Creator Programs", "Content"],
    image: "/images/work/typhur.jpg",
    objectPosition: "center 30%",
  },
];

export default function Work() {
  const ref = useReveal();

  return (
    <section id="work" ref={ref} className="py-24 md:py-36 bg-[#F0EDE8]/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="reveal mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
              Selected Work
            </span>
            <h2 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744]">
              Work that speaks for itself.
            </h2>
          </div>
          <p className="text-[#1A2744]/40 text-base md:text-lg max-w-md leading-relaxed">
            From celebrity partnerships to content engines — here&apos;s how we make brands impossible to ignore.
          </p>
        </div>

        {/* Project grid — asymmetric bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={`/work/${project.slug}`}
              className="reveal group relative rounded-2xl overflow-hidden cursor-pointer block"
              style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            >
              {/* Image background */}
              <div className="aspect-[16/10] relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: project.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />

                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 group-hover:from-black/80 transition-all duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] font-medium text-white/70 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-[0.06em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-[-0.01em] leading-tight mb-1">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-[13px] text-white/50 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Description below card */}
              <div className="bg-white p-6 md:p-8 border border-t-0 border-[#E8E4DE] rounded-b-2xl">
                <p className="text-sm text-[#1A2744]/45 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all work link */}
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="text-[14px] font-semibold text-[#E85D3A] hover:text-[#D14E2D] transition-colors duration-300 inline-flex items-center gap-2"
          >
            View all work
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
