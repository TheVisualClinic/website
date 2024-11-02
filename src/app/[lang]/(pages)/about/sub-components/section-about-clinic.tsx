import { clinicImg2d1 } from '@/assets/clinic-images'
import { logoText } from '@/assets/logo'
import Image from 'next/image'

export default function AboutClinicSection() {
  return (
    <section className='py-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6 items-center'>
          <div className='col-span-4'>
            <Image src={clinicImg2d1} alt='' className='w-full object-cover rounded-xl' />
          </div>
          <div className='col-span-8 space-y-4'>
            <div className='pb-4'>
              <Image src={logoText} alt='The Visual Clinic' className='max-w-xs' />
            </div>
            <h2 className='text-3xl font-normal text-[#483E3B]'>
              คลินิกที่เน้นความเป็นเอกลักษณ์ของคุณให้ดูดีที่สุด
            </h2>
            <p>
              เราเชื่อว่าความงามที่แท้จริงเริ่มต้นจากความรู้สึกสบายใจและเชื่อมั่นในการดูแลตัวเอง
              คลินิกของเราจึงออกแบบในสไตล์ที่อบอุ่น มินิมอล
              ให้ความรู้สึกเหมือนได้เข้ามานั่งเล่นที่คาเฟ่ บรรยากาศเป็นกันเอง
              ให้ทุกครั้งที่คุณเข้ามารับการรักษาเป็นประสบการณ์ที่ผ่อนคลายและน่าประทับใจ
            </p>
            <div className='grid grid-cols-3 text-center max-w-xl'>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>2</div>
                <p>ปีที่เปิดบริการ</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>30+</div>
                <p>บริการทั้งหมด</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>2000+</div>
                <p>ลูกค้าที่ไว้ใจ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
