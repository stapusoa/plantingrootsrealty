export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  metaDescription,
  canonicalUrl,
  robots,
  h1,
  subheader {
    text,
    alignment
  },
  cta {
    text,
    url
  },
  body,
  images[]{
    _key,
    alt,
    asset->{
      url
    }
  }
}`;