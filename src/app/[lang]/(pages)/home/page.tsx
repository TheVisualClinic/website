'use client'

import HeroSection from './sub-components/section-hero'
import ServicesSection from './sub-components/section-services'
import AboutUsBanner from '@/components/base/about-us-banner'
import PromotionsBaseSection from '@/components/base/section-promotions'
import DoctorSection from './sub-components/section-doctor'
import ReviewsBanner from '@/components/base/reviews-banner'
import LastArticleBanner from '@/components/base/last-article-banner'

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <ServicesSection />
      <AboutUsBanner />
      <PromotionsBaseSection />
      <DoctorSection />
      <ReviewsBanner action={true} />
      <LastArticleBanner />
    </div>
  )
}
