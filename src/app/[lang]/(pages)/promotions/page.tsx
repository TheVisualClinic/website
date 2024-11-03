'use client'

import HeaderSection from './sub-components/section-header'
import BannerSection from './sub-components/section-banner'
import PromotionsSection from './sub-components/section-promotions'
import SocialMediaSection from './sub-components/section-social-media'

export default function PromotionsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <BannerSection />
      <PromotionsSection />
      <SocialMediaSection />
    </div>
  )
}
