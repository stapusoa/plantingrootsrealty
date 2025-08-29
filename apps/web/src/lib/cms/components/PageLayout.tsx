import { useParams } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { useSanityPage } from "@/lib/cms/hooks/useSanityPages";
import { useEffect } from "react";

type TextBlock = {
  _type: "textBlock";
  heading?: string;
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  headingAlignment?: "left" | "center" | "right";
  body?: any;
  textAlignment?: "left" | "center" | "right";
};

type ImageBlock = {
  _type: "imageBlock";
  asset: { url: string };
  alt?: string;
  alignment?: "left" | "center" | "right";
};

type PageContentBlock = TextBlock | ImageBlock;

export function SanityPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = useSanityPage(slug);
  console.log("Fetched page:", page);

  // Helper to set or create meta tags
  const setMetaTag = (nameOrProperty: string, content: string, isProperty = false) => {
    if (!content) return;
    const selector = isProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let tag = document.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement("meta");
      if (isProperty) tag.setAttribute("property", nameOrProperty);
      else tag.name = nameOrProperty;
      document.head.appendChild(tag);
    }
    tag.content = content;
  };

  // SEO meta updates
  useEffect(() => {
    if (!page) return;

    document.title = page.title || "Untitled Page";
    setMetaTag("description", page.metaDescription || "");
    setMetaTag("og:title", page.title || "", true);
    setMetaTag("og:description", page.metaDescription || "", true);
    setMetaTag("og:image", page.hero?.heroImageSM?.asset?.url || "", true);
    setMetaTag("og:type", "website", true);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = page.canonicalUrl || `${window.location.origin}/${slug}`;
  }, [page, slug]);

  if (!page) return <p>Loading...</p>;

  const portableComponents: Partial<PortableTextComponents> = {
    block: {
      normal: ({ children }) => <p className="text-base mb-4">{children}</p>,
      h2: ({ children }) => <h2 className="font-bold text-3xl mb-4">{children}</h2>,
      h3: ({ children }) => <h3 className="font-semibold text-2xl mb-3">{children}</h3>,
      h4: ({ children }) => <h4 className="font-semibold text-xl mb-2">{children}</h4>,
      h5: ({ children }) => <h5 className="font-semibold text-lg mb-2">{children}</h5>,
      h6: ({ children }) => <h6 className="font-semibold text-base mb-2">{children}</h6>,
    },
  };

  return (
    <div className="min-h-screen mt-50 bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center gap-8">
        {/* Hero Section */}
        {page.hero && (
          <div className="w-full flex flex-col items-center gap-4">
            {page.hero.title && (
              <h1
                className={`font-bold text-6xl md:text-8xl leading-tight ${page.hero.titleAlignment === "center" ? "text-center" : "text-left"
                  }`}
              >
                {page.hero.title}
              </h1>
            )}
            {page.hero.subheader && (
              <p
                className={`text-lg md:text-xl ${page.hero.subheaderAlignment === "center" ? "text-center" : "text-left"
                  }`}
              >
                {page.hero.subheader}
              </p>
            )}
            {page.hero.ctaText && page.hero.ctaLink && (
              <button
                onClick={() =>
                  page.hero?.ctaLink && (window.location.href = page.hero.ctaLink)
                }
              >
                {page.hero.ctaText}
              </button>
            )}
            <div className="flex flex-row gap-4 mt-8 w-full justify-center flex-wrap">
              {page.hero.heroImageSM && (
                <img
                  src={page.hero.heroImageSM.asset.url}
                  alt="Hero SM"
                  className="w-1/3 rounded"
                />
              )}
              {page.hero.heroImageMD && (
                <img
                  src={page.hero.heroImageMD.asset.url}
                  alt="Hero MD"
                  className="w-1/3 rounded"
                />
              )}
              {page.hero.heroImageLG && (
                <img
                  src={page.hero.heroImageLG.asset.url}
                  alt="Hero LG"
                  className="w-1/3 rounded"
                />
              )}
            </div>
          </div>
        )}

        {/* Page Content */}
        {page.content?.map((block: PageContentBlock, i: number) => {
          if (block._type === "textBlock") {
            return (
              <div key={i} className="w-full">
                {block.heading && (
                  <div
                    className={`${block.headingAlignment === "center" ? "text-center" : "text-left"
                      }`}
                  >
                    {block.headingLevel === "h2" && (
                      <h2 className="font-bold text-3xl mb-4">{block.heading}</h2>
                    )}
                    {block.headingLevel === "h3" && (
                      <h3 className="font-semibold text-2xl mb-3">{block.heading}</h3>
                    )}
                    {block.headingLevel === "h4" && (
                      <h4 className="font-semibold text-xl mb-2">{block.heading}</h4>
                    )}
                    {block.headingLevel === "h5" && (
                      <h5 className="font-semibold text-lg mb-2">{block.heading}</h5>
                    )}
                    {block.headingLevel === "h6" && (
                      <h6 className="font-semibold text-base mb-2">{block.heading}</h6>
                    )}
                  </div>
                )}
                {block.body && (
                  <div
                    className={`${block.textAlignment === "center" ? "text-center" : "text-left"
                      }`}
                  >
                    <PortableText value={block.body} components={portableComponents} />
                  </div>
                )}
              </div>
            );
          }

          if (block._type === "imageBlock") {
            return (
              <div
                key={i}
                className={`w-full flex justify-${block.alignment === "center"
                    ? "center"
                    : block.alignment === "right"
                      ? "end"
                      : "start"
                  }`}
              >
                <img src={block.asset.url} alt={block.alt || ""} className="rounded mb-4" />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}