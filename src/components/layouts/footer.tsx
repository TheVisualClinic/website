import { socialFacebook, socialInstagram, socialLine, socialTiktok } from '@/assets/icons'
import { logoTextWhite } from '@/assets/logo'
import { MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socialMediaLinks = [
    {
      href: '#',
      icon: socialFacebook,
      alt: 'social icon Facebook',
      label: 'The Visual Clinic รัชโยธิน',
    },
    {
      href: '#',
      icon: socialInstagram,
      alt: 'social icon Instagram',
      label: 'The Visual Clinic',
    },
    {
      href: '#',
      icon: socialTiktok,
      alt: 'social icon Tiktok',
      label: 'The Visual Clinic',
    },
    {
      href: '#',
      icon: socialLine,
      alt: 'social icon LINE',
      label: '@thevisual_clinic',
    },
  ]

  // สร้าง array ของเมนู
  const menuLinks = [
    { href: '#', label: 'บริการ' },
    { href: '#', label: 'เกี่ยวกับเรา' },
    { href: '#', label: 'ทีมแพทย์' },
    { href: '#', label: 'โปรโมชั่น' },
    { href: '#', label: 'รีวิว' },
    { href: '#', label: 'บทความ' },
    { href: '#', label: 'ติดต่อเรา' },
  ]

  const contactInfo = [
    { icon: <PhoneIcon className='w-5 h-5' />, label: '084-194-5626' },
    { icon: <MailIcon className='w-5 h-5' />, label: 'thevisualclinic@gmail.com' },
  ]

  return (
    <footer className='bg-[#483E3B] text-white pt-14 text-lg md:text-sm'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div className='lg:col-span-2 text-[#E7DDD3] space-y-4'>
          <Image src={logoTextWhite} alt='The Visual Clinic Logo' width={200} />
          <p className='max-w-md'>
            Lorem ipsum dolor sit amet consectetur. Pretium vulputate malesuada amet
          </p>
          <p className='max-w-md'>
            Lorem ipsum dolor sit amet consectetur. Pretium vulputate malesuada amet
          </p>
        </div>

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>Social Media</h2>
          <ul className='space-y-4'>
            {socialMediaLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target='_blank'
                  className='group flex items-center gap-4 text-white/80 hover:text-white'
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    className='opacity-70 group-hover:opacity-100'
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>Menu</h2>
          <div className='grid grid-cols-2 gap-4'>
            <ul className='space-y-4 text-white/80'>
              {menuLinks.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-white/100'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='space-y-4 text-white/80'>
              {menuLinks.slice(4).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-white/100'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className='text-lg text-[#B8977F] mb-6'>Contact Us</h2>
          <ul className='space-y-4 text-white/80'>
            {contactInfo.map((item, index) => (
              <li key={index} className='flex items-center gap-3'>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='border-t border-[#665942] mt-8 py-6 text-center'>
        <p className='text-xs text-white'>
          Copyright © 2024 The Visual Clinic All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
