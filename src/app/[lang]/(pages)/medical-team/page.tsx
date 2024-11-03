'use client'

import CertificateSection from './sub-components/section-certificate'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import MedicalTeamSection from './sub-components/section-medical-team'

export default function MedicalTeamPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <MedicalTeamSection />
      <CertificateSection />
    </div>
  )
}
