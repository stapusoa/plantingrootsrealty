import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useMarkdownPages } from "@/lib/cms/hooks/useMarkdownPages";
import { HeroSection } from "@/lib/sections/HeroSection";

export function MarkdownPage() {
  const { slug } = useParams();
  const pages = useMarkdownPages();
  const page = pages.find((p) => p.slug === slug);

  console.log("Available pages:", pages.map((p) => p.slug));
  console.log("Current slug from URL:", slug);

  if (!page) return <p>Loading page...</p>;

  const {
    title,
    subheader,
    heroButtonText,
    heroButtonLink,
    heroImageSM,
    heroImageMD,
    heroImageLG,
  } = page.data;

  return (
    <div className="flex flex-col items-center relative size-full">
      <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 mb-0 relative size-full">
        {title && heroImageSM && (
          <HeroSection
            title={title}
            subheader={subheader}
            buttonText={heroButtonText}
            onButtonClick={() => {
              if (heroButtonLink?.startsWith("#")) {
                const target = document.querySelector(heroButtonLink);
                target?.scrollIntoView({ behavior: "smooth" });
              } else if (heroButtonLink) {
                window.location.href = heroButtonLink;
              }
            }}
            images={{
              imageSM: heroImageSM,
              imageMD: heroImageMD,
              imageLG: heroImageLG,
            }}
          />
        )}
        <div className="bg-white w-full relative flex flex-col gap-2 ">
              <div className="relative w-full bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-start">
          <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}