import HeaderSection from './sub-components/section-header'
import NewCustomerPromotionSection from './sub-components/section-new-customer-promotion'
import PromotionsSection from './sub-components/section-promotions'
import ServicesListSection from './sub-components/section-services-list'
import SocialMediaSection from './sub-components/section-social-media'

export default function ServicesPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <NewCustomerPromotionSection />
      <ServicesListSection />
      <SocialMediaSection />
      <PromotionsSection />
    </div>
  )
}
