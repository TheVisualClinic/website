'use client'

import Image from 'next/image'
import {
  certificateImg1,
  certificateImg2,
  certificateImg3,
  certificateImg4,
  certificateImg5,
  certificateImg6,
  certificateImg7,
  certificateImg8,
  certificateImg9,
  certificateImg10,
  certificateImg11,
  certificateImg12,
  certificateImg13,
  certificateImg14,
  certificateImg15,
  certificateImg16,
  certificateImg17,
  certificateImg18,
  certificateImg19,
  certificateImg20,
  certificateImg21,
} from '@/assets/certificate-images'
import { useLocale } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function CertificateSection() {
  const activeLocale = useLocale()

  const certificateList1 = [
    { caption: 'Clinic Certificate 1', image: certificateImg1 },
    { caption: 'Clinic Certificate 2', image: certificateImg2 },
    { caption: 'Clinic Certificate 3', image: certificateImg3 },
    { caption: 'Clinic Certificate 4', image: certificateImg4 },
    { caption: 'Clinic Certificate 5', image: certificateImg5 },
    { caption: 'Clinic Certificate 6', image: certificateImg6 },
    { caption: 'Clinic Certificate 7', image: certificateImg7 },
    { caption: 'Clinic Certificate 8', image: certificateImg8 },
    { caption: 'Clinic Certificate 9', image: certificateImg9 },
    { caption: 'Clinic Certificate 10', image: certificateImg10 },
  ]

  const certificateList2 = [
    { caption: 'Clinic Certificate 11', image: certificateImg11 },
    { caption: 'Clinic Certificate 12', image: certificateImg12 },
    { caption: 'Clinic Certificate 13', image: certificateImg13 },
    { caption: 'Clinic Certificate 14', image: certificateImg14 },
    { caption: 'Clinic Certificate 15', image: certificateImg15 },
    { caption: 'Clinic Certificate 16', image: certificateImg16 },
    { caption: 'Clinic Certificate 17', image: certificateImg17 },
    { caption: 'Clinic Certificate 18', image: certificateImg18 },
    { caption: 'Clinic Certificate 19', image: certificateImg19 },
    { caption: 'Clinic Certificate 20', image: certificateImg20 },
    { caption: 'Clinic Certificate 21', image: certificateImg21 },
  ]

  const sectionContent = {
    caption_th: 'ความภาคภูมิใจของเรา',
    caption_en: 'Our Pride',
    title_th:
      'เราได้รับการรับรองและความไว้วางใจจากสถาบันชั้นนำ \n เพื่อยืนยันคุณภาพและความเป็นมืออาชีพของเรา',
    title_en:
      'Certified and Trusted by Leading Institutions \n Ensuring Our Quality and Professionalism',
  }

  return (
    <section className='py-12 md:py-16 bg-[#E7DDD3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mx-auto md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h3>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
          {certificateList1.map((certificate, index) => (
            <div key={index} className='w-full'>
              <Image
                src={certificate.image}
                alt={certificate.caption}
                className='w-full h-auto object-cover'
              />
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-8'>
          {certificateList2.map((certificate, index) => (
            <div key={index} className='w-full'>
              <Image
                src={certificate.image}
                alt={certificate.caption}
                className='w-full h-auto object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
