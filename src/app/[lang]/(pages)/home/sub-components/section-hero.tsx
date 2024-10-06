import { homeHeroImg } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='relative'>
      {/* รูปภาพที่ใช้ next/image */}
      <Image src={homeHeroImg} alt='home page hero image' className='w-full h-auto' />

      {/* Card อยู่เหนือรูปภาพ */}
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='bg-white/50 p-6 rounded-lg backdrop-blur-md max-w-lg space-y-6'>
          <div>
            <h1 className='text-3xl'>“Be the best version of yourself”</h1>
            <h3 className='text-xl'>The Tailor-made Experience</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum quo doloribus,
            similique voluptate perspiciatis sint laboriosam. Dignissimos placeat ipsum odio,
            similique excepturi provident voluptate asperiores eaque delectus commodi in?
          </p>
          <div className='flex items-center gap-6 '>
            <div className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
              จองนัดหมาย
            </div>
          </div>
        </div>
      </div>

      {/* ข้อมูลอื่นๆ */}
      <div className='bg-[#CDB8A4]'>
        <div className='container'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptates quam soluta
          amet quidem, qui dolorem cupiditate ullam nam harum dignissimos magni temporibus culpa est
          impedit fugit, ducimus, eos tempore!
        </div>
      </div>
    </section>
  )
}
