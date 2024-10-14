import { contactImg } from '@/assets/images'
import Image from 'next/image'

export default function ImageSection() {
  return (
    <div>
      <Image src={contactImg} alt='Contact Image Cover' className='w-full' />
    </div>
  )
}
