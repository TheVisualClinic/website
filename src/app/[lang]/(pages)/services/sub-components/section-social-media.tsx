import { servicesSocialMediaImage } from '@/assets/services-page'
import Image from 'next/image'

export default function SocialMediaSection() {
  return (
    <section>
      <Image src={servicesSocialMediaImage} alt='Banner' />
    </section>
  )
}
