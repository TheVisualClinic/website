import { Button } from '@/components/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { promotionBanner } from '@/assets/mock-data/promotion-banner'

export default function NewCustomerPromotionSection() {
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

      <div className='max-w-[600px] grid grid-cols-1 absolute top-0 bottom-0 left-0 right-0 m-auto h-fit'>
        <div className='text-[#483E3B] bg-white/50 backdrop-blur-md rounded-xl p-6 space-y-4 h-fit'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? promotionBanner.caption_th : promotionBanner.caption_en}
          </p>
          <h2 className='text-3xl'>
            {activeLocale === 'th' ? promotionBanner.title_th : promotionBanner.title_en}
          </h2>
          <p>
            {activeLocale === 'th'
              ? promotionBanner.description_th
              : promotionBanner.description_en}
          </p>
          <div>
            <Link href={'https://lin.ee/CyHa9b3'} target='_blank'>
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
