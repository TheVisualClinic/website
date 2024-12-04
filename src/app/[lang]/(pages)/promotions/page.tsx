'use client'

import HeaderSection from './sub-components/section-header'
import CaptionBanner from '@/components/base/caption-banner'
import PromotionsSection from './sub-components/section-promotions'
import SocialBanner from '@/components/base/social-banner'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function PromotionsPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/promotions`
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
      <CaptionBanner />
      <PromotionsSection />
      <SocialBanner />
    </div>
  )
}
