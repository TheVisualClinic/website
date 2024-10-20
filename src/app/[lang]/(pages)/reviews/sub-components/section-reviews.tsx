'use client'

import { useEffect } from 'react'
import { StarRatingIcon } from '@/components/base/star-rating-icon'
import { useLocale } from 'next-intl'
import anime from 'animejs'

interface Review {
  id: number
  rating: number
  content: string
  author: string
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    content:
      '“ บริการดีมากค่ะ พนักงานให้คำแนะนำอย่างละเอียดและใส่ใจในทุกรายละเอียด รู้สึกประทับใจมากและเห็นผลลัพธ์ที่ชัดเจนหลังการใช้บริการ พนักงานทุกคนยิ้มแย้มแจ่มใส และทำให้รู้สึกผ่อนคลายระหว่างการให้บริการ จะกลับมาใช้บริการอีกแน่นอนค่ะ “',
    author: 'นามแฝง: มายด์',
  },
  {
    id: 2,
    rating: 4,
    content:
      '“ ประทับใจในบริการมากค่ะ พนักงานเป็นกันเองและมืออาชีพ ให้คำปรึกษาที่ดีและช่วยให้รู้สึกมั่นใจในการใช้บริการ นอกจากนี้ยังแนะนำวิธีการดูแลผิวหลังจากการทำอย่างละเอียด ทำให้รู้สึกว่าได้รับข้อมูลที่มีประโยชน์และมั่นใจในการดูแลตัวเองมากขึ้น ประสบการณ์ครั้งนี้ทำให้รู้สึกว่าคุ้มค่าจริง ๆ ค่ะ “',
    author: 'นามแฝง: ตี๋',
  },
  {
    id: 3,
    rating: 5,
    content:
      '“ ผลลัพธ์ที่ได้เกินความคาดหวังมากค่ะ ผิวดูสุขภาพดีขึ้นและริ้วรอยลดลงจริง ๆ ขอบคุณทีมงานทุกคนมากค่ะ บริการที่นี่ดีมาก ๆ ตั้งแต่การต้อนรับจนถึงการให้บริการจริง รู้สึกว่าตัวเองได้รับการดูแลเป็นพิเศษ และมั่นใจในการเลือกใช้บริการของที่นี่ค่ะ จะกลับมาใช้บริการอีกแน่นอนค่ะ “',
    author: 'นามแฝง: ออย',
  },
]

export default function ReviewsSection() {
  const activeLocale = useLocale()

  useEffect(() => {
    const cards = document.querySelectorAll('.review-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card.querySelectorAll('.star-rating-icon'),
          rotate: '1turn',
          delay: anime.stagger(100, { from: 'first' }),
          duration: 800,
          easing: 'easeInOutSine',
        })
      })
    })
  }, [])

  return (
    <section className='bg-[#E7DDD3]'>
      <div className='container py-16 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold'>รีวิวจากลูกค้าที่น่ารักของเรา</p>

        <div className='grid grid-cols-3 gap-6 max-w-[1080px] mx-auto'>
          {reviews.map((review) => (
            <div key={review.id} className='review-card bg-white/40 p-6 rounded-xl space-y-4'>
              <div className='flex items-center justify-center gap-2'>
                {Array.from({ length: 5 }, (_, index) => (
                  <StarRatingIcon
                    key={index}
                    className='star-rating-icon'
                    variant={index < review.rating ? 'filled' : 'outline'}
                  />
                ))}
              </div>
              <p className='text-sm'>{review.content}</p>
              <p className='font-medium text-[#877A6B]'>{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
