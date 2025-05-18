'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, SearchIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

interface BlogsListProps {
  tagSearch: string | null
}

interface Blog {
  cover_image_url: string
  title_th: string
  title_en: string
  description_th: string
  description_en: string
  slug_th: string
  slug_en: string
  tags: { name: string }[]
}

interface BlogResponse {
  data: Blog[]
  total: number
  currentPage: number
  totalPages: number
}

export default function BlogsList({ tagSearch }: BlogsListProps) {
  const activeLocale = useLocale()
  const placeholderSrc = '/placeholder-image.jpg'

  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [blogsList, setBlogsList] = useState<Blog[]>([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ITEMS_PER_PAGE = 12

  useEffect(() => {
    if (tagSearch) {
      const tagValue = `#${tagSearch}`
      setQuery(tagValue)
      setPage(1)
      fetchData(tagValue, 1, true)
    }
  }, [tagSearch])

  const fetchData = async (searchQuery = '', currentPage = 1, isReset = false) => {
    try {
      setSearchLoading(true)
      const offset = (currentPage - 1) * ITEMS_PER_PAGE

      const { data: response } = await axios.get<any>(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/list`,
        {
          params: {
            search: searchQuery,
            limit: ITEMS_PER_PAGE,
            offset: offset,
          },
        }
      )

      if (isReset) {
        setBlogsList(response.data)
      } else {
        setBlogsList((prev) => [...prev, ...response.data])
      }
      setHasMore(response.data.length === ITEMS_PER_PAGE)
      setSearchLoading(false)
    } catch (error) {
      console.error(error)
      setSearchLoading(false)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setPage(1)

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      fetchData(newQuery, 1, true)
    }, 1000)
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchData(query, nextPage)
  }

  const tLink = useTranslations('buttonLink')

  return (
    <section className='space-y-6 mb-8 rounded-xl'>
      <div className='flex items-center gap-2 bg-white lg:w-1/2 pl-6 pr-2 py-2 rounded-full shadow-md'>
        <input
          type='text'
          className='outline-none w-full'
          placeholder={activeLocale === 'th' ? 'ค้นหาบทความ...' : 'Search articles...'}
          value={query}
          onChange={handleInputChange}
        />
        {query.length === 0 ? (
          <div className='p-2 rounded-full'>
            <SearchIcon className='text-gray-400' />
          </div>
        ) : (
          <div
            className='bg-[#51463A] p-2 rounded-full cursor-pointer'
            onClick={() => {
              setQuery('')
              fetchData()
            }}
          >
            <XIcon className='text-white' />
          </div>
        )}
      </div>

      <div className='grid grid-cols-12 gap-4 md:gap-6'>
        {blogsList.length === 0 && (
          <div className='col-span-12 h-[200px] flex items-center justify-center rounded-lg bg-white text-gray-400 text-xl'>
            {activeLocale === 'th' ? 'ไม่พบบทความ' : 'No articles found'}
          </div>
        )}

        {blogsList.map((blog, index) => (
          <div
            key={index}
            className='col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white/50 h-fit transition-all duration-300 hover:bg-white'
          >
            <div className='pt-2 px-2'>
              <Link
                href={`/${activeLocale}/blog/${
                  activeLocale === 'th' ? blog.slug_th : blog.slug_en
                }`}
              >
                <Image
                  src={
                    blog?.cover_image_url
                      ? `${process.env.IMAGE_URL}${blog?.cover_image_url}`
                      : placeholderSrc
                  }
                  alt={activeLocale === 'th' ? blog.title_th || '' : blog.title_en || ''}
                  width={1200}
                  height={1200}
                  className='rounded-2xl hover:shadow-md hover:shadow-[#CDB8A4] hover:ring-2 hover:ring-[#B8977F] cursor-pointer transition-all duration-300'
                  placeholder='blur'
                  loading='lazy'
                  blurDataURL={placeholderSrc}
                />
              </Link>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl text-[#483E3B] truncate'>
                {activeLocale === 'th' ? blog.title_th : blog.title_en}
              </h3>
              <p className='text-[#877A6B] line-clamp-2'>
                {activeLocale === 'th' ? blog.description_th : blog.description_en}
              </p>
              <div className='flex justify-end mt-4'>
                <Link
                  href={`/${activeLocale}/blog/${
                    activeLocale === 'th' ? blog.slug_th : blog.slug_en
                  }`}
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

      {hasMore && blogsList.length > 0 && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={handleLoadMore}
            disabled={searchLoading}
            className='px-6 py-2 bg-[#9C6E5A] text-white rounded-full hover:bg-[#9C6E5A]/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {searchLoading ? (
              <span className='flex items-center gap-2'>
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                {activeLocale === 'th' ? 'กำลังโหลด...' : 'Loading...'}
              </span>
            ) : activeLocale === 'th' ? (
              'โหลดเพิ่มเติม'
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}
    </section>
  )
}
