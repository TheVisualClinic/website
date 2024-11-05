'use client'

import BlogsList from './sub-components/blogs-list'
import ImageSection from './sub-components/section-image'
import ToolsBar from './sub-components/tools-bar'

export default function BlogPage() {
  return (
    <div className='bg-[#F9F6F3]'>
      <ImageSection />
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
