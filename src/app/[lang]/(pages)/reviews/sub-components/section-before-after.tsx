'use client'

import { useState } from 'react'
import { img1200x1200 } from '@/assets/images'
import Image, { StaticImageData } from 'next/image'

interface BeforeAfterImage {
  id: number
  imgSrc: StaticImageData
  altText: string
}

const beforeAfterImages: BeforeAfterImage[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  imgSrc: img1200x1200,
  altText: `Before After ${index + 1}`,
}))

export default function BeforeAfterSection() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage: number = 8
  const totalPages: number = Math.ceil(beforeAfterImages.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedImages = beforeAfterImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container py-16 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold'>รูปภาพเปรียบเทียบก่อนและหลังการใช้บริการ</p>

        <div className='grid grid-cols-12 gap-6'>
          {paginatedImages.map((image) => (
            <div key={image.id} className='col-span-3'>
              <Image
                src={image.imgSrc}
                alt={image.altText}
                className='w-full object-cover rounded-xl'
              />
            </div>
          ))}
        </div>

        <div className='flex justify-center space-x-4 mt-8'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1 ? 'bg-[#9C6E5A] text-white' : 'bg-white border'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
