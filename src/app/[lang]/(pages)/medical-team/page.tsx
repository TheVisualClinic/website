'use client'

import { useEffect, useRef, useState } from 'react'
import CertificateSection from './sub-components/section-certificate'
import HeaderSection from './sub-components/section-header'
import ImageSection from './sub-components/section-image'
import MedicalTeamSection from './sub-components/section-medical-team'
import OurPrideSection from './sub-components/section-our-pride'
import axios from 'axios'

export default function MedicalTeamPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/medical-team`
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
      <MedicalTeamSection />
      <CertificateSection pageData={pageData} />
      <OurPrideSection pageData={pageData} />
    </div>
  )
}
