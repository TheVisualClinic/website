'use client'

import BlogsList from './sub-components/blogs-list'
import ImageSection from './sub-components/section-image'
import ToolsBar from './sub-components/tools-bar'

export default function BlogPage() {
  return (
    <div className='bg-[#F9F6F3]'>
      <ImageSection />
      <div className='py-16 bg-[#F9F6F3]'>
        <div className='container grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <ToolsBar />
          </div>
          <div className='col-span-9'>
            <BlogsList />
          </div>
        </div>
      </div>
    </div>
  )
}
