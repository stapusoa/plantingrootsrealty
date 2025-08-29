import { useState, useEffect } from "react";
import type { Page } from "@/lib/cms/types";

export function useSanityPage(slug?: string) {
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    async function fetchPage() {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const res = await fetch(`${API_URL}/page/${slug}`);
        if (!res.ok) throw new Error(`Failed to fetch page: ${res.status}`);

        const data: Page = await res.json();
        if (isMounted) setPage(data);
      } catch (err) {
        console.error("Error fetching page:", err);
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