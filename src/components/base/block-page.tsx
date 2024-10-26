'use client'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

import { useState, useEffect } from 'react'

export default function BlockPage() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (isAuthenticated === 'true') {
      setIsHidden(true)
    }
  }, [])

  const handleComplete = (code: string) => {
    if (code === '111111') {
      setIsHidden(true)
      localStorage.setItem('isAuthenticated', 'true')
    }
  }

  return (
    <div
      className={`fixed z-50 bg-[#F9F6F3] left-0 top-0 right-0 bottom-0 flex items-center justify-center ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <div className='text-center w-fit h-fit space-y-2'>
        <div className='text-2xl font-semibold'>This is Private Website</div>
        <div className='text-gray-500'>Please Enter PIN Code</div>
        <div className='bg-white w-fit'>
          <InputOTP maxLength={6} onComplete={(code) => handleComplete(code)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    </div>
  )
}
