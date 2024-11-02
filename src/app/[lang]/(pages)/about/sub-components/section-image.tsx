import { clinicImg4 } from '@/assets/clinic-images'
import Image from 'next/image'

export default function ImageSection() {
  return (
    <div>
      <Image src={clinicImg4} alt='Contact Image Cover' className='w-full h-[500px] object-cover' />
    </div>
  )
}
