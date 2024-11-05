'use client'

import Image from 'next/image'
import { useState } from 'react'
import { beforeDataList } from '@/assets/mock-data/reviews'
import { useLocale } from 'next-intl'

interface BeforeAfterImage {
  id: number
  img_src: string
  alt_text: string
}

export default function BeforeAfterSection() {
  const activeLocale = useLocale()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage: number = 8
  const totalPages: number = Math.ceil(beforeDataList.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedImages = beforeDataList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const sectionContent = {
    title_th: 'รูปภาพเปรียบเทียบก่อนและหลังการใช้บริการ',
    title_en: 'Before and After Service Comparison Photos',
  }

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6 py-12 md:py-6 space-y-6 text-center'>
        <p className='text-[#9C6E5A] font-semibold capitalize'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </p>

        <div className='grid grid-cols-12 gap-4 md:gap-6'>
          {paginatedImages.map((image) => (
            <div key={image.id} className='col-span-12 md:col-span-6 xl:col-span-3'>
              <Image
                src={`${process.env.STORAGE_PROVIDER_URL}${image.img_src}`}
                alt={image.alt_text}
                width={1200}
                height={1200}
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
