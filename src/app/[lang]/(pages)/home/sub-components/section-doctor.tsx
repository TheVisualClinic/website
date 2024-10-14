import { homeDoctorImg, homeDoctorImgTest } from '@/assets/images'
import Image from 'next/image'

export default function DoctorSection() {
  return (
    <section className='bg-[#F9F6F3]'>
      <Image src={homeDoctorImg} alt='Medical Team Cover' className='w-full' />

      <div className='container py-16 space-y-6'>
        <div className='text-center'>
          <p className='text-[#9C6E5A] font-semibold'>ทีมแพทย์</p>
          <h2 className='text-3xl font-light max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur. Pretium vulputate malesuada amet at quis non.
          </h2>
        </div>
        <div className='text-center space-y-8'>
          <Image src={homeDoctorImgTest} alt='Doctor' className='mx-auto w-[320px] rounded-2xl' />
          <div>
            <h3 className='text-xl'>ชื่อเล่น</h3>
            <p>ชื่อ นามสกุล</p>
            <p className='text-[#877A6B]'>ความเชี่ยวชาญ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
