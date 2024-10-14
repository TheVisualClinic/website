import {
  socialFacebookSolid,
  socialInstagramSolid,
  socialLineSolid,
  socialTiktokSolid,
} from '@/assets/icons'
import { Separator } from '@/components/ui/separator'
import { Clock2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className='py-16 bg-[#F9F6F3] text-[#483E3B]'>
      <div className='container space-y-10'>
        <div>
          <p className='text-[#9C6E5A] font-semibold'>Caption</p>
          <h2 className='text-2xl max-w-3xl text-[#483E3B]'>
            Lorem ipsum dolor sit amet consectetur. Pretium vulputate malesuada amet at quis non.
          </h2>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div className='border border-[#473D3C] rounded-xl p-6 space-y-4'>
            <h3 className='text-2xl'>Contact Us</h3>
            <div className='flex items-center gap-4'>
              <MapPinIcon className='min-w-6 min-h-6' />
              <p>1845/10 1845/10 ถ. พหลโยธิน แขวงลาดยาว จตุจักร กรุงเทพมหานคร 10900</p>
            </div>
            <div className='flex items-center gap-4'>
              <PhoneIcon className='min-w-6 min-h-6' />
              <p>084-194-5626</p>
            </div>
            <div className='flex items-center gap-4'>
              <MailIcon className='min-w-6 min-h-6' />
              <p>thevisualclinic@gmail.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <Clock2Icon className='min-w-6 min-h-6' />
              <p>12.00-20.00 น. (หยุดทุกวันพุธ)</p>
            </div>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.1345118738378!2d100.56927081014231!3d13.829898397608032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d34a47fcaeb%3A0x48156cd397f1250e!2zVGhlIFZpc3VhbCBDbGluaWMg4Lij4Lix4LiK4LmC4Lii4LiY4Li04LiZ!5e0!3m2!1sth!2sth!4v1728897511198!5m2!1sth!2sth'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-xl'
            ></iframe>
          </div>
        </div>

        <div className='text-center'>
          <h2 className='text-2xl'>ติดตามข่าวสารและโปรโมชั่นได้ผ่านช่องทาง</h2>
          <Separator className='my-6 max-w-md mx-auto bg-[#483E3B]' />
          <div className='flex items-center gap-6 justify-center'>
            <Image src={socialFacebookSolid} alt='Socail Icon' />
            <Image src={socialTiktokSolid} alt='Socail Icon' />
            <Image src={socialInstagramSolid} alt='Socail Icon' />
            <Image src={socialLineSolid} alt='Socail Icon' />
          </div>
        </div>
      </div>
    </section>
  )
}
