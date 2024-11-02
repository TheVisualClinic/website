'use client'

import { doctorMeen } from '@/assets/doctor-images'
import { homeDoctorImg, homeDoctorImgTest } from '@/assets/images'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function DoctorSection() {
  const router = useRouter()
  const activeLocale = useLocale()

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container py-16 space-y-6'>
        <div className='text-center space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>ทีมแพทย์</p>
          <h2 className='text-3xl font-light mx-auto'>
            ทีมแพทย์ผู้มีประสบการณ์ <br />
            พร้อมให้คำปรึกษาและดูแลคุณอย่างใกล้ชิด <br />
            เพื่อให้คุณได้รับการดูแลที่ดีที่สุด
          </h2>
        </div>
        <div className='text-center space-y-8'>
          <Image
            src={doctorMeen}
            alt='Doctor'
            className='mx-auto w-[320px] rounded-2xl transform transition-transform duration-300 hover:rotate-3 cursor-pointer'
            onClick={() => {
              router.replace(`/${activeLocale}/medical-team`)
            }}
          />
          <div>
            <h3 className='text-xl'>หมอมีน</h3>
            <p>ธนวรรณ โชควัฒนคุปต์</p>
            <p className='text-[#877A6B]'>
              M.D., M.Sc.Dermatology <br />
              Fellowship in Laser & Cosmetic Dermatology, Florida International University
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
