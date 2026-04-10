import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact MRC Agency | Start a Project",
  description:
    "Ready to build your growth engine? Contact MRC Agency for content production, influencer programs, and marketing strategy.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MRC Agency | Start a Project",
    description:
      "Ready to build your growth engine? Contact MRC Agency for content production, influencer programs, and marketing strategy.",
    url: "https://mrcagency.co/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32 md:pt-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
