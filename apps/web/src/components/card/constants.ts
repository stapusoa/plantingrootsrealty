export type CardSize = "sm" | "md" | "lg"
export type CardColor = "primary" | "secondary" | "contrast" | "critical" | "neutral" | "promo"
export type CardVariant = "filled" | "outlined" | "ghost"
export type CardAmenities = "bed" | "bath" | "sqft"
export type CardBadge = "apartment" | "townhome" | "condo" | "house"
export type CardOrientation = "vertical" | "horizontal"
export type CardImagePosition = "inline" | "background"
export type CardHorizAlign = "center" | "left" | "right"
export type CardVertAlign = "center" | "top" | "bottom"

export const amenityIcons = {
  bed: "Bed",
  bath: "Bath",
  sqft: "Square"
} as const