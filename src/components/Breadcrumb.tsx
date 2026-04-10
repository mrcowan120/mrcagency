import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schemas";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `https://mrcagency.co${item.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...generateBreadcrumbSchema(schemaItems),
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-[12px] text-[#1A2744]/30 tracking-[0.05em] uppercase font-medium">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#1A2744]/15">/</span>}
              {i === items.length - 1 ? (
                <span className="text-[#1A2744]/60">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#1A2744] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
