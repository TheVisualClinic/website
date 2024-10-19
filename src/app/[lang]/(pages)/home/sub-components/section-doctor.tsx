'use client'

import { homeDoctorImg, homeDoctorImgTest } from '@/assets/images'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function DoctorSection() {
  const router = useRouter()
  const activeLocale = useLocale()

  return (
    <section className='bg-[#F9F6F3]'>
      <Image src={homeDoctorImg} alt='Medical Team Cover' className='w-full' />

      <div className='container py-16 space-y-6'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>ทีมแพทย์</p>
          <h2 className='text-3xl font-light max-w-3xl mx-auto'>
            เราพร้อมดูแลคุณด้วยความใส่ใจและประสบการณ์ระดับมืออาชีพ
            เพื่อให้คุณได้รับการดูแลที่ดีที่สุด
          </h2>
        </div>
        <div className='text-center space-y-8'>
          <Image
            src={homeDoctorImgTest}
            alt='Doctor'
            className='mx-auto w-[320px] rounded-2xl transform transition-transform duration-300 hover:rotate-3 cursor-pointer'
            onClick={() => {
              router.replace(`/${activeLocale}/medical-team`)
            }}
          />
          <div>
            <h3 className='text-xl'>ชื่อเล่น</h3>
            <p>ชื่อ นามสกุล</p>
            <p className='text-[#877A6B]'>ความเชี่ยวชาญ / Caption</p>
          </div>
        </div>
      </div>
    </section>
  )
}
