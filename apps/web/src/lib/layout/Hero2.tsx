'use client'

import React from 'react'
import type { HeroProps } from '@/lib/types2'
import type {
  OverlayVariant
} from '@/lib/constants2'
import { HERO_VARIANT_STYLES, HERO_ALIGNMENT_STYLES, HERO_CONTENT_STYLES, HERO_LAYOUT_STYLES, OVERLAY_STYLES, GALLERY_SIZE_STYLES } from '@/lib/styles2'
import { BackgroundImages } from '@/lib/layout/BG'
import { Image } from '@/components/image'

export const Hero: React.FC<HeroProps> = ({
  variant = 'fullscreen',
  fullHeight = 'screen',
  bg,
  overlays,
  alignment = 'center',
  layout = 'default',
  content,
  parallax = false,
  children,
}) => {
  return (
    <section
      className={`${HERO_VARIANT_STYLES[variant]} ${HERO_ALIGNMENT_STYLES[alignment]} ${fullHeight === 'screen' ? 'h-screen' : ''
        } relative flex flex-col w-full overflow-hidden`}
    >
      {/* Background images */}
      {bg && (
        <BackgroundImages
          imageSM={bg.images?.sm ?? ''}
          imageMD={bg.images?.md ?? ''}
          imageLG={bg.images?.lg ?? ''}
          alt={bg.alt}
          className={`${bg.className || ''} ${parallax ? 'bg-fixed' : ''}`}
        />
      )}

      {/* Overlays */}
      {overlays?.map((overlay: OverlayVariant, i) => (
        <div key={i} className={OVERLAY_STYLES[overlay]} />
      ))}

      {/* Content */}
      {content && (
        <div
          className={`
      ${HERO_CONTENT_STYLES.container} 
      ${HERO_ALIGNMENT_STYLES[alignment]}
      ${HERO_LAYOUT_STYLES[layout]} 
      ${content.className || ''}
    `}
        >
          {content.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-sm font-semibold mb-2">
              {content.badge}
            </span>
          )}
          <h1 className={HERO_CONTENT_STYLES.title}>{content.title}</h1>
          {content.subheader && <p className={HERO_CONTENT_STYLES.subheader}>{content.subheader}</p>}

          {/* Buttons */}
          {content.buttons && content.buttons.length > 0 && (
            <div className={HERO_CONTENT_STYLES.buttons}>
              {content.buttons.map((btn, idx) => (
                <button key={idx} onClick={btn.onClick} className={HERO_CONTENT_STYLES.button}>
                  {btn.text}
                </button>
              ))}
            </div>
          )}

          {/* Gallery */}
          {content.gallery && content.gallery.images.length > 0 && (
            <div
              className={`${HERO_CONTENT_STYLES.galleryWrapper} ${GALLERY_SIZE_STYLES[content.gallery.size || 'md']
                }`}
            >
              {content.gallery.images.map((img, idx) => (
                <Image key={idx} src={img} alt={`Gallery image ${idx + 1}`} className={HERO_CONTENT_STYLES.galleryImage} />
              ))}
            </div>
          )}

        </div>
      )}

      {/* Full-bleed children (e.g., wave separator) */}
      <div className="absolute bottom-0 left-0 right-0">{children}</div>

    </section>
  )
}