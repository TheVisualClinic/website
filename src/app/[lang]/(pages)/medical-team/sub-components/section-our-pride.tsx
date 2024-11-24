'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ourPrideList } from '@/assets/mock-data/our-pride-list'
import { useLocale } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function OurPrideSection() {
  const activeLocale = useLocale()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState<number | null>(null)

  const itemsPerGroup = 4
  const groupedPrideItems = []
  for (let i = 0; i < ourPrideList.length; i += itemsPerGroup) {
    groupedPrideItems.push(ourPrideList.slice(i, i + itemsPerGroup))
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return

    const currentX = e.touches[0].clientX
    const deltaX = currentX - startX

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1) // ปัดขวา
      } else if (deltaX < 0 && currentIndex < groupedPrideItems.length - 1) {
        setCurrentIndex((prev) => prev + 1) // ปัดซ้าย
      }
      setStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setStartX(null)
  }

  const sectionContent = {
    caption_th: 'Pride of Our Clinic',
    caption_en: 'Pride of Our Clinic',
    title_th: 'Your Satisfaction, Our Achievement',
    title_en: 'Your Satisfaction, Our Achievement',
  }

  return (
    <section
      className='py-12 md:py-16 bg-[#F9F6F3]'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mx-auto'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h3>
        </div>

        <div className='overflow-hidden relative'>
          <div
            className='flex transition-transform duration-300'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {groupedPrideItems.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className='flex-shrink-0 flex-grow-0 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'
              >
                {group.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Image
                        src={item.image_url}
                        alt={
                          activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en
                        }
                        width={1200}
                        height={1425}
                        className='object-cover rounded-xl transform transition-transform duration-300 hover:rotate-2 cursor-pointer'
                        aria-label={
                          activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en
                        }
                      />
                    </DialogTrigger>
                    <DialogContent className='md:min-w-[600px]'>
                      <DialogHeader>
                        <DialogTitle>
                          {activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en}
                        </DialogTitle>
                      </DialogHeader>
                      <div className='flex justify-center'>
                        <Image
                          src={item.image_url}
                          alt={
                            activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en
                          }
                          width={1200}
                          height={1200}
                          className='object-cover rounded-xl'
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-8 gap-2'>
          {groupedPrideItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? 'bg-[#9C6E5A]' : 'bg-[#CDB8A4]'
              } hover:bg-[#9C6E5A]/80 transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
