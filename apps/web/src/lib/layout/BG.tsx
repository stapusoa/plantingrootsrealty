import { BGImage } from "@/components/image"
import { bgStyles } from "@/lib/styles"
import { DEFAULT_BACKGROUND_ALT } from "@/lib/constants"
import type { BGProps } from "@/lib/types"

export function BackgroundImages({
  imageSM,
  imageMD,
  imageLG,
  alt = DEFAULT_BACKGROUND_ALT,
  className,
}: BGProps) {
  return (
    <>
      {/* Large screens */}
      <BGImage
        alt={alt}
        src={imageLG}
        loading="lazy"
        className={`${bgStyles.lg} ${className ?? ""}`}
      />

      {/* Tablets */}
      <BGImage
        alt={alt}
        src={imageMD}
        loading="lazy"
        className={`${bgStyles.md} ${className ?? ""}`}
      />

      {/* Mobile — eager load to ensure quick display */}
      <BGImage
        alt={alt}
        src={imageSM}
        loading="eager"
        className={`${bgStyles.sm} ${className ?? ""}`}
      />
    </>
  )
}
