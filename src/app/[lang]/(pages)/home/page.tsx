import PromotionsBaseSection from '@/components/base/section-promotions'
import BlogsSection from './sub-components/blog-services'
import AboutSection from './sub-components/section-about'
import DoctorSection from './sub-components/section-doctor'
import HeroSection from './sub-components/section-hero'
import ReviewsSection from './sub-components/section-reviews'
import ServicesSection from './sub-components/section-services'

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PromotionsBaseSection />
      <DoctorSection />
      <ReviewsSection />
      <BlogsSection />
    </div>
  )
}
