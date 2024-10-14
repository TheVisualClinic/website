export default function AboutClinicSection() {
  return (
    <section className='py-16 bg-[#F9F6F3]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6 items-center'>
          <div className='col-span-4 border rounded-xl bg-[#E7DDD3] flex justify-center items-center w-[420px] h-[420px]'>
            Image
          </div>
          <div className='col-span-8 space-y-4'>
            <p className='text-[#9C6E5A] font-semibold'>เกี่ยวกับเรา</p>
            <h2 className='text-3xl text-[#483E3B]'>
              Lorem ipsum dolor sit amet consetur. Pretium vulputate
            </h2>
            <p>
              We are a leading cosmetology and dermatology clinic dedicated to transforming beauty
              and enhancing confidence. Our team of highly skilled professionals combines artistry,
              advanced techniques, and cutting-edge technology to deliver exceptional results
              tailored to your unique needs.
            </p>
            <div className='grid grid-cols-3 text-center max-w-xl'>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>2</div>
                <p>ปีที่เปิดบริการ</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>12</div>
                <p>บริการทั้งหมด</p>
              </div>
              <div>
                <div className='text-[#AA7F65] text-[60px]'>200+</div>
                <p>ลูกค้าที่ไว้ใจ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
