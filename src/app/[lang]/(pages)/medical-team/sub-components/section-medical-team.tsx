'use client'

import { CheckCheckIcon, DotIcon, FileBadgeIcon, GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function MedicalTeamSection() {
  const placeholderSrc = '/placeholder-image.jpg'
  const activeLocale = useLocale()

  const [doctorsList, setDoctorList] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${process.env.MAIN_SERVICES_URL}/api/v1/website/page/doctor-detail-list`
      )
      setDoctorList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true
      fetchData()
    }
  }, [])

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-16 lg:space-y-20 px-4 md:px-6'>
        {doctorsList?.map((doctor, index) => (
          <div key={index} className='grid grid-cols-12 gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={
                      doctor?.doctor_image_url
                        ? `${process.env.IMAGE_URL}${doctor?.doctor_image_url}`
                        : placeholderSrc
                    }
                    alt={activeLocale === 'th' ? doctor.nick_name_th || '' : doctor.nick_name_en}
                    width={1200}
                    height={1425}
                    className='mx-auto w-[320px] rounded-2xl'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </div>
                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <div className='space-y-0 lg:space-y-2'>
                      <h2 className='text-[#483E3B] text-2xl md:text-3xl mx-auto font-semibold text-center lg:text-left'>
                        {activeLocale === 'th' ? doctor.name_prefix_th : doctor.name_prefix_en}{' '}
                        {activeLocale === 'th' ? doctor.first_name_th : doctor.first_name_en}{' '}
                        {activeLocale === 'th' ? doctor.last_name_th : doctor.last_name_en}{' '}
                      </h2>
                      <div className='text-[#9C6E5A] text-xl md:text-2xl text-center lg:text-left'>
                        {activeLocale === 'th' ? doctor.nick_name_th : doctor.nick_name_en}
                      </div>
                      <p className='font-medium text-[15px] md:text-xl text-center lg:text-left'>
                        {activeLocale === 'th' ? doctor.doctor_slogan_th : doctor.doctor_slogan_en}
                      </p>
                    </div>
                    <div className='space-y-2 pt-4 lg:pt-0'>
                      {doctor.skills?.map((skill: any, skillIndex: number) => (
                        <div key={skillIndex} className='flex items-center gap-3'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <div className='text-sm w-full'>
                            {activeLocale === 'th' ? skill.text_th : skill.text_en}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-medium text-xl'>Medical School</h3>
                      {doctor.schools?.map((school: any, schoolIndex: number) => (
                        <div key={schoolIndex} className='flex items-center gap-3'>
                          <GraduationCapIcon />
                          <div className='text-xs w-full'>
                            {activeLocale === 'th' ? school.text_th : school.text_en}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='space-y-2 col-span-12'>
                  <h3 className='font-medium text-xl'>Certificates</h3>
                  {doctor.certificates?.map((certificate: any, cerIndex: number) => (
                    <div key={cerIndex} className='flex items-center gap-3'>
                      <GraduationCapIcon />
                      <div className=' w-full'>
                        {activeLocale === 'th' ? certificate.text_th : certificate.text_en}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className='col-span-12 lg:hidden'>
                  <Image
                    src={
                      doctor?.doctor_image_url
                        ? `${process.env.IMAGE_URL}${doctor?.doctor_image_url}`
                        : placeholderSrc
                    }
                    alt={activeLocale === 'th' ? doctor.nick_name_th || '' : doctor.nick_name_en}
                    width={1200}
                    height={1425}
                    className='mx-auto w-[320px] rounded-2xl'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </div>
                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? doctor.full_name_th : doctor.full_name_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl'>
                        {activeLocale === 'th' ? doctor.name_th : doctor.name_en}
                      </div>
                    </div>
                    <p className='font-medium md:text-xl'>
                      {activeLocale === 'th' ? doctor.caption_th : doctor.caption_en}
                    </p>
                    <div className='space-y-2'>
                      {doctor.specialists?.map((skill: any, skillIndex: number) => (
                        <div key={skillIndex} className='flex items-center gap-3'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <div className='text-sm w-full'>{skill}</div>
                        </div>
                      ))}
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-medium'>Medical School</h3>
                      {doctor.medical_school?.map((school: any, schoolIndex: number) => (
                        <div key={schoolIndex} className='flex items-center gap-3'>
                          <GraduationCapIcon />
                          <div className='text-xs w-full'>{`${school}, `}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='col-span-5 hidden lg:block'>
                  <Image
                    src={
                      doctor?.doctor_image_url
                        ? `${process.env.IMAGE_URL}${doctor?.doctor_image_url}`
                        : placeholderSrc
                    }
                    alt={activeLocale === 'th' ? doctor.nick_name_th || '' : doctor.nick_name_en}
                    width={1200}
                    height={1425}
                    className='mx-auto w-[320px] rounded-2xl'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL={placeholderSrc}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
