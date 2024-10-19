import { img1200x1425 } from '@/assets/images'
import Image from 'next/image'

export default function DoctorSection() {
  return (
    <section className='py-16'>
      <div className='container'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>ทีมแพทย์ของเรา</p>
          <h3 className='text-2xl font-light text-gray-600 max-w-lg mx-auto'>
            ทีมแพทย์ผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและดูแลคุณอย่างใกล้ชิด
            เพื่อให้คุณได้รับการดูแลที่ดีที่สุด
          </h3>

          <div className='text-center space-y-8 pt-6'>
            <Image
              src={img1200x1425}
              alt='Doctor'
              className='mx-auto w-[320px] rounded-2xl transform transition-transform duration-300 hover:rotate-3 cursor-pointer'
            />
            <div>
              <h3 className='text-xl'>ชื่อเล่น</h3>
              <p>ชื่อ นามสกุล</p>
              <p className='text-[#877A6B]'>ความเชี่ยวชาญ / Caption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
