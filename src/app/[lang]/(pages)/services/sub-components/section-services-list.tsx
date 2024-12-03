import { ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { servicesList } from '@/assets/mock-data/services'

type Service = {
  id: number
  order: number
  title_th: string
  title_en: string
  price: number
  description_th: string
  description_en: string
  imgSrc: string
  link: string
  labelGroup: string
}

export default function ServicesListSection() {
  const activeLocale = useLocale()
  const tLink = useTranslations('buttonLink')

  const groupedServices = servicesList.reduce<{ [key: string]: Service[] }>((acc, service) => {
    if (!acc[service.labelGroup]) {
      acc[service.labelGroup] = []
    }
    acc[service.labelGroup].push(service)
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
                <Link href={`/${activeLocale}/services/${service.id}`}>
                  <Image
                    src={`${process.env.MAIN_SERVICES_URL}${service.imgSrc}`}
                    alt={activeLocale === 'th' ? service.title_th : service.title_en}
                    width={1200}
                    height={1425}
                    className='rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer w-full object-cover'
                  />
                </Link>
                <div className='px-2 py-4 space-y-2'>
                  <div>
                    <h3 className='text-[#483E3B] text-xl md:text-2xl lg:text-3xl font-medium truncate'>
                      {activeLocale === 'th' ? service.title_th : service.title_en}
                    </h3>
                    <div className='space-x-2 text-[#9C6E5A]'>
                      <span className='capitalize'>
                        {activeLocale === 'th' ? 'เริ่มต้นที่' : 'starting at'}
                      </span>
                      <span className='font-medium'>{service.price.toLocaleString('th-TH')}.-</span>
                    </div>
                  </div>
                  <p className='text-sm md:text-base line-clamp-2'>
                    {activeLocale === 'th' ? service.description_th : service.description_en}
                  </p>
                  <div className='flex justify-end'>
                    <Link
                      href={`/${activeLocale}/services/${service.id}`}
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
