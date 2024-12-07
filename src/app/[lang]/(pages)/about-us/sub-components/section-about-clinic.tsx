'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function AboutClinicSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const sectionContent = {
    title_th:
      pageData?.about_clinic_title_th || 'คลินิกที่เน้นความเป็นเอกลักษณ์ของคุณให้ดูดีที่สุด',
    title_en:
      pageData?.about_clinic_title_en ||
      'Clinic that emphasizes your uniqueness to look your best.',
    description_th:
      pageData?.about_clinic_content_th ||
      'เราเชื่อว่าความงามที่แท้จริงเริ่มต้นจากความรู้สึกสบายใจและเชื่อมั่นในการดูแลตัวเอง \n คลินิกของเราจึงออกแบบในสไตล์ที่อบอุ่น มินิมอล ให้ความรู้สึกเหมือนได้เข้ามานั่งเล่นที่คาเฟ่ บรรยากาศเป็นกันเอง \n ให้ทุกครั้งที่คุณเข้ามารับการรักษาเป็นประสบการณ์ที่ผ่อนคลายและน่าประทับใจ',
    description_en:
      pageData?.about_clinic_content_en ||
      'We believe that true beauty begins with feeling comfortable and confident in taking care of yourself. \n Our clinic is designed in a warm, minimal style, giving you the feeling of visiting a cozy café. \n The friendly atmosphere ensures that each visit for treatment is a relaxing and memorable experience.',
    yearsOfService: pageData?.about_clinic_year_of_service || '2',
    allServices: pageData?.about_clinic_total_service || '30+',
    loyaltyCustomer: pageData?.about_clinic_satisfied_customers || '2000+',
  }

  return (
    <section className='py-12 md:py-16 bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-12 gap-6 items-center'>
          <div className='col-span-12 lg:col-span-4'>
            <Image
              src={
                pageData?.about_clinic_image_url
                  ? `${process.env.IMAGE_URL}${pageData?.about_clinic_image_url}`
                  : placeholderSrc
              }
              alt='The Visual Clinic'
              width={1200}
              height={1200}
              className='aspect-square object-cover rounded-xl'
              placeholder='blur'
              loading='lazy'
              blurDataURL={placeholderSrc}
            />
          </div>

          <div className='col-span-12 space-y-4 lg:col-span-8'>
            <h2 className='text-3xl font-normal text-[#483E3B] capitalize'>
              {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
            </h2>
            <p className='xl:whitespace-pre-line'>
              {activeLocale === 'th'
                ? sectionContent.description_th
                : sectionContent.description_en}
            </p>
            <div className='grid grid-cols-6 gap-6 text-center max-w-xl'>
              <div className='col-span-3 md:col-span-2'>
                <div className='text-[#AA7F65] text-[60px]'>{sectionContent.yearsOfService}</div>
                <p>{activeLocale === 'th' ? 'ปีที่เปิดบริการ' : 'Years of Service'}</p>
              </div>
              <div className='col-span-3 md:col-span-2'>
                <div className='text-[#AA7F65] text-[60px]'>{sectionContent.allServices}</div>
                <p>{activeLocale === 'th' ? 'บริการทั้งหมด' : 'Total Services'}</p>
              </div>
              <div className='col-span-6 md:col-span-2'>
                <div className='text-[#AA7F65] text-[60px]'>{sectionContent.loyaltyCustomer}</div>
                <p>{activeLocale === 'th' ? 'ลูกค้าที่ไว้ใจ' : 'Satisfied Customers'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
