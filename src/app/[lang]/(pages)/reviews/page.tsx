'use client'

import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import TopReviewsSection from './sub-components/section-top-review'
import ReviewsBanner from '@/components/base/reviews-banner'
import BeforeAfterSection from './sub-components/section-before-after'
import SocialBanner from '@/components/base/social-banner'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function ReviewsPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/reviews`
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
      <TopReviewsSection pageData={pageData} />
      <ReviewsBanner action={false} />
      <BeforeAfterSection pageData={pageData} />
      <SocialBanner />
    </div>
  )
}
