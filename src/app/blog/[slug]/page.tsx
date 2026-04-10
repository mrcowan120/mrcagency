import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | MRC Agency`,
      description: post.description,
      url: `https://mrcagency.co/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    keywords: post.tags,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@id": "https://mrcagency.co/#founder",
        },
        publisher: {
          "@id": "https://mrcagency.co/#organization",
        },
        url: `https://mrcagency.co/blog/${slug}`,
      },
      generateBreadcrumbSchema([
        { name: "Home", url: "https://mrcagency.co" },
        { name: "Blog", url: "https://mrcagency.co/blog" },
        { name: post.title, url: `https://mrcagency.co/blog/${slug}` },
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

        <article className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${slug}` },
              ]}
            />

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-semibold text-[#E85D3A] tracking-[0.1em] uppercase">
                  {post.category}
                </span>
                <span className="text-[11px] text-[#1A2744]/20">
                  &middot;
                </span>
                <time
                  dateTime={post.date}
                  className="text-[11px] text-[#1A2744]/30"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h1 className="display-text text-[clamp(2rem,4vw,3rem)] text-[#1A2744] mb-6 leading-[1.15]">
                {post.title}
              </h1>
              <p className="text-[#1A2744]/50 text-lg leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Blog content rendered as simple paragraphs */}
            <div className="prose prose-lg max-w-none text-[#1A2744]/60 leading-relaxed space-y-6">
              {post.content
                .split("\n\n")
                .filter((block) => block.trim())
                .map((block, i) => {
                  const trimmed = block.trim();
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="display-text text-[clamp(1.3rem,2.5vw,2rem)] text-[#1A2744] mt-12 mb-4"
                      >
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="text-xl font-bold text-[#1A2744] mt-8 mb-3"
                      >
                        {trimmed.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    const items = trimmed.split("\n").map((line) => line.replace(/^-\s*/, ""));
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2">
                        {items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#E8E4DE]">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] text-[#1A2744]/30 bg-[#F0EDE8] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author */}
            <div className="mt-8 p-6 bg-[#F0EDE8]/50 rounded-2xl">
              <p className="text-[11px] text-[#1A2744]/30 tracking-[0.1em] uppercase font-medium mb-1">
                Written by
              </p>
              <p className="text-base font-bold text-[#1A2744]">
                {post.author}
              </p>
              <p className="text-sm text-[#1A2744]/40">
                Founder, MRC Agency
              </p>
            </div>
          </div>
        </article>

        {/* More Posts */}
        {otherPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-[#F0EDE8]/50">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="display-text text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A2744] mb-12">
                More from the blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-white rounded-2xl border border-[#E8E4DE] hover:border-[#E85D3A]/30 p-6 md:p-8 transition-all duration-500 hover-lift"
                  >
                    <span className="text-[11px] font-semibold text-[#E85D3A] tracking-[0.1em] uppercase block mb-3">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1A2744] group-hover:text-[#E85D3A] transition-colors mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#1A2744]/40 leading-relaxed">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
