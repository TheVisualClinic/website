'use client'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import HeroSection from './sub-components/section-hero'
import ServicesSection from './sub-components/section-services'
import AboutUsBanner from '@/components/base/about-us-banner'
import PromotionsBaseSection from '@/components/base/section-promotions'
import DoctorSection from './sub-components/section-doctor'
import ReviewsBanner from '@/components/base/reviews-banner'
import LastArticleBanner from '@/components/base/last-article-banner'
import VDOSection from './sub-components/section-vdo'
import ServicesSectionV2 from './sub-components/section-services-v2'

export default function HomePage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/home`
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
    <div className='flex flex-col'>
      <HeroSection pageData={pageData} />
      <DoctorSection pageData={pageData} />
      <VDOSection pageData={pageData} />
      <ReviewsBanner action={true} />
      {/* <ServicesSection pageData={pageData} /> */}
      <ServicesSectionV2 pageData={pageData} />
      <AboutUsBanner />
      <PromotionsBaseSection />
      <LastArticleBanner />
    </div>
  )
}
