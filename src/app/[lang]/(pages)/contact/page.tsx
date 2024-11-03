'use client'

import ContactSection from './sub-components/section-contact'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'

export default function ContactPage() {
  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection />
      <ImageSection />
      <ContactSection />
    </div>
  )
}
