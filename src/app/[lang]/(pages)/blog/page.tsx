'use client'

import { useEffect, useRef, useState } from 'react'
import BlogsList from './sub-components/blogs-list'
import ImageSection from './sub-components/section-image'
import ToolsBar from './sub-components/tools-bar'
import axios from 'axios'

export default function BlogPage() {
  const [pageData, setPageData] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs`
      )
      setPageData(response.data)
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

  return (
    <div className='bg-[#F9F6F3]'>
      <ImageSection pageData={pageData} />
      <div className='py-12 md:py-16 bg-[#F9F6F3]'>
        <div className='container px-4 md:px-4 grid grid-cols-12 gap-4 md:gap-6'>
          <div className='col-span-3 hidden xl:block'>
            <ToolsBar />
          </div>
          <div className='col-span-12 xl:col-span-9'>
            <BlogsList />
          </div>
        </div>
      </div>
    </div>
  )
}
