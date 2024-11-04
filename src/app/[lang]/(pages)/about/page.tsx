'use client'

import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import AboutClinicSection from './sub-components/section-about-clinic'
import AboutUsBanner from '@/components/base/about-us-banner'
import DoctorSection from './sub-components/section-doctor'
import PartnerBanner from '@/components/base/partner-banner'

export default function AboutPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <AboutClinicSection />
      <AboutUsBanner />
      <DoctorSection />
      <PartnerBanner />
    </div>
  )
}
