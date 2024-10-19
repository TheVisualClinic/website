'use client'

import { useEffect } from 'react'
import { img1200x1000 } from '@/assets/images'
import Image from 'next/image'
import anime from 'animejs'

export default function CertificateSection() {
  useEffect(() => {
    anime({
      targets: '.certificate-images-container',
      translateX: ['0%', '-100%'],
      duration: 20000,
      easing: 'linear',
      loop: true,
    })
  }, [])

  return (
    <section className='py-16 bg-[#E7DDD3]'>
      <div className='container'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold'>ความภาคภูมิใจของเรา</p>
          <h3 className='text-2xl font-light text-gray-600 max-w-lg mx-auto'>
            เราได้รับการรับรองและความไว้วางใจจากสถาบันชั้นนำ
            เพื่อยืนยันคุณภาพและความเป็นมืออาชีพของเรา
          </h3>
        </div>

        <div className='overflow-hidden'>
          <div className='flex certificate-images-container gap-6'>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <Image
                src={img1200x1000}
                alt='Certificate'
                className='w-full object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
