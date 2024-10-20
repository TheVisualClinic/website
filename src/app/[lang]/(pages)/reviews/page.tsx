import BeforeAfterSection from './sub-components/section-before-after'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import ReviewsSection from './sub-components/section-reviews'
import SocialMediaSection from './sub-components/section-social-media'
import TopReviewsSection from './sub-components/section-top-review'

export default function ReviewsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <TopReviewsSection />
      <ReviewsSection />
      <BeforeAfterSection />
      <SocialMediaSection />
    </div>
  )
}
