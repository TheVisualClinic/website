'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import axios from 'axios'

export default function BeforeAfterSection({ pageData }: any) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const [reviewsList, setReviewsList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/reviews-list`
      )
      setReviewsList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData()
    }
  }, [])

  const sectionContent = {
    title_th: pageData?.reviews_section_caption_th || 'รูปภาพเปรียบเทียบก่อนและหลังการใช้บริการ',
    title_en: pageData?.reviews_section_caption_en || 'Before and After Service Comparison Photos',
  }

  const [selectedImage, setSelectedImage] = useState<any | null>(null)

  return (
    <section className='bg-[#F9F6F3] py-8 md:py-12'>
      <div className='container px-4 md:px-6 py-12 md:py-6 space-y-12'>
        <p className='text-[#9C6E5A] font-semibold capitalize text-center'>
          {activeLocale === 'th' ? sectionContent.title_th : sectionContent.title_en}
        </p>

        {reviewsList?.map((group, index) => {
          return (
            <div key={index}>
              <h3 className='text-2xl font-semibold text-center mb-6 bg-gray-300/20 py-4 rounded-lg'>
                {activeLocale === 'th' ? group.group_name_th || '' : group.group_name_en || ''}
              </h3>

              <div className='grid grid-cols-12 gap-4 md:gap-6'>
                {group.items?.map((image: any, index: number) => (
                  <div key={index} className='col-span-6 md:col-span-4 lg:col-span-3'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div>
                          <Image
                            src={
                              pageData?.header_image_url
                                ? `${process.env.IMAGE_URL}${image.item_image_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? group.group_name_th || ''
                                : group.group_name_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square object-cover rounded-lg transform transition-transform duration-300 hover:rotate-2 cursor-pointer'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className='md:min-w-[600px] lg:min-w-[750px]'>
                        <DialogHeader>
                          <DialogTitle>
                            {activeLocale === 'th'
                              ? group.group_name_th || ''
                              : group.group_name_en || ''}
                          </DialogTitle>
                        </DialogHeader>
                        <div className='flex justify-center'>
                          <Image
                            src={
                              pageData?.header_image_url
                                ? `${process.env.IMAGE_URL}${image.item_image_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? group.group_name_th || ''
                                : group.group_name_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square object-cover rounded-lg'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
