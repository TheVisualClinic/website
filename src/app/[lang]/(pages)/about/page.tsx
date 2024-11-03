'use client'

import AboutSection from './sub-components/section-about'
import AboutClinicSection from './sub-components/section-about-clinic'
import DoctorSection from './sub-components/section-doctor'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import PartnerSection from './sub-components/section-partner'

export default function AboutPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <AboutClinicSection />
      <AboutSection />
      <DoctorSection />
      <PartnerSection />
    </div>
  )
}
