'use client'

import { useLocale } from 'next-intl'

export default function VDOSection() {
  const activeLocale = useLocale()

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6 py-12 md:py-16'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='max-w-[500px]'>
              <h2 className='text-3xl'>Headline</h2>
              <p className='text-lg md:text-xl'>Description</p>
              <p className='text-sm md:text-base mb-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo quia laudantium
                aspernatur natus ex officia minima repellendus nobis optio blanditiis molestiae
                dolorum doloremque consectetur numquam, porro eius distinctio quisquam?
              </p>
              <p className='text-sm md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo quia laudantium
                aspernatur natus ex officia minima repellendus nobis optio blanditiis molestiae
                dolorum doloremque consectetur numquam, porro eius distinctio quisquam?
              </p>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6'>
            {/* Youtube Preview */}
            <div className='aspect-video rounded-xl overflow-hidden'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/1po1T_XGqOE?si=QYflF6SsJfZ6dIco&autoplay=1&loop=1&playlist=1po1T_XGqOE&controls=0&modestbranding=1&mute=1&playsinline=1'
                title='YouTube video player'
                frameBorder='0'
                allow='autoplay'
                loading='lazy'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
