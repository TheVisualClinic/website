import HeaderSection from './sub-components/section-header'
import BannerSection from './sub-components/section-banner'
import PartnerSection from './sub-components/section-partner'
import ServicesListSection from './sub-components/section-services-list'
import SocialMediaSection from './sub-components/section-social-media'
import PromotionsBaseSection from '@/components/base/section-promotions'

export default function ServicesPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <BannerSection />
      <ServicesListSection />
      <PartnerSection />
      <SocialMediaSection />
      <PromotionsBaseSection />
    </div>
  )
}
