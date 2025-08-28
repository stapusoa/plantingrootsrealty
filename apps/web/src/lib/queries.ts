export const PROPERTY_QUERY = `*[_type == "property"]{
  _id,
  title,
  description,
  address,
  price,
  bedrooms,
  bathrooms,
  sqft,
  dateAdded,
  type,
  features,
  "imageUrl": images[0].asset->url
}`

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