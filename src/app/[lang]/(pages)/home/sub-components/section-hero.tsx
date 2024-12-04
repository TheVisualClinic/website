'use client'

import { useEffect, useRef } from 'react'
import { socialFacebookDark, socialInstagramDark, socialLineDark } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { PhoneIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { formatPhoneNumber } from '@/lib/phoneFormatter'
import anime from 'animejs'
import { useAppSelector } from '@/app/[lang]/hooks'

export default function HeroSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'

  const activeLocale = useLocale()
  const tBtn = useTranslations('button')
  const contactData = useAppSelector((state) => state.websiteData.contactData)
  const socialData = useAppSelector((state) => state.websiteData.socialData)

  const heroCard = {
    title_th: pageData?.hero_slogan_th || '" The Tailor-made Experience "',
    title_en: pageData?.hero_slogan_en || '" The Tailor-made Experience "',
    description_th:
      pageData?.hero_content_th ||
      'เราเชื่อว่าความงามที่แท้จริงเริ่มต้นจากความรู้สึกสบายใจและเชื่อมั่นในการดูแลตัวเอง คลินิกของเราจึงออกแบบในสไตล์ที่อบอุ่น มินิมอล ให้ความรู้สึกเหมือนได้เข้ามานั่งเล่นที่คาเฟ่ บรรยากาศเป็นกันเอง ให้ทุกครั้งที่คุณเข้ามารับบริการ ได้รับประสบการณ์ที่ผ่อนคลายและน่าประทับใจ',
    description_en:
      pageData?.hero_content_en ||
      'We believe that true beauty begins with feeling comfortable and confident in taking care of yourself. Our clinic is designed with a warm, minimal style, giving you the feeling of sitting in a cozy café. The friendly atmosphere ensures that every visit provides you with a relaxing and memorable experience.',
  }

  const titleRef = useRef<HTMLDivElement | null>(null)
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (titleRef.current) {
      const textWrapper = titleRef.current
      textWrapper.innerHTML =
        textWrapper.textContent
          ?.split('')
          .map((char) => `<span class="letter">${char}</span>`)
          .join('') || ''

      anime({
        targets: '.letter',
        opacity: [0, 1],
        translateY: ['1em', '0em'],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(30),
      })
    }

    if (descriptionRef.current) {
      const textWrapper = descriptionRef.current
      textWrapper.innerHTML =
        textWrapper.textContent
          ?.split('')
          .map((char) => `<span class="letter-desc">${char}</span>`)
          .join('') || ''

      anime({
        targets: '.letter-desc',
        opacity: [0, 1],
        translateY: ['1em', '0em'],
        easing: 'easeOutExpo',
        duration: 600,
        delay: anime.stagger(5),
      })
    }

    if (buttonRef.current) {
      anime({
        targets: buttonRef.current.children,
        opacity: [0, 1],
        translateY: ['1em', '0em'],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(100),
      })
    }
  }, [])

  return (
    <section className='relative'>
      <Image
        src={
          pageData?.hero_image_url
            ? `${process.env.IMAGE_URL}${pageData?.hero_image_url}`
            : placeholderSrc
        }
        alt='Contact Image Cover'
        width={1920}
        height={700}
        className='w-full h-[calc(100vh-60px)] md:h-[600px] lg:h-[700px] object-cover'
        placeholder='blur'
        blurDataURL={placeholderSrc}
      />

      <div className='absolute top-0 left-0 w-full h-full flex items-center text-[#483E3B]'>
        <div className='container px-4 md:px-6 grid grid-cols-12'>
          <div className='col-span-12 bg-white/50 p-4 md:p-6 rounded-lg backdrop-blur-md max-w-lg space-y-4 md:space-y-6 xl:ml-24'>
            <div>
              <h3
                className='text-[28px] md:text-3xl lg:text-4xl dancing-script-font'
                ref={titleRef}
              >
                {activeLocale === 'th' ? heroCard.title_th : heroCard.title_en}
              </h3>
            </div>
            <p
              className='text-base md:text-lg break-words whitespace-normal max-w-full'
              ref={descriptionRef}
            >
              {activeLocale === 'th' ? heroCard.description_th : heroCard.description_en}
            </p>
            <div className='flex items-center gap-4' ref={buttonRef}>
              <Link href={socialData.social_line_link} target='_blank'>
                <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                  {tBtn('booking')}
                </Button>
              </Link>

              <Link href={`/${activeLocale}/about-us`}>
                <Button className='w-[120px] bg-white py-3 rounded-sm flex justify-center align-middle text-[#9C6E5A] hover:bg-[#E7DDD3] cursor-pointer border border-[#9C6E5A] capitalize'>
                  {tBtn('aboutUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#CDB8A4] relative z-30'>
        <div className='max-w-[1080px] mx-auto px-4 md:px-6 py-4 md:py-6 grid grid-cols-4 gap-4 md:gap-6 text-center'>
          <Link
            href={socialData.social_facebook_link}
            target='_blank'
            className='flex items-center gap-4 justify-center'
          >
            <Image src={socialFacebookDark} alt='Social Icon' width={28} />
            <p className='hidden lg:block'>{socialData.social_facebook_label}</p>
          </Link>

          <Link
            href={socialData.social_instagram_link}
            target='_blank'
            className='flex items-center gap-4 justify-center'
          >
            <Image src={socialInstagramDark} alt='Social Icon' width={28} />
            <p className='hidden lg:block'>{socialData.social_instagram_label}</p>
          </Link>

          <Link
            href={socialData.social_line_link}
            target='_blank'
            className='flex items-center gap-4 justify-center'
          >
            <Image src={socialLineDark} alt='Social Icon' width={28} />
            <p className='hidden lg:block'>{socialData.social_line_label}</p>
          </Link>

          <Link
            href={`tel:${contactData.phone_number}`}
            className='flex items-center gap-4 justify-center'
          >
            <PhoneIcon className='w-[28px] h-[28px]' />
            <p className='hidden lg:block'>{formatPhoneNumber(contactData.phone_number)}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
