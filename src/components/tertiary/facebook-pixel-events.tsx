'use client'

import React, { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        const pixelId1 = process.env.FACEBOOK_1_PIXEL_ID
        const pixelId2 = process.env.FACEBOOK_2_PIXEL_ID

        if (pixelId1) {
          ReactPixel.init(pixelId1)
          ReactPixel.pageView()
        } else {
          console.warn('Facebook Pixel ID 1 is not defined.')
        }

        if (pixelId2) {
          ReactPixel.init(pixelId2)
          ReactPixel.pageView()
        } else {
          console.warn('Facebook Pixel ID 2 is not defined.')
        }
      })
  }, [pathname, searchParams])

  return null
}
