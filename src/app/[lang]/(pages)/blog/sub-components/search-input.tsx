'use client'

import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

export default function SearchInput() {
  const [query, setQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Search query:', query)
    }
  }

  return (
    <div className='flex items-center gap-2 bg-white w-1/2 pl-6 pr-2 py-2 rounded-full shadow-md'>
      <input
        type='text'
        className='outline-none w-full'
        placeholder='ค้นหาบทความ...'
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => console.log('Search query:', query)} aria-label='Search'>
        <div className='bg-[#51463A] p-2 rounded-full'>
          <SearchIcon className='text-white' />
        </div>
      </button>
    </div>
  )
}
