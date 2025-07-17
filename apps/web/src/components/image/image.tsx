import React, { useState } from "react"
import { baseImageClass, loadingClass, fallbackClass, wrapperClass } from "./styles"
import { FALLBACK_IMAGE } from './constants'
import type { ImageProps } from "./types"

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc = FALLBACK_IMAGE,
  className = "",
  width,
  height,
  style,
  loading = "lazy",
  skeletonClassName,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  // If error, show fallback image
  const displayedSrc =
    errored
      ? fallbackSrc
      : typeof src === "string"
        ? src
        : src?.url || fallbackSrc;

  return (
    <div
      className={wrapperClass}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
        position: "relative",
      }}
    >
      {/* Skeleton overlay (shown only when not loaded yet) */}
      {!loaded && (
        <div
          className={skeletonClassName || loadingClass}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0, zIndex: 1 }}
        />
      )}

      <img
        src={displayedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={[
          baseImageClass,
          className,
          !loaded ? "opacity-0" : "opacity-100",
          errored ? fallbackClass : "",
        ].filter(Boolean).join(" ")}
        style={{
          transition: "opacity 0.3s",
          position: "relative",
          zIndex: 2,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        {...props}
      />
    </div>
  )
}
