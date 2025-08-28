import { useState, useEffect } from "react";
import { getSanityClient } from "@/lib/cms/sanityClient";
import { PAGE_QUERY } from "@/lib/cms/queries";
import type { Page } from "@/lib/cms/types";

export function useSanityPage(slug?: string) {
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    if (!slug) return;

    const client = getSanityClient();

    async function fetchPage() {
      const result = await client.fetch(PAGE_QUERY, { slug });
      setPage(result);
    }

    fetchPage();
  }, [slug]);

  return page;
}