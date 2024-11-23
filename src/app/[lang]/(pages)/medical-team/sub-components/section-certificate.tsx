'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { certificateList } from '@/assets/mock-data/certificate-list'
import { useState, useEffect } from 'react'

export default function CertificateSection() {
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: 'ใบประกาศนียบัตร',
    caption_en: 'Certificates',
    title_th:
      'เราได้รับการรับรองและความไว้วางใจจากสถาบันชั้นนำ \n เพื่อยืนยันคุณภาพและความเป็นมืออาชีพของเรา',
    title_en:
      'Certified and Trusted by Leading Institutions \n Ensuring Our Quality and Professionalism',
  }

  const [imageGroup1, setImageGroup1] = useState<any[]>([])
  const [imageGroup2, setImageGroup2] = useState<any[]>([])
  const [imageGroup3, setImageGroup3] = useState<any[]>([])

  const groupSetup = () => {
    setImageGroup1([certificateList[0]])
    setImageGroup2(certificateList.slice(1, 5))
    setImageGroup3(certificateList.slice(5))
  }

  // ใช้ useEffect เพื่อเรียก groupSetup เมื่อ component mount
  useEffect(() => {
    groupSetup()
  }, [])

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

        {/* Group 1 */}
        <div className='py-12'>
          {imageGroup1.map((item, index) => (
            <Image
              key={index}
              src={item.image_url}
              alt={activeLocale === 'th' ? item.certificate_name_th : item.certificate_name_en}
              width={1200}
              height={1200}
              className='object-cover aspect-square max-w-[400px] rounded-xl mx-auto'
            />
          ))}
        </div>

        {/* Group 2 */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto'>
          {imageGroup2.map((item, index) => (
            <Image
              key={index}
              src={item.image_url}
              alt={activeLocale === 'th' ? item.certificate_name_th : item.certificate_name_en}
              width={600}
              height={600}
              className='object-cover rounded-xl'
            />
          ))}
        </div>

        {/* Group 3 */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-[1200px] mx-auto'>
          {imageGroup3.map((item, index) => (
            <Image
              key={index}
              src={item.image_url}
              alt={activeLocale === 'th' ? item.certificate_name_th : item.certificate_name_en}
              width={400}
              height={400}
              className='object-cover rounded-xl'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
