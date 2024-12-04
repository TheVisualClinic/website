'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import anime from 'animejs'
import { useLocale } from 'next-intl'

export default function FaqSection({ serviceDetail }: any) {
  const activeLocale = useLocale()

  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        anime({
          targets: content,
          height: activeIndex === index ? content.scrollHeight : 0,
          opacity: activeIndex === index ? 1 : 0,
          easing: 'easeInOutQuad',
          duration: 500,
        })
      }
    })
  }, [activeIndex])

  const sectionContent = {
    caption_th: 'FAQs',
    caption_en: 'FAQs',
    title_th: 'คำถามที่พบบ่อย',
    title_en: 'Frequently Asked Questions',
  }

  return (
    <div className='py-12 bg-[#E7DDD3] px-4 md:px-6'>
      <div className='text-center mb-8 space-y-2'>
        <p className='text-[#9C6E5A] font-semibold'>
          {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
        </p>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-light text-[#483E3B]'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </h2>
      </div>

      <div className='max-w-[1080px] mx-auto border border-[#9C6E5A] rounded-xl bg-white/50 p-4 md:p-6 text-[#483E3B]'>
        {serviceDetail?.faq_list.map((faq: any, index: number) => (
          <div key={index} className='border-b border-[#483E3B] pb-4'>
            <div
              className='flex items-center gap-4 pt-4 cursor-pointer'
              onClick={() => toggleAccordion(index)}
            >
              <div className='p-2 rounded-lg bg-white/30 transition-all duration-300 hover:bg-white/100'>
                {activeIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
              <h3
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeIndex === index ? 'text-[#9C6E5A]' : 'text-[#483E3B]'
                }`}
              >
                {activeLocale === 'th' ? faq.title_th : faq.title_en}
              </h3>
            </div>
            <div
              ref={(el: any) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className='py-4 px-4 md:px-6 text-sm md:text-base'>
                <p>{activeLocale === 'th' ? faq.description_th : faq.description_en}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
