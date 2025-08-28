import { useParams } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { useSanityPage } from "@/lib/cms/hooks/useSanityPages";
import { useEffect } from "react";

export function SanityPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = useSanityPage(slug);

  // --- SEO Meta Updates ---
  useEffect(() => {
    if (!page) return;

    document.title = page.title || "";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = page.metaDescription || "";

    // Canonical
    if (page.canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.rel = "canonical";
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = page.canonicalUrl;
    }

    // Open Graph
    const setOgTag = (property: string, content?: string) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    setOgTag("og:title", page.title);
    setOgTag("og:description", page.metaDescription);
    setOgTag("og:image", page.images?.[0]?.asset.url);
    setOgTag("og:type", "website");
  }, [page]);

  if (!page) return <p>Loading...</p>;

  // Portable Text components
  const portableComponents: Partial<PortableTextComponents> = {
    block: {
      h1: ({ children }) => <h1 className="font-bold text-8xl mb-8">{children}</h1>,
      h2: ({ children }) => <h2 className="font-bold text-4xl mb-4">{children}</h2>,
      normal: ({ children }) => <p className="text-base mb-4">{children}</p>,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center gap-8">

        {/* H1 */}
        {page.h1 && <h1 className="font-bold text-6xl md:text-8xl leading-tight">{page.h1}</h1>}

        {/* Subheader */}
        {page.subheader?.text && (
          <p className={page.subheader.alignment === "center" ? "text-center text-xl mb-4" : "text-left text-xl mb-4"}>
            {page.subheader.text}
          </p>
        )}

        {/* CTA */}
        {page.cta?.text && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg"
            onClick={() => page.cta?.url && (window.location.href = page.cta.url)}
          >
            {page.cta.text}
          </button>
        )}

        {/* Body */}
        <div className="w-full">
          <PortableText value={page.body || []} components={portableComponents} />
        </div>

        {/* Images */}
        <div className="flex flex-row gap-4 mt-8 w-full justify-center">
          {page.images?.map((img) => (
            <img key={img._key} src={img.asset.url} alt={img.alt || ""} className="w-1/3 rounded" />
          ))}
        </div>

      </div>
    </div>
  );
}