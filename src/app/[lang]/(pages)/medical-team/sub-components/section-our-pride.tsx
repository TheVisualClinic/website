'use client'

import Image from 'next/image'
import anime from 'animejs'
import { useState, useEffect, useRef } from 'react'
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

  const [numberOfGroup, setNumberOfGroup] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumberOfGroup(2)
      } else if (window.innerWidth < 1024) {
        setNumberOfGroup(3)
      } else {
        setNumberOfGroup(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sortedPrideItems = [...ourPrideList].sort((a, b) => a.id - b.id)
  const groupedPrideItems = []
  for (let i = 0; i < sortedPrideItems.length; i += numberOfGroup) {
    groupedPrideItems.push(sortedPrideItems.slice(i, i + numberOfGroup))
  }

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const groupRef = useRef<HTMLDivElement | null>(null)

  const handleGroupChange = (index: number) => {
    if (groupRef.current) {
      anime({
        targets: groupRef.current,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      })
    }
    setCurrentGroupIndex(index)
  }

  const sectionContent = {
    caption_th: 'Caption Mockup',
    caption_en: 'Caption Mockup',
    title_th: 'Title Mockup Text',
    title_en: 'Title Mockup Text',
  }

  return (
    <>
      <section className='py-12 md:py-16 bg-[#F9F6F3]'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-8 space-y-2'>
            <p className='text-[#9C6E5A] font-semibold capitalize'>
              {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
            </p>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mx-auto md:whitespace-pre-line'>
              {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
            </h3>
          </div>

          <div className='space-y-6' ref={groupRef}>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
              {groupedPrideItems[currentGroupIndex].map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image_url}
                      alt={activeLocale === 'th' ? item.our_pride_name_th : item.our_pride_name_en}
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
          </div>

          <div className='flex justify-center mt-8 gap-2'>
            {groupedPrideItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGroupChange(index)}
                className={`w-4 h-4 rounded-full ${
                  currentGroupIndex === index ? 'bg-[#9C6E5A]' : 'bg-[#CDB8A4]'
                } hover:bg-[#9C6E5A]/80 transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
