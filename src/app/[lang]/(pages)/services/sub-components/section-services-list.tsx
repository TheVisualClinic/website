import { img1200x1425 } from '@/assets/images'
import { ChevronRight } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type Service = {
  id: number
  title: string
  price: string
  description: string
  category: string
}

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Botulinum Toxin',
    price: '4,999 .-',
    description:
      'Botulinum Toxin ช่วยลดเลือนริ้วรอยและเส้นริ้วเล็ก ๆ โดยการผ่อนคลายกล้ามเนื้อใบหน้า ทำให้ผิวดูเรียบเนียนขึ้น',
    category: 'โบท็อกซ์ และฟิลเลอร์',
  },
  {
    id: 2,
    title: 'Dermal Filler',
    price: '8,999 .-',
    description:
      'Dermal Filler ช่วยเติมเต็มปริมาตรที่สูญเสียไปและเพิ่มความกระชับของใบหน้า ทำให้ดูอ่อนเยาว์และเป็นธรรมชาติ',
    category: 'โบท็อกซ์ และฟิลเลอร์',
  },
  {
    id: 3,
    title: 'Collagen Biostimulators',
    price: '12,000 .-',
    description:
      'Collagen Biostimulators กระตุ้นการผลิตคอลลาเจนธรรมชาติ ช่วยเพิ่มความยืดหยุ่นของผิวและลดริ้วรอย',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 4,
    title: 'Ultraformer',
    price: '15,000 .-',
    description:
      'Ultraformer เป็นการรักษาแบบไม่ผ่าตัดที่ช่วยยกกระชับและทำให้ผิวหนังแน่นขึ้นด้วยคลื่นเสียงที่มีความเข้มสูง',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 5,
    title: 'Discovery Pico',
    price: '10,000 .-',
    description:
      'Discovery Pico เป็นการรักษาด้วยเลเซอร์ขั้นสูงที่ช่วยลดจุดด่างดำและปรับปรุงผิวให้เนียนเรียบ',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 6,
    title: 'The Visual Treatment',
    price: '9,500 .-',
    description:
      'The Visual Treatment เป็นการบำบัดผิวหน้าที่ปรับแต่งเฉพาะเพื่อฟื้นฟูและทำให้ผิวดูสดใส',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 7,
    title: 'Skin Therapy',
    price: '7,500 .-',
    description:
      'Skin Therapy ประกอบด้วยการรักษาหลายรูปแบบเพื่อให้ความชุ่มชื้น บำรุง และฟื้นฟูผิว ให้ผิวดูสุขภาพดี',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 8,
    title: 'Acne Scar Solutions',
    price: '11,000 .-',
    description:
      'Acne Scar Solutions ช่วยลดเลือนรอยแผลเป็นจากสิว ทำให้ผิวดูเรียบเนียนและกระจ่างใสขึ้น',
    category: 'การดูแลผิวหน้า',
  },
  {
    id: 9,
    title: 'Diode Laser',
    price: '6,999 .-',
    description:
      'Diode Laser เป็นการกำจัดขนที่มีประสิทธิภาพ เหมาะสำหรับทุกสภาพผิวและให้ผลลัพธ์ที่ยาวนาน',
    category: 'ความงาม',
  },
  {
    id: 10,
    title: 'Intravenous Therapy',
    price: '3,999 .-',
    description:
      'Intravenous Therapy ให้วิตามินและสารอาหารที่จำเป็นเข้าสู่กระแสเลือดโดยตรง เพื่อสุขภาพที่ดีและพลังงานที่เพิ่มขึ้น',
    category: 'ความงาม',
  },
  {
    id: 11,
    title: 'Fat Therapy',
    price: '13,000 .-',
    description: 'Fat Therapy ช่วยสลายไขมันที่สะสมอยู่ ทำให้รูปร่างดูเพรียวและกระชับมากขึ้น',
    category: 'ความงาม',
  },
]

export default function ServicesListSection() {
  const activeLocale = useLocale()

  const groupedServices = servicesData.reduce<{ [key: string]: Service[] }>((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {})

  return (
    <section className='bg-[#F9F6F3] py-16 space-y-12'>
      {Object.entries(groupedServices).map(([category, services]) => (
        <div key={category} className='container text-[#483E3B] space-y-6'>
          <div className='text-center py-4'>
            <h2 className='text-3xl font-semibold'>{category}</h2>
          </div>

          <div className='max-w-[1008px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {services.map((service, index) => (
              <div key={index} className='text-[#877A6B] w-full max-w-[320px]'>
                <Link href={`/${activeLocale}/services/${service.id}`}>
                  <Image
                    src={img1200x1425}
                    alt='Cover test'
                    className='rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer w-full object-cover'
                  />
                </Link>
                <div className='px-2 py-4 space-y-2'>
                  <div>
                    <h3 className='text-[#483E3B] text-2xl'>{service.title}</h3>
                    <div className='space-x-2 text-[#9C6E5A]'>
                      <span>เริ่มต้นที่</span>
                      <span className='font-medium'>{service.price}</span>
                    </div>
                  </div>
                  <p className='text-sm line-clamp-2'>{service.description}</p>
                  <div className='flex justify-end'>
                    <Link
                      href={`/${activeLocale}/services/${service.id}`}
                      className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                    >
                      <span>อ่านเพิ่มเติม</span>
                      <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
