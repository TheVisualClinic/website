'use client'

import Image from 'next/image'

export default function ImageSection() {
  const sectionImage = '/storage/clinic-img-10.webp'

  return (
    <div>
      <Image
        src={`${process.env.STORAGE_PROVIDER_URL}${sectionImage}`}
        alt='Customer Reviews'
        width={1920}
        height={500}
        className='w-full h-[350px] md:h-[500px] object-cover'
      />
    </div>
  )
}
