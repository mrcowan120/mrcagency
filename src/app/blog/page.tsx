import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on content marketing, influencer strategy, social media growth, and brand building from MRC Agency.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | MRC Agency",
    description:
      "Insights on content marketing, influencer strategy, social media growth, and brand building from MRC Agency.",
    url: "https://mrcagency.co/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />

            <div className="mb-16 md:mb-24">
              <span className="pill bg-[#E85D3A]/10 text-[#E85D3A] mb-4 inline-block">
                Insights
              </span>
              <h1 className="display-text text-[clamp(2.2rem,5vw,4.5rem)] text-[#1A2744] mb-6">
                The MRC Blog
              </h1>
              <p className="text-[#1A2744]/45 text-lg md:text-xl max-w-2xl leading-relaxed">
                Frameworks, strategies, and lessons from building content
                engines, creator ecosystems, and growth systems for brands.
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#1A2744]/30 text-lg">
                  New posts coming soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl border border-[#E8E4DE] hover:border-[#E85D3A]/30 overflow-hidden transition-all duration-500 hover-lift"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] font-semibold text-[#E85D3A] tracking-[0.1em] uppercase">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-[#1A2744]/20">
                          &middot;
                        </span>
                        <span className="text-[11px] text-[#1A2744]/30">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-[#1A2744] group-hover:text-[#E85D3A] transition-colors mb-3 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#1A2744]/40 leading-relaxed">
                        {post.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#E85D3A]">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
