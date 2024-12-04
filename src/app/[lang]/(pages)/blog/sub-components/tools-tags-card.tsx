'use client'

import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

interface ToolsTagsCardProps {
  onTagClick: (tagName: string) => void
}

export default function ToolsTagsCard({ onTagClick }: ToolsTagsCardProps) {
  const activeLocale = useLocale()
  const [tagsList, setTagsList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/blogs/tags`
      )
      setTagsList(response.data)
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

  const handleTagClick = (tagName: string) => {
    onTagClick(tagName)
  }

  return (
    <div className='p-4 bg-white rounded-xl space-y-4'>
      <div className='flex items-center gap-6'>
        <h3 className='text-xl min-w-fit'>{activeLocale === 'th' ? 'แท็ก' : 'Tags'}</h3>
        <div className='h-[2px] w-full bg-[#B8977F]' />
      </div>
      <div className='text-xs text-[#51463A] flex gap-2 flex-wrap overflow-y-auto max-h-[220px]'>
        {tagsList.map((tag, index) => (
          <div
            key={index}
            className='border border-[#51463A] rounded-full w-fit py-1 px-2 transition-all duration-300 hover:bg-[#51463A]/10 cursor-pointer'
            onClick={() => handleTagClick(tag.name)}
          >
            #{tag.name}
          </div>
        ))}
      </div>
    </div>
  )
}
