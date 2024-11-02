import AboutSection from './sub-components/section-about'
import AboutClinicSection from './sub-components/section-about-clinic'
import DoctorSection from './sub-components/section-doctor'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'

export default function AboutPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <AboutClinicSection />
      <AboutSection />
      <DoctorSection />
    </div>
  )
}
