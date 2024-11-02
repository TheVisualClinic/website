import { clinicImg9 } from '@/assets/clinic-images'
import {
  socialFacebookSolid,
  socialInstagramSolid,
  socialLineSolid,
  socialTiktokSolid,
} from '@/assets/icons'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialMediaSection() {
  return (
    <section className='relative'>
      <Image src={clinicImg9} alt='Banner' className='w-full h-[300px] object-cover' />

      <div className='absolute text-center top-0 left-0 right-0 bottom-0 m-auto bg-white/50 backdrop-blur-md h-fit max-w-[860px] py-8 rounded-2xl'>
        <h2 className='text-2xl'>ติดตามข่าวสารและโปรโมชั่นได้ผ่านช่องทาง</h2>
        <Separator className='my-6 max-w-md mx-auto bg-[#483E3B]' />
        <div className='flex items-center gap-6 justify-center'>
          <Link
            href={'https://www.facebook.com/thevisualclinic'}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialFacebookSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={'https://www.instagram.com/thevisual_clinic/'}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialInstagramSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={'https://www.tiktok.com/@thevisualclinic'}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialTiktokSolid} alt='Socail Icon' />
          </Link>
          <Link
            href={'https://lin.ee/CyHa9b3'}
            target='_blank'
            className='transition-all duration-300 hover:mt-[-8px]'
          >
            <Image src={socialLineSolid} alt='Socail Icon' />
          </Link>
        </div>
      </div>
    </section>
  )
}
