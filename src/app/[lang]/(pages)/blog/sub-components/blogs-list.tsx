'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SearchInput from './search-input'
import { blogsList } from '@/assets/mock-data/blogs'

export default function BlogsList() {
  const activeLocale = useLocale()

  const tLink = useTranslations('buttonLink')

  return (
    <section className='space-y-6 mb-8 rounded-xl'>
      <div>
        <SearchInput />
      </div>
      <div className='grid grid-cols-12 gap-4 md:gap-6'>
        {blogsList.map((blog) => (
          <div
            key={blog.id}
            className={
              'col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white/50 h-fit transition-all duration-300 hover:bg-white'
            }
          >
            <div className='pt-2 px-2'>
              <Link href={`/${activeLocale}/blog/${blog.id}`}>
                <Image
                  src={`${process.env.STORAGE_PROVIDER_URL}${blog.img_src}`}
                  alt={activeLocale === 'th' ? blog.title_th : blog.title_en}
                  width={1200}
                  height={1200}
                  className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                />
              </Link>
            </div>
            <div className='p-2'>
              <h3 className='text-2xl text-[#483E3B] truncate'>
                {activeLocale === 'th' ? blog.title_th : blog.title_en}
              </h3>
              <p className='text-[#877A6B] line-clamp-2'>
                {activeLocale === 'th' ? blog.description_th : blog.description_en}
              </p>
              <div className='mt-2 text-[#51463A] flex gap-2 overflow-y-auto'>
                {blog.tags.map((tag, index) => (
                  <div
                    key={index}
                    className='border border-[#51463A] w-fit px-2 py-1 rounded-full text-xs'
                  >
                    #{tag}
                  </div>
                ))}
              </div>
              <div className='flex justify-end mt-4'>
                <Link
                  href={`/${activeLocale}/blog/${blog.id}`}
                  className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                >
                  <span className='capitalize'>{tLink('readMore')}</span>
                  <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
