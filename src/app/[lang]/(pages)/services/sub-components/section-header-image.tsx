import { servicesHeaderImage } from '@/assets/services-page'
import Image from 'next/image'

export default function HeaderImageSection() {
  return (
    <section>
      <Image src={servicesHeaderImage} alt='Header Image' />
    </section>
  )
}
