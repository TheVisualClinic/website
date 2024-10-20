'use client'

import { homePromotionImg } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const promotionDetails = [
  {
    title: 'ยกกระชับใบหน้าและลำคอด้วยเทคนิค HIFU',
    price: '34,900 .-',
    description:
      'โปรโมชั่นพิเศษสำหรับการยกกระชับใบหน้าและลำคอด้วยเทคโนโลยี HIFU ที่ช่วยกระตุ้นการสร้างคอลลาเจนใต้ผิวหนัง ทำให้ผิวกระชับและดูอ่อนเยาว์ ในราคาสุดพิเศษเพียง 34,900 บาท (จากปกติ 45,900 บาท)',
    benefits: [
      'เทคนิค HIFU: ช่วยยกกระชับใบหน้าและลำคอ',
      'กระตุ้นการสร้างคอลลาเจนใต้ผิวหนัง',
      'ราคาพิเศษ: 34,900 บาท (จากปกติ 45,900 บาท)',
      'ผ่อน 0% นาน 6 เดือน',
    ],
    link: 'https://lin.ee/CyHa9b3',
  },
  {
    title: 'ยกระดับผิวใส ไร้ริ้วรอย แลดูอ่อนเยาว์',
    price: '29,900 .-',
    description:
      'โปรโมชั่นพิเศษสำหรับการฟื้นฟูผิวและกระตุ้นคอลลาเจน ด้วยโปรแกรม Sculptra และโปรแกรม PicoTotale จากเครื่อง Discovery PICO ที่ได้รับการรับรองจาก FDA สหรัฐอเมริกา ทำให้ผิวหน้าของคุณเรียบเนียน ไร้ริ้วรอย และดูอ่อนเยาว์ ในราคาสุดพิเศษเพียง 29,900 บาท (จากปกติ 40,900 บาท)',
    benefits: [
      'โปรแกรม Sculptra: ช่วยยกกระชับผิว กระตุ้นการสร้างคอลลาเจน ลดเลือนริ้วรอย',
      'โปรแกรม PicoTotale: 1 ครั้ง ด้วยเครื่อง Discovery PICO ที่มีประสิทธิภาพในการรักษา',
      'ราคาพิเศษ: 29,900 บาท (จากปกติ 40,900 บาท)',
      'ผ่อน 0% นาน 6 เดือน',
    ],
    link: 'https://lin.ee/CyHa9b3',
  },
  {
    title: 'เพิ่มความชุ่มชื้นและสุขภาพดีให้ผิว',
    price: '19,900 .-',
    description:
      'โปรโมชั่นสำหรับการเพิ่มความชุ่มชื้นให้ผิวและฟื้นฟูสุขภาพผิวด้วยโปรแกรม HydraFacial และวิตามินบำรุงผิว ในราคาพิเศษเพียง 19,900 บาท (จากปกติ 25,900 บาท)',
    benefits: [
      'โปรแกรม HydraFacial: ทำความสะอาดและเติมความชุ่มชื้นให้ผิว',
      'วิตามินบำรุงผิว: ช่วยฟื้นฟูสุขภาพผิวให้สดใส',
      'ราคาพิเศษ: 19,900 บาท (จากปกติ 25,900 บาท)',
      'ผ่อน 0% นาน 3 เดือน',
    ],
    link: 'https://lin.ee/CyHa9b3',
  },
  {
    title: 'ฟื้นฟูผิวด้วยโปรแกรมเลเซอร์',
    price: '24,900 .-',
    description:
      'โปรแกรมเลเซอร์เพื่อฟื้นฟูสภาพผิว ลดเลือนจุดด่างดำ และปรับสีผิวให้สม่ำเสมอ ด้วยเครื่อง Discovery PICO ในราคาพิเศษเพียง 24,900 บาท (จากปกติ 32,900 บาท)',
    benefits: [
      'โปรแกรมเลเซอร์ Discovery PICO: ลดเลือนจุดด่างดำและปรับสีผิว',
      'ราคาพิเศษ: 24,900 บาท (จากปกติ 32,900 บาท)',
      'ผ่อน 0% นาน 4 เดือน',
    ],
    link: 'https://lin.ee/CyHa9b3',
  },
]

export default function PromotionsSection() {
  return (
    <section className='bg-[#F9F6F3] py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-24'>
        {promotionDetails.map((promotion, index) => (
          <div key={index} className='grid grid-cols-12 gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-4'>
                  <Image
                    src={homePromotionImg}
                    alt='Promotion Cover'
                    className='w-full rounded-xl'
                  />
                </div>
                <div className='col-span-8 px-6'>
                  <div className='space-y-4'>
                    <p className='text-[#9C6E5A] text-sm font-medium'>โปรโมชั่น</p>
                    <div>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {promotion.title}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>

                    <p>{promotion.description}</p>

                    <div>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={promotion.link} target='_blank'>
                        <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
                          จองนัดหมาย
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='col-span-8 px-6'>
                  <div className='space-y-4'>
                    <p className='text-[#9C6E5A] text-sm font-medium'>โปรโมชั่น</p>
                    <div>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {promotion.title}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl font-bold'>{promotion.price}</div>
                    </div>

                    <p>{promotion.description}</p>

                    <div>
                      {promotion.benefits.map((benefit, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link href={promotion.link} target='_blank'>
                        <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
                          จองนัดหมาย
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-span-4'>
                  <Image
                    src={homePromotionImg}
                    alt='Promotion Cover'
                    className='w-full rounded-xl'
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
