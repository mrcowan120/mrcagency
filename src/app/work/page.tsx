import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies: creator events, content engines, DTC growth, and full-stack marketing campaigns for leading food, CPG, and lifestyle brands.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | MRC Agency",
    description:
      "Case studies: creator events, content engines, DTC growth, and full-stack marketing campaigns for leading food, CPG, and lifestyle brands.",
    url: "https://mrcagency.co/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Work", href: "/work" },
              ]}
            />

            <div className="mb-16 md:mb-24">
              <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
                Selected Work
              </span>
              <h1 className="display-text text-[clamp(2.2rem,5vw,4.5rem)] text-[#1A2744] mb-6">
                Work that speaks for itself.
              </h1>
              <p className="text-[#1A2744]/45 text-lg md:text-xl max-w-2xl leading-relaxed">
                From creator dinners to content engines — every project is built
                to drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                >
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 group-hover:from-black/80 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
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
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-[-0.01em] leading-tight mb-1">
                        {project.title}
                      </h2>
                      <p className="text-[13px] text-white/50 font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 md:p-8 border border-t-0 border-[#E8E4DE] rounded-b-2xl">
                    <p className="text-sm text-[#1A2744]/45 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
