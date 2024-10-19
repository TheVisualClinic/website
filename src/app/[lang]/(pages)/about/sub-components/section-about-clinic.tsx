import { img1200x1200 } from '@/assets/images'
import { logoText } from '@/assets/logo'
import Image from 'next/image'

export default function AboutClinicSection() {
  return (
    <section className='py-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6 items-center'>
          <div className='col-span-4'>
            <Image src={img1200x1200} alt='' className='w-full object-cover rounded-xl' />
          </div>
          <div className='col-span-8 space-y-4'>
            <div className='pb-4'>
              <Image src={logoText} alt='The Visual Clinic' className='max-w-xs' />
            </div>
            <h2 className='text-3xl font-normal text-[#483E3B]'>
              คลินิกเสริมความงามที่เน้นความเป็นเอกลักษณ์ของคุณให้ดูดีที่สุด
            </h2>
            <p>
              The Visual Clinic เป็นคลินิกเสริมความงามและผิวหนัง ที่คุณสามารถไว้วางใจได้
              เรามุ่งมั่นที่จะช่วยให้คุณรู้สึกมั่นใจและสวยงามในแบบของคุณเอง
              ทีมแพทย์และผู้เชี่ยวชาญของเรามีประสบการณ์และความชำนาญสูง
              ใช้เทคนิคที่ทันสมัยและเทคโนโลยีที่ล้ำหน้า เพื่อให้คุณได้รับการดูแลที่ดีที่สุด
              และผลลัพธ์ที่ตอบโจทย์ความต้องการของคุณอย่างแท้จริง
            </p>
            <div className='grid grid-cols-3 text-center max-w-xl'>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>2</div>
                <p>ปีที่เปิดบริการ</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>12</div>
                <p>บริการทั้งหมด</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>200+</div>
                <p>ลูกค้าที่ไว้ใจ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
