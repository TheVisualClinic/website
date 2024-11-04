'use client'

import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import TopReviewsSection from './sub-components/section-top-review'
import ReviewsBanner from '@/components/base/reviews-banner'
import BeforeAfterSection from './sub-components/section-before-after'
import SocialBanner from '@/components/base/social-banner'

export default function ReviewsPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <TopReviewsSection />
      <ReviewsBanner action={false} />
      <BeforeAfterSection />
      <SocialBanner />
    </div>
  )
}
