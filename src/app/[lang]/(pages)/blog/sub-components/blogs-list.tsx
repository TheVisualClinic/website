'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { blogsMockData } from '../mock-date/blogs'
import { ChevronRight } from 'lucide-react'
import SearchInput from './search-input'

export default function BlogsList() {
  const activeLocale = useLocale()

  return (
    <section className='space-y-6 mb-8 rounded-xl'>
      <div>
        <SearchInput />
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {blogsMockData.map((blog) => (
          <div
            key={blog.id}
            className={
              'col-span-4 rounded-2xl bg-white/50 h-fit transition-all duration-300 hover:bg-white'
            }
          >
            <div className='pt-2 px-2'>
              <Link href={`/${activeLocale}/blog/${blog.id}`}>
                <Image
                  src={blog.imgSrc}
                  alt={blog.title}
                  className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                />
              </Link>
            </div>
            <div className='p-2'>
              <h3 className='text-2xl text-[#483E3B] truncate'>{blog.title}</h3>
              <p className='text-[#877A6B] line-clamp-2'>{blog.description}</p>
              <div className='mt-2 text-[#51463A] flex gap-2 overflow-y-auto'>
                {blog.tags.map((tag, index) => (
                  <div
                    key={index}
                    className='border border-[#51463A] w-fit px-2 py-1 rounded-full text-xs'
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className='flex justify-end mt-4'>
                <Link
                  href={`/${activeLocale}/blog/${blog.id}`}
                  className='flex gap-1 items-center text-[#9C6E5A] max-w-fit cursor-pointer transition-all duration-300 group hover:text-[#9C6E5A]/80'
                >
                  <span>อ่านเพิ่มเติม</span>
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
