import HeroSection from './sub-components/section-hero'
import ServicesSection from './sub-components/section-services'

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <ServicesSection />
    </div>
  )
}
