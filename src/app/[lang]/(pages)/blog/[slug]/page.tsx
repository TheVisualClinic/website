'use client'

import { img1600x900 } from '@/assets/images'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from 'lucide-react'
import LastArticleBanner from '@/components/base/last-article-banner'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className='pt-32 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-6 mb-12'>
        <Image
          src={img1600x900}
          alt='HIFU treatment image'
          className='w-full object-cover rounded-xl'
        />

        <div className='flex items-center gap-6 border-b pb-4 border-[#B8977F]'>
          <div>
            <Avatar className='w-14 h-14'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>TVC</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className='text-xl font-semibold text-[#9C6E5A]'>
              ชื่อจริง (ชื่อเล่น) คุณหมอ หรือ Admin ที่เขียน บทความนี้
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <span>เวลาอ่านโดยเฉลี่ย 5 นาที</span>
              <DotIcon />
              <span>20 10 2024</span>
            </div>
          </div>
        </div>

        <h1 className='text-2xl'>การดูแลตัวหลังทำ HIFU: เคล็ดลับเพื่อผลลัพธ์ที่ดีที่สุด</h1>
        <p>
          หลังจากทำ HIFU (High-Intensity Focused Ultrasound)
          การดูแลผิวอย่างเหมาะสมเป็นสิ่งสำคัญที่ช่วยให้คุณได้รับผลลัพธ์ที่ดีที่สุดและยืดอายุผลลัพธ์ให้ยาวนานขึ้น
          การรักษาด้วย HIFU ไม่ต้องการการพักฟื้นที่ยาวนาน
          แต่การดูแลตัวหลังทำยังคงเป็นสิ่งที่ควรให้ความสำคัญเพื่อป้องกันการระคายเคืองและส่งเสริมการสร้างคอลลาเจนให้มีประสิทธิภาพมากที่สุด
        </p>
        <h2 className='text-xl font-semibold'>1. หลีกเลี่ยงการสัมผัสผิวแรงๆ</h2>
        <p>
          หลังจากทำ HIFU ควรหลีกเลี่ยงการสัมผัสผิวบริเวณที่รักษาอย่างแรง เช่น การถูหรือการนวดผิวหนัง
          เพื่อป้องกันไม่ให้ผิวเกิดการระคายเคืองหรืออักเสบ
          เนื่องจากในช่วงแรกผิวอาจยังอ่อนแอและไวต่อการสัมผัส
        </p>
        <h2 className='text-xl font-semibold'>2. ใช้ผลิตภัณฑ์บำรุงผิวที่ให้ความชุ่มชื้น</h2>
        <p>
          การให้ความชุ่มชื้นกับผิวเป็นสิ่งสำคัญหลังการทำ HIFU
          เนื่องจากช่วยให้ผิวฟื้นฟูและสร้างคอลลาเจนได้ดีขึ้น
          แนะนำให้ใช้ผลิตภัณฑ์ที่ปราศจากสารระคายเคือง เช่น ครีมบำรุงที่มีส่วนผสมของไฮยาลูรอนิคแอซิด
          เพื่อรักษาความชุ่มชื้นให้กับผิว
        </p>
        <h2 className='text-xl font-semibold'>3. หลีกเลี่ยงการโดนแสงแดดโดยตรง</h2>
        <p>
          หลังการทำ HIFU ผิวอาจมีความไวต่อแสงแดดมากขึ้น ดังนั้นควรหลีกเลี่ยงการออกแดดโดยตรงในช่วง
          1-2 สัปดาห์แรก และควรใช้ครีมกันแดดที่มีค่า SPF สูง เพื่อปกป้องผิวจากรังสี UV
          ที่อาจทำให้เกิดความเสียหายและลดประสิทธิภาพของการรักษา
        </p>
        <h2 className='text-xl font-semibold'>4. หลีกเลี่ยงการใช้ผลิตภัณฑ์ที่มีสารระคายเคือง</h2>
        <p>
          ในช่วงแรกหลังการทำ HIFU ควรหลีกเลี่ยงการใช้ผลิตภัณฑ์ที่มีสารเคมีรุนแรง เช่น กรดผลไม้
          (AHA), เรตินอล หรือสครับขัดผิว เนื่องจากผิวอาจยังบอบบางและไวต่อการระคายเคือง
          การใช้ผลิตภัณฑ์เหล่านี้อาจทำให้ผิวเกิดการอักเสบหรือแสบแดงได้
        </p>
        <h2 className='text-xl font-semibold'>5. ดื่มน้ำมากๆ และรับประทานอาหารที่มีประโยชน์</h2>
        <p>
          การดื่มน้ำเพียงพอจะช่วยให้ผิวมีความชุ่มชื้นและช่วยในการฟื้นฟูหลังการทำ HIFU นอกจากนี้
          การรับประทานอาหารที่มีประโยชน์ โดยเฉพาะอาหารที่อุดมไปด้วยวิตามินและแร่ธาตุ
          จะช่วยส่งเสริมการสร้างคอลลาเจนและฟื้นฟูผิวให้ดียิ่งขึ้น
        </p>
        <h2 className='text-xl font-semibold'>6. งดการทำกิจกรรมที่ทำให้ผิวร้อน</h2>
        <p>
          หลังจากทำ HIFU ควรงดการทำกิจกรรมที่ทำให้ผิวร้อน เช่น การซาวน่า หรือการออกกำลังกายหนักๆ
          ในช่วง 1-2 วันแรก
          เนื่องจากความร้อนอาจส่งผลกระทบต่อการทำงานของคลื่นเสียงที่ถูกส่งลงไปในชั้นผิวหนังและลดประสิทธิภาพของการรักษา
        </p>
      </div>

      {/* Last Article Banner */}
      <LastArticleBanner />
    </div>
  )
}
