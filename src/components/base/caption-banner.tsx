import { Button } from '@/components/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { BannerContent } from '@/assets/mock-data/banner-content'
import { socialLink } from '@/assets/mock-data/contacts'

export default function CaptionBanner() {
  const activeLocale = useLocale()
  const tBtn = useTranslations('button')

  const sectionImage = '/storage/clinic-img-1.webp'

  return (
    <section className='relative'>
      <Image
        src={`${process.env.STORAGE_PROVIDER_URL}${sectionImage}`}
        alt='image cover'
        width={1920}
        height={500}
        className='w-full h-[500px] object-cover'
      />

      <div className='absolute inset-0 flex items-center justify-center px-4'>
        <div className='text-[#483E3B] bg-white/50 backdrop-blur-md rounded-xl p-6 space-y-4 max-w-[600px] px-4 md:px-6'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? BannerContent.caption_th : BannerContent.caption_en}
          </p>

          <p>
            {activeLocale === 'th' ? BannerContent.paragraph_1_th : BannerContent.paragraph_1_en}
          </p>
          <p>
            {activeLocale === 'th' ? BannerContent.paragraph_2_th : BannerContent.paragraph_2_en}
          </p>

          <div>
            <Link href={socialLink.line} target='_blank'>
              <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer capitalize'>
                {tBtn('booking')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
