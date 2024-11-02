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
    title: 'Discovery Pico',
    price: '12,000 .-',
    description:
      'Discovery Pico เลเซอร์ที่ช่วยในการรักษาจุดด่างดำ กระ ฝ้า และลบรอยสัก ด้วยพลังงานเลเซอร์ที่มีความแม่นยำสูง.',
    category: 'Device',
  },
  {
    id: 2,
    title: 'Ultraformer Ⅲ',
    price: '25,000 .-',
    description:
      'Ultraformer Ⅲ เป็นเทคโนโลยีอัลตราซาวด์ที่ช่วยในการยกกระชับผิวหน้าและร่างกายโดยไม่ต้องผ่าตัด.',
    category: 'Device',
  },
  {
    id: 3,
    title: 'DIODE',
    price: '15,000 .-',
    description:
      'DIODE เลเซอร์ที่ใช้ในการกำจัดขนอย่างมีประสิทธิภาพ ปลอดภัย และไม่ทำให้ผิวระคายเคือง.',
    category: 'Device',
  },
  {
    id: 4,
    title: 'Filler',
    price: '18,000 .-',
    description:
      'Filler เป็นการฉีดสารเติมเต็มเพื่อเพิ่มความชุ่มชื้น เติมเต็มร่องลึก และปรับรูปหน้าให้ดูอ่อนวัย.',
    category: 'สารเติมเต็ม',
  },
  {
    id: 5,
    title: 'Botox',
    price: '10,000 .-',
    description: 'Botox ใช้ในการลดเลือนริ้วรอยบนใบหน้าและช่วยในการปรับรูปหน้าให้ดูเรียวขึ้น.',
    category: 'สารเติมเต็ม',
  },
  {
    id: 6,
    title: 'Sculptra',
    price: '20,000 .-',
    description:
      'Sculptra ช่วยกระตุ้นการผลิตคอลลาเจนในผิว ทำให้ผิวกระชับและดูอ่อนวัยขึ้นอย่างเป็นธรรมชาติ.',
    category: 'สารเติมเต็ม',
  },
  {
    id: 7,
    title: 'IV',
    price: '7,500 .-',
    description:
      'IV Therapy เป็นการให้วิตามินและสารอาหารเข้าสู่ร่างกายโดยตรง เพื่อฟื้นฟูสุขภาพและเพิ่มความสดชื่นให้ผิว.',
    category: 'สารเติมเต็ม',
  },
  {
    id: 8,
    title: 'Acne Scar Solutions',
    price: '14,000 .-',
    description:
      'การรักษารอยแผลเป็นจากสิวโดยใช้เลเซอร์และเทคนิคพิเศษ เพื่อทำให้ผิวเรียบเนียนและลดรอยแผลเป็น.',
    category: 'การบริการ',
  },
  {
    id: 9,
    title: 'Melasma Solutions',
    price: '8,500 .-',
    description: 'การรักษาฝ้าด้วยเลเซอร์และผลิตภัณฑ์เฉพาะ เพื่อช่วยลดเลือนฝ้าและจุดด่างดำให้จางลง.',
    category: 'การบริการ',
  },
  {
    id: 10,
    title: 'Treatment',
    price: '5,000 .-',
    description: 'ทรีทเมนต์บำรุงผิวเพื่อฟื้นฟูและเติมเต็มความชุ่มชื้น ทำให้ผิวสุขภาพดีและสดใส.',
    category: 'การบริการ',
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
