import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { useMarkdownPages } from "@/lib/cms/hooks/useMarkdownPages"

export function Simple() {
  const { slug } = useParams() // URL param like /page/:slug
  const pages = useMarkdownPages()
  const page = pages.find(p => p.slug === slug)

  if (!page) return <p>Loading or page not found</p>

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{page.data.title}</h1>
      <ReactMarkdown>{page.content}</ReactMarkdown>
    </article>
  )
}