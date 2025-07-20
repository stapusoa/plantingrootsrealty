import * as React from "react"
import { cn } from "@/lib/utils"
import { clsx } from "clsx"
// import { Image } from "@/components/image"
import { Badge } from "@/components/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { cardStyles, getImageClasses, getContentAlignH, getContentAlignV } from "./styles"
import type { CardProps } from "./types"

type CardRootProps<T extends React.ElementType> = {
  as?: T
  className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">

export const CardRoot = React.forwardRef(
  <T extends React.ElementType = "div">(
    { as, className, ...props }: CardRootProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "div"
    return React.createElement(Component, { ref, className: cn(className), ...props })
  }
)

CardRoot.displayName = "CardRoot"

// Header for title/location/price
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-lg text-header line-clamp-1">{children}</h3>
}

export function CardLocation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center text-body text-sm">
      <MapPin className="w-4 h-4 mr-1" />
      {children}
    </div>
  )
}

export function CardPrice({ children }: { children: React.ReactNode }) {
  return <p className="text-2xl font-bold text-primary">{children}</p>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-1 pt-2">{children}</div>
}

type CardImageProps = {
  src: string;
  alt?: string;
  className?: string;
  background?: boolean;
  fill?: boolean;
};

export function CardImage({
  src,
  alt = "",
  className,
  background = false,
  fill = false,
}: CardImageProps) {
  return (
    <div
      className={clsx(
        fill ? "relative" : "",
        background ? "absolute inset-0 z-0 pointer-events-none" : "overflow-hidden",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          fill ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full object-cover",
          background && "opacity-20"
        )}
        style={background ? { filter: "brightness(0.8)" } : undefined}
      />
    </div>
  );
}

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
    <CardRoot
      className={clsx(
        cardStyles({ size, color, variant, orientation, alignH, alignV }),
        orientation === "horizontal" && size !== "sm" && "gap-6",
        classname
      )}
      {...props}
    >
      {imageIsInline && (
        <CardImage
          src={typeof image === "string" ? image : image?.url || ""}
          alt={title}
          className={clsx(getImageClasses(imagePosition, orientation), size === "sm" ? "rounded-none" : "rounded-lg")}
        />
      )}

      <CardContent
        className={clsx(
          size === "sm" ? "p-4 gap-3" : "p-0",
          "relative z-10",
          getContentAlignH(alignH),
          getContentAlignV(alignV),
          size !== "sm" && "gap-3"
        )}
      >
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {location && <CardLocation>{location}</CardLocation>}
          {typeof price === "number" && <CardPrice>{formatPrice(price)}</CardPrice>}
        </CardHeader>

        {Array.isArray(amenities) && amenities.length > 0 && (
          <div className="flex items-center gap-4 text-sm text-body">
            {amenities.map((amenity, idx) => {
              const key = typeof amenity === "string" ? amenity : amenity.icon
              const label = typeof amenity === "string" ? amenity : amenity.label
              const Icon = iconMap[key as keyof typeof iconMap]
              return (
                <div key={idx} className="flex items-center">
                  {Icon && <Icon className="w-4 h-4 mr-1" />}
                  {label}
                </div>
              )
            })}
          </div>
        )}

        {description && <p className="text-sm text-body line-clamp-2">{description}</p>}

        {tag?.length > 0 && (
          <CardFooter>
            {tag.slice(0, 3).map((t) => (
              <Badge key={t} variant="filled" color="neutral" className="text-xs">
                {t}
              </Badge>
            ))}
            {tag.length > 3 && (
              <Badge variant="filled" color="neutral" className="text-xs">
                +{tag.length - 3} more
              </Badge>
            )}
          </CardFooter>
        )}

        {children}
      </CardContent>

      {imageIsInline && badge && (
        <Badge variant="filled" color="default" className="absolute shadow-md z-100 top-2 left-2 capitalize">
          {badge}
        </Badge>
      )}

      {imageIsBackground && (
        <CardImage
          src={typeof image === "string" ? image : image?.url || ""}
          alt={title}
          background
        />
      )}
    </CardRoot>
  )
}