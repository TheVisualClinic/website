import axios from 'axios'
import { ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function ServicesListSection() {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  const [servicesList, setServiceList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/service-list`
      )
      setServiceList(response.data)
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

  const groupedServices = servicesList.reduce<{ [key: string]: any[] }>((acc, service) => {
    const labelGroup =
      activeLocale === 'th' ? service.category?.name_th || '' : service.category?.name_en || ''

    if (!acc[labelGroup]) {
      acc[labelGroup] = []
    }
    acc[labelGroup].push(service)
    return acc
  }, {})

  return (
    <section className='bg-[#F9F6F3] py-16 space-y-12'>
      {Object.entries(groupedServices).map(([labelGroup, services]) => (
        <div key={labelGroup} className='container px-4 md:px-6 text-[#483E3B] space-y-6'>
          <div className='text-center py-4'>
            <h2 className='text-3xl font-semibold'>{labelGroup}</h2>
          </div>

          <div className='max-w-[1008px] mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 justify-items-center'>
            {services.map((service, index) => (
              <div key={index} className='text-[#877A6B] w-full max-w-[320px]'>
                <Link
                  href={`/${activeLocale}/services/${
                    activeLocale === 'th' ? service.slug_th : service.slug_en
                  }`}
                >
                  <Image
                    src={
                      service?.cover_image_url
                        ? `${process.env.IMAGE_URL}${service?.cover_image_url}`
                        : placeholderSrc
                    }
                    alt={
                      activeLocale === 'th'
                        ? service.service_name_th || ''
                        : service.service_name_en || ''
                    }
                    width={1200}
                    height={1425}
                    className='rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer w-full object-cover'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </Link>
                <div className='px-2 py-4 space-y-2'>
                  <div>
                    <h3 className='text-[#483E3B] text-xl md:text-2xl lg:text-3xl font-medium truncate'>
                      {activeLocale === 'th'
                        ? service.service_name_th || ''
                        : service.service_name_en || ''}
                    </h3>
                    <div className='space-x-2 text-[#9C6E5A]'>
                      <span className='capitalize'>
                        {activeLocale === 'th' ? 'เริ่มต้นที่' : 'starting at'}
                      </span>
                      <span className='font-medium'>
                        {service.service_price.toLocaleString('th-TH')}.-
                      </span>
                    </div>
                  </div>
                  <p className='text-sm md:text-base line-clamp-2'>
                    {activeLocale === 'th'
                      ? service.cover_description_th || ''
                      : service.cover_description_en || ''}
                  </p>
                  <div className='flex justify-end'>
                    <Link
                      href={`/${activeLocale}/services/${
                        activeLocale === 'th' ? service.slug_th : service.slug_en
                      }`}
                      className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                    >
                      <span className='capitalize'>{tLink('readMore')}</span>
                      <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
