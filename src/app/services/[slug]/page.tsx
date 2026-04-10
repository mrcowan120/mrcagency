import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { services, projects } from "@/lib/data";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schemas";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle.replace(" | MRC Agency", ""),
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://mrcagency.co/services/${slug}`,
    },
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) =>
    service.relatedCaseStudySlugs.includes(p.slug)
  );

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(service),
      generateFAQSchema(service.faqs),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://mrcagency.co" },
        { name: "Services", url: "https://mrcagency.co/services" },
        {
          name: service.titleOneLine,
          url: `https://mrcagency.co/services/${slug}`,
        },
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

        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.titleOneLine, href: `/services/${slug}` },
              ]}
            />

            <div className="max-w-3xl">
              <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-6 inline-block">
                {service.number} — Service
              </span>
              <h1 className="display-text text-[clamp(2rem,5vw,4rem)] text-[#1A2744] mb-8">
                {service.titleOneLine}
              </h1>
              <p className="text-[#1A2744]/50 text-lg md:text-xl leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16 md:py-24 bg-[#F0EDE8]/50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
              What we deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whatWeDeliver.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-[#E8E4DE]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E85D3A]/10 flex items-center justify-center text-[#E85D3A] text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="text-[15px] text-[#1A2744]/70 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
                Related work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group bg-white rounded-2xl border border-[#E8E4DE] hover:border-[#E85D3A]/30 p-8 transition-all duration-500 hover-lift block"
                  >
                    <span className="text-[11px] text-[#E85D3A] font-semibold tracking-[0.1em] uppercase block mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A2744] group-hover:text-[#E85D3A] transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#1A2744]/40 leading-relaxed">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-[#F0EDE8]/50">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E8E4DE] p-6 md:p-8"
                >
                  <h3 className="text-lg font-bold text-[#1A2744] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[15px] text-[#1A2744]/45 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
              Other services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white p-8 rounded-2xl border border-[#E8E4DE] hover:border-[#E85D3A]/30 transition-all duration-500 hover-lift block"
                >
                  <span className="text-[12px] font-mono tracking-wider text-[#1A2744]/25 block mb-4">
                    {s.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#1A2744] group-hover:text-[#E85D3A] transition-colors mb-3">
                    {s.titleOneLine}
                  </h3>
                  <p className="text-sm text-[#1A2744]/40 leading-relaxed">
                    {s.description}
                  </p>
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
