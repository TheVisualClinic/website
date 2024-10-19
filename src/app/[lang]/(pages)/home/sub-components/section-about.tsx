import { aboutIcon1, aboutIcon2, aboutIcon3 } from '@/assets/icons'
import { homeAboutImg } from '@/assets/images'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className='relative'>
      <div className='flex justify-center relative'>
        <Image
          src={homeAboutImg}
          alt='home page hero image'
          className='w-full h-[500px] object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8'>
          <div className='space-y-2 text-center'>
            <p className='text-[#9C6E5A] font-semibold'>เกี่ยวกับเรา</p>
            <h2 className='text-3xl font-light mx-auto'>The Visual Clinic</h2>
            <p className='text-center'>
              ปรับรูปหน้า โบท็อกซ์ ฟิลเลอร์ ร้อยไหม วิตามินผิว หน้าใส รักษาสิว ฝ้า กระ
              เลเซอร์กำจัดขน Ultraformer III
            </p>
          </div>

          <div className='bg-white grid grid-cols-3 p-4 gap-4 rounded-2xl text-center w-[1080px]'>
            <div className='flex flex-col gap-6 py-8'>
              <Image src={aboutIcon1} alt='icon' width={60} className='mx-auto' />
              <p>ดูแลโดยแพทย์ผู้เชี่ยวชาญโดยตรง</p>
            </div>
            <div className='flex flex-col gap-6 py-8 border-x border-[#473D3C] px-6'>
              <Image src={aboutIcon2} alt='icon' width={60} className='mx-auto' />
              <p>ทีมงานมืออาชีพ ให้คุณสวยได้ไร้ที่ติ</p>
            </div>
            <div className='flex flex-col gap-6 py-8'>
              <Image src={aboutIcon3} alt='icon' width={60} className='mx-auto' />
              <p>ทุกเครื่องมือแพทย์ของแท้ มีมาตรฐาน</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
