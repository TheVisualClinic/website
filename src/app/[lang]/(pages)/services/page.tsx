'use client'

import HeaderSection from './sub-components/section-header'
import CaptionBanner from '@/components/base/caption-banner'
import ServicesListSection from './sub-components/section-services-list'
import PartnerBanner from '@/components/base/partner-banner'
import SocialBanner from '@/components/base/social-banner'
import PromotionsBaseSection from '@/components/base/section-promotions'

export default function ServicesPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <CaptionBanner />
      <ServicesListSection />
      <PartnerBanner />
      <SocialBanner />
      <PromotionsBaseSection />
    </div>
  )
}
