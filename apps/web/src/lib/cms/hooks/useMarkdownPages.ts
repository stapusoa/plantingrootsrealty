import { useEffect, useState } from "react";
import matter from "gray-matter";

type Page = {
  slug: string;
  data: any;
  content: string;
};

export function useMarkdownPages(): Page[] {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    // This path should match the location of your markdown files relative to this file
    const imports = import.meta.glob("../content/pages/*.md", {
      query: "?raw",
      import: "default",
    });

    Promise.all(
      Object.entries(imports).map(async ([path, resolver]) => {
        const raw = (await resolver()) as string;
        const { data, content } = matter(raw);
        const slug = path.split("/").pop()?.replace(".md", "") || "";
        return { slug, data, content };
      })
    ).then((loadedPages) => {
      console.log("Resolved pages from glob:", loadedPages);
      setPages(loadedPages);
    });
  }, []);

  return pages;
}