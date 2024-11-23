'use client'

import { useLocale } from 'next-intl'

export default function VDOSection() {
  const activeLocale = useLocale()

  const vdoLink = 'https://youtu.be/dSd5KymKLoQ'

  const extractYoutubeId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)|youtu\.be\/([^?&]+)/
    const match = url.match(regex)
    return match ? match[1] || match[2] : null
  }

  const videoId = extractYoutubeId(vdoLink)
  const embedLink = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&mute=0&playsinline=0`
    : ''

  const vdoCard = {
    title_th: 'The Tailor-made Experience',
    title_en: 'The Tailor-made Experience',
    description_th:
      'เพราะความสวยงามไม่มีสูตรสำเร็จที่ตายตัว\nที่ The Visual เราเชื่อว่าทุกคนมีความดูดีในแบบของตัวเอง\nมาร่วมกันค้นหาเวอร์ชันที่ดีที่สุดของคุณกับเรา\nให้คุณได้มั่นใจ พร้อมสัมผัสกับความงามที่แท้จริงในแบบของคุณเอง',
    description_en:
      'Beauty has no fixed formula,\nAt The Visual Clinic, we believe that everyone shines in their unique way.\nJoin us in discovering the best version of yourself,\nSo you can feel confident and embrace your true beauty in your own unique style.',
  }

  return (
    <section className='bg-[#F9F6F3]'>
      <div className='container px-4 md:px-6 py-12 md:py-16'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-6 text-[#483E3B]'>
            <div className='text-center'>
              <h2 className='text-4xl dancing-script-font'>
                {activeLocale === 'th' ? vdoCard.title_th : vdoCard.title_en}
              </h2>
              <p className='text-sm md:text-base my-6 whitespace-pre-line'>
                {activeLocale === 'th' ? vdoCard.description_th : vdoCard.description_en}
              </p>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6'>
            {/* Youtube Preview */}
            <div className='aspect-video rounded-xl overflow-hidden'>
              {embedLink ? (
                <iframe
                  width='100%'
                  height='100%'
                  src={embedLink}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='autoplay'
                  loading='lazy'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Invalid video link</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
