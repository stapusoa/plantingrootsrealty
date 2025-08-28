import { useEffect, useState } from "react";
import { getSanityClient } from "@/lib/cms/sanityClient";

export type Page = {
  _id: string;
  slug: string;
  title: string;
  subheader?: string;
  h1?: string;
  h2?: string;
  metaDescription?: string;
  body?: any; // Portable Text is usually an array, not string
  heroButtonText?: string;
  heroButtonLink?: string;
  heroImageSM?: string;
  heroImageMD?: string;
  heroImageLG?: string;
  ctaText?: string;
  ctaLink?: string;
};

export function useSanityPages() {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    async function fetchPages() {
      const client = getSanityClient();

      const query = `*[_type == "page"]{
        _id,
        "slug": slug.current,
        title,
        subheader,
        h1,
        h2,
        metaDescription,
        body,
        heroButtonText,
        heroButtonLink,
        "heroImageSM": heroImageSM.asset->url,
        "heroImageMD": heroImageMD.asset->url,
        "heroImageLG": heroImageLG.asset->url,
        ctaText,
        ctaLink
      }`;

      const result = await client.fetch<Page[]>(query);
      setPages(result);
    }

    fetchPages();
  }, []);

  return pages; // ✅ return array directly
}