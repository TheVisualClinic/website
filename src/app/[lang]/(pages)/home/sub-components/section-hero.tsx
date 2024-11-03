'use client'

import { socialFacebookDark, socialInstagramDark, socialLineDark } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { PhoneIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { socialLink, clinicContact } from '@/assets/mock-data/contacts'
import { formatPhoneNumber } from '@/lib/phoneFormatter'

export default function HeroSection() {
  const router = useRouter()
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const sectionImage = '/storage/clinic-img-3.webp'
  const heroCard = {
    title_th: '" The Tailor-made Experience "',
    title_en: '" The Tailor-made Experience "',
    description_th:
      'เราเชื่อว่าความงามที่แท้จริงเริ่มต้นจากความรู้สึกสบายใจและเชื่อมั่นในการดูแลตัวเอง คลินิกของเราจึงออกแบบในสไตล์ที่อบอุ่น มินิมอล ให้ความรู้สึกเหมือนได้เข้ามานั่งเล่นที่คาเฟ่ บรรยากาศเป็นกันเอง ให้ทุกครั้งที่คุณเข้ามารับบริการ ได้รับประสบการณ์ที่ผ่อนคลายและน่าประทับใจ',
    description_en:
      'We believe that true beauty begins with feeling comfortable and confident in taking care of yourself. Our clinic is designed with a warm, minimal style, giving you the feeling of sitting in a cozy café. The friendly atmosphere ensures that every visit provides you with a relaxing and memorable experience.',
  }

  return (
    <section className='relative'>
      <div className='flex justify-center'>
        <Image
          src={`${process.env.STORAGE_PROVIDER_URL}${sectionImage}`}
          alt='home page hero image'
          width={1920}
          height={700}
          className='w-full h-[700px] object-cover'
        />
      </div>

      <div className='absolute top-0 left-0 w-full h-full flex items-center mt-[-50px] md:mt-0 text-[#483E3B]'>
        <div className='w-full md:w-3/4 lg:w-1/2 p-6 ml-0 md:ml-32'>
          <div className='bg-white/50 p-6 rounded-lg backdrop-blur-md max-w-lg space-y-6'>
            <div>
              <h3 className='text-4xl dancing-script-font'>
                {activeLocale === 'th' ? heroCard.title_th : heroCard.title_en}
              </h3>
            </div>
            <p>{activeLocale === 'th' ? heroCard.description_th : heroCard.description_en}</p>
            <div className='flex items-center gap-4'>
              <Link href={socialLink.line} target='_blank'>
                <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                  {tBtn('booking')}
                </Button>
              </Link>

              <Link href={`/${activeLocale}/about`}>
                <Button className='w-[120px] bg-white py-3 rounded-sm flex justify-center align-middle text-[#9C6E5A] hover:bg-[#E7DDD3] cursor-pointer border border-[#9C6E5A] capitalize'>
                  {tBtn('aboutUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#CDB8A4] relative z-30'>
        <div className='max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6 text-center'>
          <Link
            href={socialLink.facebook}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialFacebookDark} alt='Social Icon' width={24} />
            <p>The Visual Clinic {activeLocale === 'th' ? 'รัชโยธิน' : 'Ratchayotin'}</p>
          </Link>
          <Link
            href={socialLink.instagram}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialInstagramDark} alt='Social Icon' width={24} />
            <p>thevisual_clinic</p>
          </Link>
          <Link
            href={socialLink.line}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialLineDark} alt='Social Icon' width={24} />
            <p>@thevisual_clinic</p>
          </Link>
          <Link
            href={`tel:${clinicContact.phone}`}
            className='flex items-center md:justify-center gap-2'
          >
            <PhoneIcon className='w-[32px] h-[24px]' />
            <p>{formatPhoneNumber(clinicContact.phone)}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
