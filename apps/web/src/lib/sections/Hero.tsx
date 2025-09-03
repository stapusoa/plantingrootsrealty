import React from "react"
import { Button } from "@/components/button/button"
import { BackgroundImages } from "@/lib/layout/BG"
import { Overlay } from "@/lib/layout/Overlay"
import clsx from "clsx"

import {
  heroWrapperClass,
  heroInnerClass,
  heroHeaderClass,
  heroTitleClass,
  heroSubheaderClass,
  heroButtonClass,
  heroBackgroundClass,
  heroBackgroundWrapperClass,
} from "@/lib/styles"

import type { HeroSectionProps } from "@/lib/types"

export function HeroSection({
  title,
  subheader,
  buttonText,
  onButtonClick,
  images,
  overlays,
  children,
}: HeroSectionProps & { children?: React.ReactNode }) {
  return (
    <div className={clsx(heroWrapperClass)}>
      <div className={clsx(heroBackgroundWrapperClass)}>
        <div className={clsx(heroBackgroundClass)}>
          {/* Background Images */}
          <BackgroundImages
            imageSM={images.imageSM}
            imageMD={images.imageMD}
            imageLG={images.imageLG}
          />

          {/* Overlays */}
          {overlays?.map((variant, i) => (
            <Overlay key={i} variant={variant} />
          ))}
        </div>
      </div>
      {/* Hero content */}
      <div className={clsx(heroInnerClass)} style={{ top: "calc(50% + 0.47998px)" }}>
        <div className={clsx(heroHeaderClass)}>
          <h1 className={heroTitleClass}>{title}</h1>
          <p className={heroSubheaderClass}>{subheader}</p>

          <div className="max-w-[1140px] w-full animate-fade-in-up mt-8">
            <div className="flex flex-col items-center justify-center w-full">
              <Button
                size="lg"
                onClick={onButtonClick}
                className={heroButtonClass}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Children (wave separator, etc.) */}
      {children && <div className="absolute bottom-0 left-0 right-0">{children}</div>}
    </div>
  )
}