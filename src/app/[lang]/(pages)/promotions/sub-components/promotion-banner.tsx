import { promotionBanner } from '@/assets/images'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function PromotionBanner() {
  return (
    <section className='bg-[#F9F6F3]'>
      <Image src={promotionBanner} alt='Promotion Banner' />

      {/* <div className='container'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='col-span-1 bg-white text-[#483E3B] rounded-xl'>
            <p className='text-[#9C6E5A] font-semibold'>New client welcome offer</p>
            <h2 className='text-3xl text-[#483E3B]'>
              Enjoy 20% off your first cosmetology treatment
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pretium vulputate malesuada amet at quis non.
              Augue viverra vitae magna praesent odio. Hendrerit ipsum hac non pharetra volutpat
              habitant massa purus nulla.
            </p>
            <Button className='w-[120px] bg-[#A29A6D] py-3 rounded-sm flex justify-center align-middle text-white hover:bg-primary cursor-pointer'>
              จองนัดหมาย
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  )
}
