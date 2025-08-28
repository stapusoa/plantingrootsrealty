import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useSanityPages } from "@/lib/cms/hooks/useSanityPages";
import { HeroSection } from "@/lib/sections/HeroSection";
import { useEffect } from "react";

export function SanityPage() {
  const { slug } = useParams();
  const pages = useSanityPages();
  const page = pages.find((p) => p.slug === slug);

  useEffect(() => {
    if (!page) return;

    // Update <title>
    if (page.title) document.title = page.title;

    // Update <meta name="description">
    if (page.metaDescription) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", page.metaDescription);
    }
  }, [page]);

  if (!page) return <p>Loading...</p>;

  return (
        <div className="min-h-screen mt-50 bg-gray-50">
      <div className="container mx-auto px-4 py-8"></div>
    <div className="flex flex-col items-center relative w-full">
      {/* Hero Section */}
      {page.h1 && page.heroImageSM && (
        <HeroSection
          title={page.h1 ?? ""}
          subheader={page.subheader ?? ""}
          buttonText={page.heroButtonText ?? ""}
          onButtonClick={() => {
            if (page.heroButtonLink?.startsWith("#")) {
              const target = document.querySelector(page.heroButtonLink);
              target?.scrollIntoView({ behavior: "smooth" });
            } else if (page.heroButtonLink) {
              window.location.href = page.heroButtonLink;
            }
          }}
          images={{
            imageSM: page.heroImageSM ?? "",
            imageMD: page.heroImageMD ?? "",
            imageLG: page.heroImageLG ?? "",
          }}
        />
      )}

      {/* Body Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-16">
        <PortableText value={page.body} />
      </div>

      {/* Bottom CTA */}
      {page.ctaText && page.ctaLink && (
        <div className="text-center mt-12 mb-24">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg"
            onClick={() => {
              if (page.ctaLink) {
                window.location.href = page.ctaLink; // ✅ safe, TS knows it's a string
              }
            }}
          >
            {page.ctaText}
          </button>
        </div>
      )}
    </div>
    </div>
  );
}