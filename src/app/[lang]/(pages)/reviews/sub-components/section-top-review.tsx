'use client'

import { useEffect } from 'react'
import { topReviewImg } from '@/assets/images'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import anime from 'animejs'

const topReview = {
  image: topReviewImg,
  reviewContent:
    '“ บริการยอดเยี่ยมมากค่ะ พนักงานให้คำแนะนำอย่างละเอียดและมืออาชีพ รู้สึกผ่อนคลายและมั่นใจในการให้บริการ ทุกขั้นตอนมีการอธิบายอย่างชัดเจน ประทับใจมากค่ะ และจะกลับมาใช้บริการอีกแน่นอน บรรยากาศในคลินิกก็สะอาดและอบอุ่น ทำให้รู้สึกสบายใจในการเข้ามารับบริการ รู้สึกว่าตัวเองได้รับการดูแลอย่างดีทุกขั้นตอน และการติดตามผลหลังการรักษาก็ทำให้มั่นใจในคุณภาพของที่นี่มากขึ้น ขอบคุณทีมงานทุกคนที่ทำให้ประสบการณ์ครั้งนี้ยอดเยี่ยมจริง ๆ ค่ะ “',
  rating: 5,
  tags: ['ได้ตรงตามความต้องการ', 'บริการดีใส่ใจทุกขั้นตอน', 'คุณหมอเป็นมืออาชีพและเป็นกันเอง'],
  customerName: 'นามแฝง: แอนนา',
  caption: 'ประทับใจในบริการและผลลัพธ์ที่ได้ค่ะ',
}

export default function TopReviewsSection() {
  const activeLocale = useLocale()

  useEffect(() => {
    anime({
      targets: '.top-review-section .col-span-4, .top-review-section .col-span-8',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: anime.stagger(200),
    })
  }, [])

  return (
    <section className='bg-[#F9F6F3] py-16 top-review-section'>
      <div className='grid grid-cols-12 gap-6 max-w-[1080px] mx-auto'>
        <div className='col-span-4'>
          <Image
            src={topReview.image}
            alt='Top Review'
            className='w-full object-cover rounded-xl'
          />
        </div>
        <div className='col-span-8 px-4'>
          <div className='bg-white p-6 rounded-2xl space-y-4'>
            <p className='text-sm text-[#483E3B]'>{topReview.reviewContent}</p>
            <div className='flex items-center justify-end gap-2'>
              {Array.from({ length: 5 }, (_, index) => (
                <StarRatingIcon
                  key={index}
                  variant={index < topReview.rating ? 'filled' : 'outline'}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center py-4 gap-4'>
            {topReview.tags.map((tag, index) => (
              <div key={index} className='text-white bg-[#51463A] rounded-full py-2 px-4 text-xs'>
                {tag}
              </div>
            ))}
          </div>
          <div>
            <p className='text-[#483E3B] font-medium text-lg'>{topReview.customerName}</p>
            <p className='text-[#877A6B]'>{topReview.caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
