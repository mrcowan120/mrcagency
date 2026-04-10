import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { projects, services } from "@/lib/data";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.metaTitle.replace(" | MRC Agency", ""),
    description: project.metaDescription,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://mrcagency.co/work/${slug}`,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const usedServices = services.filter((s) =>
    project.servicesUsedSlugs.includes(s.slug)
  );

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: project.title,
        description: project.description,
        slug: project.slug,
        image: project.image,
        datePublished: "2024-01-01",
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://mrcagency.co" },
        { name: "Work", url: "https://mrcagency.co/work" },
        { name: project.title, url: `https://mrcagency.co/work/${slug}` },
      ]),
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Image */}
        <section className="pt-24 md:pt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="pt-8">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/work" },
                  { label: project.title, href: `/work/${slug}` },
                ]}
              />
            </div>
            <div className="aspect-[21/9] relative rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: project.objectPosition }}
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-16 md:py-24">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="display-text text-[clamp(2rem,5vw,3.5rem)] text-[#1A2744] mb-6">
              {project.title}
            </h1>
            <p className="text-[#1A2744]/50 text-lg leading-relaxed mb-12">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-16">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#1A2744] rounded-2xl p-5 md:p-6 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <p className="text-[11px] text-white/50 tracking-[0.08em] uppercase font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1A2744] mb-4">
                The Challenge
              </h2>
              <p className="text-[#1A2744]/50 text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1A2744] mb-4">
                Our Approach
              </h2>
              <p className="text-[#1A2744]/50 text-base leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1A2744] mb-4">
                The Results
              </h2>
              <p className="text-[#1A2744]/50 text-base leading-relaxed">
                {project.results}
              </p>
            </div>

            {/* Services Used */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1A2744] mb-4">
                Services Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {usedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-[13px] font-medium text-[#E85D3A] bg-[#E85D3A]/10 px-4 py-2 rounded-full hover:bg-[#E85D3A]/20 transition-colors"
                  >
                    {s.titleOneLine}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More Work */}
        <section className="py-16 md:py-24 bg-[#F0EDE8]/50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
              More work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group rounded-2xl overflow-hidden block"
                >
                  <div className="aspect-[16/10] relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: p.objectPosition }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-white/50 font-medium">
                        {p.category}
                      </p>
                    </div>
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
