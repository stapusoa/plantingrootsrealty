import { clsx } from "clsx"
import { Image } from "@/components/image"
import { Badge } from "@/components/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"

import { cardStyles, getImageClasses, getContentAlignH, getContentAlignV } from "./styles"
import type { CardProps } from "./types"

const iconMap = {
  bed: Bed,
  bath: Bath,
  sqft: Square,
}

const formatPrice = (num?: number) =>
  typeof num === "number"
    ? new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
    : ""

export function Card({
  classname,
  children,
  size = "md",
  color = "primary",
  variant = "filled",
  badge,
  price,
  amenities,
  title,
  description,
  location,
  loading = false,
  image,
  tag = [],
  orientation = "vertical",
  imagePosition = "inline",
  alignH = "left",
  alignV = "top",
  ...props
}: CardProps) {
  const imageIsBackground = image && imagePosition === "background"
  const imageIsInline = image && imagePosition === "inline"

  return (
    <button
      className={clsx(
        cardStyles({ size, color, variant, orientation, alignH, alignV }),
        orientation === "horizontal" && size !== "sm" && "gap-6",
        classname
      )}
      type="button"
      {...props}
    >
      {imageIsInline && (
        <div
          className={clsx(
            "relative overflow-hidden",
            getImageClasses(imagePosition, orientation),
            size === "sm" ? "rounded-none" : "rounded-lg"
          )}
        >
          <Image
            src={image}
            alt={title || ""}
            height={300}
            className="w-full h-full object-cover"
          />
          {badge && (
            <Badge variant="secondary" className="absolute z-100 top-2 left-2 capitalize">{badge}</Badge>
          )}
        </div>
      )}

      <div
        className={clsx(
          size === "sm" ? "p-4 gap-3" : "p-0",
          "flex flex-col relative z-10",
          getContentAlignH(alignH),
          getContentAlignV(alignV),
          size !== "sm" && "gap-3" // apply larger gap between image and content at md/lg
        )}
      >
        {title && <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>}

        {location && (
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        )}

        {typeof price === "number" && <p className="text-2xl font-bold text-primary">{formatPrice(price)}</p>}

        {Array.isArray(amenities) && amenities.length > 0 && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {amenities.map((key) => {
              const Icon = iconMap[key]
              return (
                <div key={key} className="flex items-center">
                  {Icon && <Icon className="w-4 h-4 mr-1" />}
                  {key}
                </div>
              )
            })}
          </div>
        )}

        {description && <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>}

        {tag?.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {tag.slice(0, 3).map((t) => (
              <Badge key={t} variant="default" className="text-xs">
                {t}
              </Badge>
            ))}
            {tag.length > 3 && (
              <Badge variant="default" className="text-xs">
                +{tag.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {children}
      </div>

      {imageIsBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={image}
            alt={title || ""}
            className="w-full h-full object-cover opacity-20"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
      )}
    </button>
  )
}