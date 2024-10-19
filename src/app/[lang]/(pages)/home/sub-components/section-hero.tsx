'use client'

import { socialFacebookDark, socialInstagramDark, socialLineDark } from '@/assets/icons'
import { homeHeroImg } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { PhoneIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const activeLocale = useLocale()

  return (
    <section className='relative'>
      <div className='flex justify-center'>
        <Image
          src={homeHeroImg}
          alt='home page hero image'
          className='w-full h-[700px] object-cover'
        />
      </div>

      <div className='absolute top-0 left-0 w-full h-full flex items-center mt-[-50px] md:mt-0'>
        <div className='w-full md:w-3/4 lg:w-1/2 p-6 ml-0 md:ml-32'>
          <div className='bg-white/50 p-6 rounded-lg backdrop-blur-md max-w-lg space-y-6'>
            <div>
              <h3 className='text-4xl dancing-script-font text-gray-600'>
                {'"'} The Tailor-made Experience {'"'}
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum quo doloribus,
              similique voluptate perspiciatis sint laboriosam. Dignissimos placeat ipsum odio,
              similique excepturi provident voluptate asperiores eaque delectus commodi in?
            </p>
            <div className='flex items-center gap-4'>
              <Link href={'https://lin.ee/CyHa9b3'} target='_blank'>
                <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
                  จองนัดหมาย
                </Button>
              </Link>

              <Link href={`/${activeLocale}/about`}>
                <Button className='w-[120px] bg-white py-3 rounded-sm flex justify-center align-middle text-[#9C6E5A] hover:bg-[#E7DDD3] cursor-pointer border border-[#9C6E5A]'>
                  เกี่ยวกับเรา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#CDB8A4] relative z-30'>
        <div className='max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6 text-center'>
          <Link
            href={'https://www.facebook.com/thevisualclinic'}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialFacebookDark} alt='Social Icon' width={24} />
            <p>The Visual Clinic รัชโยธิน</p>
          </Link>
          <Link
            href={'https://www.instagram.com/thevisual_clinic/'}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialInstagramDark} alt='Social Icon' width={24} />
            <p>thevisual_clinic</p>
          </Link>
          <Link
            href={'https://lin.ee/CyHa9b3'}
            target='_blank'
            className='flex items-center md:justify-center gap-2'
          >
            <Image src={socialLineDark} alt='Social Icon' width={24} />
            <p>@thevisual_clinic</p>
          </Link>
          <div className='flex items-center md:justify-center gap-2'>
            <PhoneIcon className='w-[32px] h-[24px]' />
            <p>084-194-5626</p>
          </div>
        </div>
      </div>
    </section>
  )
}
