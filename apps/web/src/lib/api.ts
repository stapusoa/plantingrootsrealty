// web/src/lib/api.ts
export async function fetchPage(slug: string) {
  const res = await fetch(`/api/page/${slug}`);
  if (!res.ok) throw new Error("Page not found");
  return res.text(); // or JSON if you change your backend to return JSON
}