'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import { servicesMockup } from './mock-data'

export default function ServicesSection() {
  // Sort services by order and group into chunks of 4
  const sortedServices = [...servicesMockup].sort((a, b) => a.order - b.order)
  const groupedServices = []
  for (let i = 0; i < sortedServices.length; i += 4) {
    groupedServices.push(sortedServices.slice(i, i + 4))
  }

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const sectionRef = useRef(null)

  const handleGroupChange = (index: number) => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      })
    }
    setCurrentGroupIndex(index)
  }

  return (
    <section className='py-16 bg-[#F9F6F3]' ref={sectionRef}>
      <div className='container'>
        <div className='text-center mb-8'>
          <p className='text-[#9C6E5A] font-semibold'>บริการทั้งหมด</p>
          <h2 className='text-3xl font-light max-w-xl mx-auto text-[#483E3B]'>
            With our cutting-edge techniques and advanced cosmetic procedures.
          </h2>
        </div>

        <div className='space-y-6'>
          <div className='grid gap-6 grid-cols-4'>
            {groupedServices[currentGroupIndex].map((service, serviceIndex) => (
              <div key={service.id} className={serviceIndex % 2 === 0 ? 'pt-6' : ''}>
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                />
                <div className='p-2'>
                  <h3 className='text-2xl text-[#483E3B]'>{service.title}</h3>
                  <p className='text-[#9C6E5A]'>{service.price.toLocaleString('th-TH')}.-</p>
                  <p className='text-[#877A6B] line-clamp-2'>{service.description}</p>
                  <div className='flex justify-end py-2'>
                    <a
                      href={`#`}
                      className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                    >
                      <span>อ่านเพิ่มเติม</span>
                      <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-8 gap-2'>
          {groupedServices.map((_, index) => (
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
  )
}
