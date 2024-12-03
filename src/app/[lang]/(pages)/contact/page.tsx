'use client'

import axios from 'axios'
import ContactSection from './sub-components/section-contact'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import { useEffect, useRef, useState } from 'react'

export default function ContactPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/contact`
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
      <ContactSection pageData={pageData} />
    </div>
  )
}
