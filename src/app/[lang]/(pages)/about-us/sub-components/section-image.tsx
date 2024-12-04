'use client'

import Image from 'next/image'

export default function ImageSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'

  return (
    <div>
      <Image
        src={
          pageData?.header_image_url
            ? `${process.env.IMAGE_URL}${pageData?.header_image_url}`
            : placeholderSrc
        }
        alt='Contact Image Cover'
        width={1920}
        height={500}
        className='w-full h-[350px] md:h-[500px] object-cover'
        placeholder='blur'
        blurDataURL={placeholderSrc}
      />
    </div>
  )
}
