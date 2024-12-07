'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function CertificateSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const sectionContent = {
    caption_th: pageData?.section_certificates_caption_th || 'ใบประกาศนียบัตร',
    caption_en: pageData?.section_certificates_caption_en || 'Certificates',
    title_th:
      pageData?.section_certificates_title_th ||
      'เราได้รับการรับรองและความไว้วางใจจากสถาบันชั้นนำ \n เพื่อยืนยันคุณภาพและความเป็นมืออาชีพของเรา',
    title_en:
      pageData?.section_certificates_title_en ||
      'Certified and Trusted by Leading Institutions \n Ensuring Our Quality and Professionalism',
  }

  const [imageGroup1, setImageGroup1] = useState<any[]>([])
  const [imageGroup2, setImageGroup2] = useState<any[]>([])

  const groupSetup = () => {
    if (pageData?.certificates) {
      setImageGroup1(pageData?.certificates.slice(0, 4))
      setImageGroup2(pageData?.certificates.slice(4))
    }
  }

  useEffect(() => {
    groupSetup()
  }, [pageData])

  return (
    <section className='py-12 md:py-16 bg-[#E7DDD3]'>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8 space-y-2'>
          <p className='text-[#9C6E5A] font-semibold capitalize'>
            {activeLocale === 'th' ? sectionContent.caption_th : sectionContent.caption_en}
          </p>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mx-auto md:whitespace-pre-line'>
            {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
          </h3>
        </div>

        <div className='mb-8'>
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <Image
                  src={
                    pageData?.section_certificates_main_image_url
                      ? `${process.env.IMAGE_URL}${pageData?.section_certificates_main_image_url}`
                      : placeholderSrc
                  }
                  alt='The Visual Clinic Certificate'
                  width={1200}
                  height={1200}
                  className='object-cover aspect-square md:max-w-[400px] rounded-xl mx-auto transform transition-transform duration-300 hover:rotate-2 cursor-pointer'
                  placeholder='blur'
                  loading='lazy'
                  blurDataURL={placeholderSrc}
                />
              </div>
            </DialogTrigger>
            <DialogContent className='md:min-w-[600px] lg:min-w-[750px]'>
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>
              <div className='flex justify-center'>
                <Image
                  src={
                    pageData?.section_certificates_main_image_url
                      ? `${process.env.IMAGE_URL}${pageData?.section_certificates_main_image_url}`
                      : placeholderSrc
                  }
                  alt='The Visual Clinic Certificate'
                  width={1200}
                  height={1200}
                  className='object-cover rounded-xl'
                  placeholder='blur'
                  loading='lazy'
                  blurDataURL={placeholderSrc}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Group 1 */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto'>
          {imageGroup1?.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Image
                  src={
                    item.image_url ? `${process.env.IMAGE_URL}${item.image_url}` : placeholderSrc
                  }
                  alt='The Visual Clinic Certificate'
                  width={600}
                  height={600}
                  className='object-cover rounded-xl transform transition-transform duration-300 hover:rotate-2 cursor-pointer'
                  placeholder='blur'
                  loading='lazy'
                  blurDataURL={placeholderSrc}
                />
              </DialogTrigger>
              <DialogContent className='md:min-w-[500px]'>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className='flex justify-center'>
                  <Image
                    src={
                      item.image_url ? `${process.env.IMAGE_URL}${item.image_url}` : placeholderSrc
                    }
                    alt='The Visual Clinic Certificate'
                    width={1200}
                    height={1200}
                    className='object-cover rounded-xl'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Group 2 */}
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 max-w-[1200px] mx-auto'>
          {imageGroup2?.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Image
                  src={
                    item.image_url ? `${process.env.IMAGE_URL}${item.image_url}` : placeholderSrc
                  }
                  alt='The Visual Clinic Certificate'
                  width={400}
                  height={400}
                  className='object-cover rounded-xl transform transition-transform duration-300 hover:rotate-2 cursor-pointer'
                  placeholder='blur'
                  loading='lazy'
                  blurDataURL={placeholderSrc}
                />
              </DialogTrigger>
              <DialogContent className='md:min-w-[600px] lg:min-w-[750px]'>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className='flex justify-center'>
                  <Image
                    src={
                      item.image_url ? `${process.env.IMAGE_URL}${item.image_url}` : placeholderSrc
                    }
                    alt='The Visual Clinic Certificate'
                    width={1200}
                    height={1200}
                    className='object-cover rounded-xl'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
