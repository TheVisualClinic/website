'use client'

import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import AboutClinicSection from './sub-components/section-about-clinic'
import AboutUsBanner from '@/components/base/about-us-banner'
import DoctorSection from './sub-components/section-doctor'
import PartnerBanner from '@/components/base/partner-banner'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function AboutPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/about-us`
      )
      setPageData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData()
    }
  }, [])

  return (
    <div className='bg-[#F9F6F3] pt-16'>
      <HeaderSection pageData={pageData} />
      <ImageSection pageData={pageData} />
      <AboutClinicSection pageData={pageData} />
      <AboutUsBanner />
      <DoctorSection pageData={pageData} />
      <PartnerBanner />
    </div>
  )
}
