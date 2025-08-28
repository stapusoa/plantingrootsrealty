export const PAGE_QUERY = `*[_type == "page"]{
  _id,
  title,
  subheader,
  heroButtonText,
  heroButtonLink,
  "heroImageSM": heroImageSM.asset->url,
  "heroImageMD": heroImageMD.asset->url,
  "heroImageLG": heroImageLG.asset->url,
  body,
  slug
}`;