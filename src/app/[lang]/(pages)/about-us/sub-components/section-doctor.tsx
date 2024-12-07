'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function DoctorSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const [doctorsList, setDoctorList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/doctor-list`
      )
      setDoctorList(response.data)
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

  const pageContent = {
    caption_th: pageData?.section_medical_team_caption_th || 'ทีมแพทย์',
    caption_en: pageData?.section_medical_team_caption_en || 'Medical Team',
    title_th:
      pageData?.section_medical_team_title_th ||
      'ทีมแพทย์ผู้มีประสบการณ์ \n พร้อมให้คำปรึกษาและดูแลคุณอย่างใกล้ชิด \n เพื่อให้คุณได้รับการดูแลที่ดีที่สุด',
    title_en:
      pageData?.section_medical_team_title_en ||
      'Our experienced medical team is ready to provide consultation and close care, \n ensuring you receive the best possible treatment.',
    qualifications_th:
      'M.D., M.Sc.Dermatology \n Fellowship in Laser & Cosmetic Dermatology, \n Florida International University',
    qualifications_en:
      'M.D., M.Sc.Dermatology \n Fellowship in Laser & Cosmetic Dermatology, \n Florida International University',
  }

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6 py-12 md:py-16'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>
            {activeLocale === 'th' ? pageContent.caption_th : pageContent.caption_en}
          </p>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-light text-center whitespace-pre-line'>
            {activeLocale === 'th' ? pageContent.title_th : pageContent.title_en}
          </h2>
        </div>
        <div
          className={`grid ${
            doctorsList.length === 1 ? 'justify-items-center' : 'grid-cols-1 md:grid-cols-2'
          } gap-8 mt-10`}
        >
          {doctorsList.map((doctor, index) => (
            <div key={index} className='text-center space-y-4'>
              <Image
                src={
                  doctor?.doctor_image_url
                    ? `${process.env.IMAGE_URL}${doctor?.doctor_image_url}`
                    : placeholderSrc
                }
                alt={activeLocale === 'th' ? doctor.nick_name_th || '' : doctor.nick_name_en}
                width={1200}
                height={1425}
                className='mx-auto w-[320px] rounded-2xl transform transition-transform duration-300 hover:rotate-3 cursor-pointer'
                placeholder='blur'
                loading='lazy'
                blurDataURL={placeholderSrc}
              />
              <div>
                <h3 className='text-xl text-[#9C6E5A] font-medium'>
                  {activeLocale === 'th' ? doctor.nick_name_th || '' : doctor.nick_name_en || ''}
                </h3>
                <p className='text-lg'>
                  {activeLocale === 'th'
                    ? doctor.name_prefix_th || ''
                    : doctor.name_prefix_en || ''}{' '}
                  {activeLocale === 'th' ? doctor.first_name_th || '' : doctor.first_name_en || ''}{' '}
                  {activeLocale === 'th' ? doctor.last_name_th || '' : doctor.last_name_th || ''}
                </p>
                <p className='text-[#877A6B] whitespace-pre-line text-sm'>
                  {activeLocale === 'th'
                    ? pageContent.qualifications_th
                    : pageContent.qualifications_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
