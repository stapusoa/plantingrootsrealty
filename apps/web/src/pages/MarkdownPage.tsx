import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useMarkdownPages } from "@/lib/useMarkdownPages";

export function MarkdownPage() {
  const { slug } = useParams();
  const pages = useMarkdownPages();
  const page = pages.find((p) => p.slug === slug);

  if (!page) return <p>Loading page...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{page.data.title}</h1>
      <ReactMarkdown>{page.content}</ReactMarkdown>
    </div>
  );
}