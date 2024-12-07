'use client'

import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from 'lucide-react'
import LastArticleBanner from '@/components/base/last-article-banner'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useLocale } from 'next-intl'
import moment from 'moment'
import 'moment/locale/th'

export default function Page({ params }: { params: { slug: string } }) {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()
  moment.locale(activeLocale)

  const parseLebupList = (dataString: string) => {
    return dataString.split('\n').map((item) => (item === '[EMPTY]' ? '' : item))
  }

  const extractYoutubeId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)|youtu\.be\/([^?&]+)/
    const match = url.match(regex)
    return match ? match[1] || match[2] : null
  }

  const [blogDetail, setBlogDetail] = useState<any | null>(null)

  const hasFetched = useRef(false)
  useEffect(() => {
    const decodedSlug = decodeURIComponent(params.slug)
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData(decodedSlug)
    }
  }, [params])

  const fetchData = async (slug: string) => {
    try {
      const { data: response } = await axios.post(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/detail`,
        {
          slug,
        }
      )
      setBlogDetail(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='pt-24 md:pt-32 text-[#483E3B]'>
      <div className='max-w-[700px] px-4 md:px-6 mx-auto mb-12'>
        <Image
          src={
            blogDetail?.header_image_url
              ? `${process.env.IMAGE_URL}${blogDetail?.header_image_url}`
              : placeholderSrc
          }
          alt={activeLocale === 'th' ? blogDetail?.title_th || '' : blogDetail?.title_en || ''}
          width={1920}
          height={500}
          className='aspect-video rounded-xl'
          placeholder='blur'
          loading='lazy'
          blurDataURL={placeholderSrc}
        />

        <h1 className='text-2xl md:text-3xl lg:text-4xl leading-relaxed font-bold my-4 md:my-6'>
          {activeLocale === 'th' ? blogDetail?.title_th : blogDetail?.title_en}
        </h1>

        <div className='flex items-center gap-4 border-y py-2 md:py-3 border-[#B8977F]/30'>
          <div>
            <Avatar className='w-10 h-10'>
              <AvatarImage src={`${process.env.IMAGE_URL}${blogDetail?.author.author_url}`} />
              <AvatarFallback className='text-center text-xs'>
                The
                <br />
                Visual
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className='text-sm md:text-base font-semibold text-[#9C6E5A]'>
              {activeLocale === 'th' ? 'เขียนโดย' : 'Author'} :{' '}
              <span>
                ({blogDetail?.author.nick_name || 'Unknown'}){' '}
                {blogDetail?.author?.full_name || 'Unknown'}
              </span>
            </div>
            <div className='flex items-center text-xs md:text-sm text-gray-500'>
              {activeLocale === 'th' ? 'ใช้เวลาอ่าน' : 'Reading Time'}{' '}
              {blogDetail?.time_to_read
                ? `${blogDetail.time_to_read} ${activeLocale === 'th' ? 'นาที' : 'minutes'}`
                : 'Unknown time to read'}{' '}
              <DotIcon />{' '}
              <span>
                {blogDetail?.public_at
                  ? moment(blogDetail.public_at).format('D MMMM YYYY')
                  : 'Public Date'}
              </span>
            </div>
          </div>
        </div>

        <div className='my-4 md:my-6'>
          {blogDetail?.contents.length > 0 ? (
            blogDetail?.contents.map((content: any, index: number) => (
              <div key={index}>
                {content?.type === 'title' && (
                  <h2 className='text-xl lg:text-2xl leading-relaxed font-semibold text-gray-800 mb-2 md:mb-3'>
                    {activeLocale === 'th' ? content?.text_th : content?.text_en}
                  </h2>
                )}
                {content?.type === 'subtitle' && (
                  <h3 className='text-lg lg:text-xl leading-relaxed font-semibold text-gray-800 mb-1 md:mb-2'>
                    {activeLocale === 'th' ? content?.text_th : content?.text_en}
                  </h3>
                )}
                {content?.type === 'content' && (
                  <p className='text-gray-600 leading-relaxed mb-4 md:mb-5'>
                    {activeLocale === 'th' ? content?.text_th : content?.text_en}
                  </p>
                )}
                {content?.type === 'bullet' && (
                  <ul className='list-disc ml-4 leading-relaxed space-y-3 md:space-y-4 text-gray-600 pt-2 pb-4 md:pb-6'>
                    {parseLebupList(
                      activeLocale === 'th' ? content?.text_th : content?.text_en
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {content?.type === 'numbered' && (
                  <ul className='list-decimal ml-4 leading-relaxed space-y-3 md:space-y-4 text-gray-600 pt-2 pb-4 md:pb-6'>
                    {parseLebupList(
                      activeLocale === 'th' ? content?.text_th : content?.text_en
                    ).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {content?.type === 'youtube' && content?.text_th && (
                  <div className='aspect-video overflow-hidden rounded-xl my-4 md:my-6'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={`https://www.youtube.com/embed/${extractYoutubeId(content?.text_th)}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {content?.type === 'image' && content?.image_url && (
                  <div className='py-4 md:py-6'>
                    <Image
                      src={
                        content?.image_url
                          ? `${process.env.IMAGE_URL}${content?.image_url}`
                          : placeholderSrc
                      }
                      alt={
                        activeLocale === 'th'
                          ? content?.alt_text_th || ''
                          : content?.alt_text_en || ''
                      }
                      width={1920}
                      height={1080}
                      className='w-full rounded-xl object-cover'
                      placeholder='blur'
                      loading='lazy'
                      blurDataURL={placeholderSrc}
                    />
                    <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                      {activeLocale === 'th' ? content?.alt_text_th : content?.alt_text_en}
                    </p>
                  </div>
                )}
                {content?.type === 'image-2' && (
                  <div className='py-4 md:py-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                      {content?.image_url && (
                        <div>
                          <Image
                            src={
                              content?.image_url
                                ? `${process.env.IMAGE_URL}${content?.image_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? content?.alt_text_th || ''
                                : content?.alt_text_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square rounded-xl object-cover'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                          <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                            {activeLocale === 'th' ? content?.alt_text_th : content?.alt_text_en}
                          </p>
                        </div>
                      )}
                      {content?.image_2_url && (
                        <div>
                          <Image
                            src={
                              content?.image_2_url
                                ? `${process.env.IMAGE_URL}${content?.image_2_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? content?.alt_2_text_th || ''
                                : content?.alt_2_text_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square rounded-xl object-cover'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                          <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                            {activeLocale === 'th'
                              ? content?.alt_2_text_th
                              : content?.alt_2_text_en}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {content?.type === 'image-3' && (
                  <div className='py-4 md:py-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                      {content?.image_url && (
                        <div>
                          <Image
                            src={
                              content?.image_url
                                ? `${process.env.IMAGE_URL}${content?.image_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? content?.alt_text_th || ''
                                : content?.alt_text_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square rounded-xl object-cover'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                          <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                            {activeLocale === 'th' ? content?.alt_text_th : content?.alt_text_en}
                          </p>
                        </div>
                      )}
                      {content?.image_2_url && (
                        <div>
                          <Image
                            src={
                              content?.image_2_url
                                ? `${process.env.IMAGE_URL}${content?.image_2_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? content?.alt_2_text_th || ''
                                : content?.alt_2_text_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square rounded-xl object-cover'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                          <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                            {activeLocale === 'th' ? content?.alt_2_text_th : content?.alt_text_en}
                          </p>
                        </div>
                      )}
                      {content?.image_3_url && (
                        <div>
                          <Image
                            src={
                              content?.image_3_url
                                ? `${process.env.IMAGE_URL}${content?.image_3_url}`
                                : placeholderSrc
                            }
                            alt={
                              activeLocale === 'th'
                                ? content?.alt_3_text_th || ''
                                : content?.alt_3_text_en || ''
                            }
                            width={1200}
                            height={1200}
                            className='aspect-square rounded-xl object-cover'
                            placeholder='blur'
                            loading='lazy'
                            blurDataURL={placeholderSrc}
                          />
                          <p className='text-center text-sm text-black/40 mt-2 md:mt-4'>
                            {activeLocale === 'th'
                              ? content?.alt_3_text_th
                              : content?.alt_3_text_en}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className='text-black/10'>No Content Available</div>
          )}
        </div>
      </div>

      {/* Last Article Banner */}
      <LastArticleBanner slug={params.slug} />
    </div>
  )
}
