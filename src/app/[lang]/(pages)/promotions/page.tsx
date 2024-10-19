import HeaderSection from './sub-components/section-header'
import NewCustomerPromotionSection from './sub-components/section-new-customer-promotion'
import PromotionsSection from './sub-components/section-promotions'
import SocialMediaSection from './sub-components/section-social-media'

export default function PromotionsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <NewCustomerPromotionSection />
      <PromotionsSection />
      <SocialMediaSection />
    </div>
  )
}
