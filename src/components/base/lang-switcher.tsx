'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { startTransition } from 'react'

export default function LangSwitcher() {
  const router = useRouter()
  const activeLocale = useLocale()

  const pagePathName = usePathname().substring(3)
  const searchParams = useSearchParams().toString()

  const onLangChange = (value: string) => {
    const nextLocale = value
    startTransition(() => {
      router.replace(`/${nextLocale}${pagePathName}${searchParams ? `?${searchParams}` : ''}`)
    })
  }
  return (
    <div className='flex items-center gap-2'>
      <span
        className={`cursor-pointer ${
          activeLocale === 'th'
            ? 'text-[#9C6E5A] font-semibold'
            : 'text-gray-700 hover:text-gray-500'
        }`}
        onClick={() => onLangChange('th')}
      >
        TH
      </span>
      <span>|</span>
      <span
        className={`cursor-pointer ${
          activeLocale === 'en'
            ? 'text-[#9C6E5A] font-semibold'
            : 'text-gray-700 hover:text-gray-500'
        }`}
        onClick={() => onLangChange('en')}
      >
        EN
      </span>
    </div>
  )
}
