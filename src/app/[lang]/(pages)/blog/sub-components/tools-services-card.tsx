'use client'

import axios from 'axios'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function ToolsServicesCard() {
  const activeLocale = useLocale()
  const router = useRouter()

  const [servicesList, setServicesList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/about-our-services`
      )
      setServicesList(response.data)
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
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>
          {activeLocale == 'th' ? 'เกี่ยวกับบริการ' : 'About Our Services'}
        </h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>
      <div className='space-y-2 text-sm max-h-[250px] overflow-auto'>
        {servicesList.map((service, index) => (
          <div
            key={index}
            className='py-1 px-2 rounded text-gray-500 transition-all duration-300 hover:bg-gray-100 cursor-pointer hover:text-gray-800'
            onClick={() => {
              router.replace(
                `/${activeLocale}/services/${
                  activeLocale === 'th' ? service.slug_th : service.slug_en
                }`
              )
            }}
          >
            {activeLocale === 'th' ? service.service_name_th : service.service_name_en}
          </div>
        ))}
      </div>
    </div>
  )
}
