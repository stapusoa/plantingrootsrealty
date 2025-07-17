import type {
  CardSize,
  CardColor,
  CardVariant,
  CardBadge,
  CardAmenities,
  CardOrientation,
  CardImagePosition,
  CardHorizAlign,
  CardVertAlign
} from "./constants"

export interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string
  children?: React.ReactNode
  size?: CardSize
  color?: CardColor
  variant?: CardVariant
  badge?: CardBadge
  price?: number
  amenities?: CardAmenities[]
  title?: string
  description?: string
  location?: string
  loading?: boolean
  link?: boolean
  image?: string
  tag?: string[]
  orientation?: CardOrientation
  imagePosition?: CardImagePosition
  alignH?: CardHorizAlign
  alignV?: CardVertAlign
}