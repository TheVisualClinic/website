import { servicesHeaderImage } from '@/assets/services-page'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderImageSection() {
  return (
    <section className='relative'>
      <Image src={servicesHeaderImage} alt='ภาพหัวข้อ' />

      <div className='max-w-[1080px] grid grid-cols-2 absolute top-0 bottom-0 left-0 right-0 m-auto h-fit'>
        <div className='text-[#483E3B] bg-white/50 backdrop-blur-md rounded-xl p-6 space-y-4 h-fit'>
          <p className='text-[#9C6E5A] font-semibold'>ข้อเสนอพิเศษสำหรับลูกค้าใหม่</p>
          <h2 className='text-3xl'>รับส่วนลด 20% สำหรับการทำทรีทเมนท์ความงามครั้งแรกของคุณ</h2>
          <p>
            ยินดีต้อนรับลูกค้าใหม่ รับส่วนลด 20% สำหรับการทำทรีทเมนท์ความงามครั้งแรก
            มอบผิวที่สวยและสุขภาพดีให้คุณด้วยการดูแลจากผู้เชี่ยวชาญของเรา
            อย่าพลาดโอกาสพิเศษนี้ในการเริ่มต้นการดูแลตัวเอง
          </p>
          <div>
            <Link href={'https://lin.ee/CyHa9b3'} target='_blank'>
              <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
                จองนัดหมาย
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
