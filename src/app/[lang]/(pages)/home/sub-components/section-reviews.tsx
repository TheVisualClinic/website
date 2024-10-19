import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { Button } from '@/components/ui/button'
import { useLocale } from 'next-intl'
import Link from 'next/link'

export default function ReviewsSection() {
  const activeLocale = useLocale()

  return (
    <section className='bg-[#E7DDD3]'>
      <div className='container py-16 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold'>รีวิวจากผู้ใช้บริการ</p>

        <div className='grid grid-cols-3 gap-6 max-w-[1080px] mx-auto'>
          <div className='bg-white/40 p-6 rounded-xl'>
            <div className='flex items-center justify-center gap-2'>
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon variant='outline' />
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur et pretium iaculis
              pellentesque elementum in. Nec cum ullamcorper a velit fermentum cursus donec
              scelerisque. Aliquet lacus tempor quisque tempus mi ac. Tincidunt massa risus arcu
              pharetra. “
            </p>
            <p>คุณ ลูกค้า</p>
          </div>
          <div className='bg-white/40 p-6 rounded-xl'>
            <div className='flex items-center justify-center gap-2'>
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon variant='outline' />
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur et pretium iaculis
              pellentesque elementum in. Nec cum ullamcorper a velit fermentum cursus donec
              scelerisque. Aliquet lacus tempor quisque tempus mi ac. Tincidunt massa risus arcu
              pharetra. “
            </p>
            <p>คุณ ลูกค้า</p>
          </div>
          <div className='bg-white/40 p-6 rounded-xl'>
            <div className='flex items-center justify-center gap-2'>
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon />
              <StarRatingIcon variant='outline' />
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur et pretium iaculis
              pellentesque elementum in. Nec cum ullamcorper a velit fermentum cursus donec
              scelerisque. Aliquet lacus tempor quisque tempus mi ac. Tincidunt massa risus arcu
              pharetra. “
            </p>
            <p>คุณ ลูกค้า</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link href={`/${activeLocale}/reviews`}>
            <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
              ดูรีวิวทั้งหมด
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
