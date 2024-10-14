import PromotionBanner from './sub-components/promotion-banner'
import HeaderSection from './sub-components/section-header'

export default function PromotionsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <PromotionBanner />
    </div>
  )
}
