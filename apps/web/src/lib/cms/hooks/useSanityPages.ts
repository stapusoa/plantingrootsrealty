import { useState, useEffect } from "react";
import { getSanityClient } from "@/lib/cms/sanityClient";
import { PAGE_QUERY } from "@/lib/cms/queries";
import type { Page } from "@/lib/cms/types";

export function useSanityPage(slug?: string) {
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;
    const client = getSanityClient();

    async function fetchPage() {
      try {
        const result: Page | null = await client.fetch(PAGE_QUERY, { slug });
        if (isMounted) setPage(result);
      } catch (err) {
        console.error("Failed to fetch page:", err);
        if (isMounted) setPage(null);
      }
    }

    fetchPage();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return page;
}