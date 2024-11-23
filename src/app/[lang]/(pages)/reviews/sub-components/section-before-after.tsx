'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { reviewsList } from '@/assets/mock-data/review-images'

export default function BeforeAfterSection() {
  const activeLocale = useLocale()

  // แยกข้อมูลตาม category_order
  const groupedByCategoryOrder = reviewsList.reduce((groups, item) => {
    const category = item.category_order
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {} as Record<number, typeof reviewsList>)

  const sectionContent = {
    title_th: 'รูปภาพเปรียบเทียบก่อนและหลังการใช้บริการ',
    title_en: 'Before and After Service Comparison Photos',
  }

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6 py-12 md:py-6 space-y-12'>
        <p className='text-[#9C6E5A] font-semibold capitalize text-center'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </p>

        {/* Render แต่ละกลุ่ม */}
        {Object.keys(groupedByCategoryOrder)
          .sort((a, b) => Number(a) - Number(b))
          .map((category) => {
            const categoryItems = groupedByCategoryOrder[Number(category)]
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [currentPage, setCurrentPage] = useState<number>(1)
            const itemsPerPage: number = 8
            const totalPages: number = Math.ceil(categoryItems.length / itemsPerPage)

            const handlePageChange = (page: number) => {
              setCurrentPage(page)
            }

            const paginatedImages = categoryItems.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )

            return (
              <div key={category}>
                <h3 className='text-2xl font-semibold text-center mb-6 bg-black/5 py-4 rounded-xl'>
                  {activeLocale === 'th'
                    ? categoryItems[0].category_th
                    : categoryItems[0].category_en}
                </h3>

                <div className='grid grid-cols-12 gap-4 md:gap-6'>
                  {paginatedImages.map((image) => (
                    <div key={image.id} className='col-span-12 md:col-span-6 xl:col-span-3'>
                      <Image
                        src={image.image}
                        alt={activeLocale === 'th' ? image.category_th : image.category_en}
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
            )
          })}
      </div>
    </section>
  )
}
