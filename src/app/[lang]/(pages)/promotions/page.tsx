'use client'

import HeaderSection from './sub-components/section-header'
import CaptionBanner from '@/components/base/caption-banner'
import PromotionsSection from './sub-components/section-promotions'
import SocialBanner from '@/components/base/social-banner'

export default function PromotionsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <CaptionBanner />
      <PromotionsSection />
      <SocialBanner />
    </div>
  )
}
