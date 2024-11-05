'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { doctorsList } from '@/assets/mock-data/doctors'

export default function DoctorSection() {
  const router = useRouter()
  const activeLocale = useLocale()

  const pageContent = {
    caption_th: 'ทีมแพทย์',
    caption_en: 'Medical Team',
    title_th:
      'ทีมแพทย์ผู้มีประสบการณ์ \n พร้อมให้คำปรึกษาและดูแลคุณอย่างใกล้ชิด \n เพื่อให้คุณได้รับการดูแลที่ดีที่สุด',
    title_en:
      'Our experienced medical team is ready to provide consultation and close care, \n ensuring you receive the best possible treatment.',
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
                src={`${process.env.STORAGE_PROVIDER_URL}${doctor.image}`}
                alt={activeLocale === 'th' ? doctor.name_th : doctor.name_en}
                className='mx-auto w-[320px] rounded-2xl transform transition-transform duration-300 hover:rotate-3 cursor-pointer'
                width={1200}
                height={1425}
                onClick={() => {
                  router.replace(`/${activeLocale}/medical-team`)
                }}
              />
              <div>
                <h3 className='text-xl text-[#9C6E5A]'>
                  {activeLocale === 'th' ? doctor.name_th : doctor.name_en}
                </h3>
                <p className='text-lg'>
                  {activeLocale === 'th' ? doctor.full_name_th : doctor.full_name_en}
                </p>
                <p className='text-[#877A6B] whitespace-pre-line text-sm'>
                  {activeLocale === 'th' ? doctor.qualifications_th : doctor.qualifications_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
