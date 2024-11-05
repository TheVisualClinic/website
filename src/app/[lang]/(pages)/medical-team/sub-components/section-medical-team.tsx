'use client'

import { CheckCheckIcon, DotIcon, FileBadgeIcon, GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'
import { doctorsList } from '@/assets/mock-data/doctors'
import { useLocale } from 'next-intl'

export default function MedicalTeamSection() {
  const activeLocale = useLocale()

  return (
    <section className='bg-[#F9F6F3] py-12 md:py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-16 lg:space-y-20 px-4 md:px-6'>
        {doctorsList.map((member, index) => (
          <div key={member.id} className='grid grid-cols-12 gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-12 lg:col-span-5'>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${member.image}`}
                    width={1200}
                    height={1425}
                    alt={member.full_name_th}
                    className='w-full rounded-xl'
                  />
                </div>
                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? member.full_name_th : member.full_name_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl'>
                        {activeLocale === 'th' ? member.name_th : member.name_en}
                      </div>
                    </div>
                    <p className='font-medium md:text-xl'>
                      {activeLocale === 'th' ? member.caption_th : member.caption_en}
                    </p>
                    <div className='space-y-2'>
                      {member.specialists.map((skill, skillIndex) => (
                        <div key={skillIndex} className='flex items-center gap-3'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <div className='text-sm w-full'>{skill}</div>
                        </div>
                      ))}
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-medium'>Medical School</h3>
                      {member.medical_school.map((school, schoolIndex) => (
                        <div key={schoolIndex} className='flex items-center gap-3'>
                          <GraduationCapIcon />
                          <div className='text-xs w-full'>{`${school}, `}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='col-span-12 lg:hidden'>
                  <Image
                    src={`${process.env.STORAGE_PROVIDER_URL}${member.image}`}
                    width={1200}
                    height={1425}
                    alt={member.full_name_th}
                    className='w-full rounded-xl'
                  />
                </div>
                <div className='col-span-12 lg:col-span-7'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {activeLocale === 'th' ? member.full_name_th : member.full_name_en}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl'>
                        {activeLocale === 'th' ? member.name_th : member.name_en}
                      </div>
                    </div>
                    <p className='font-medium md:text-xl'>
                      {activeLocale === 'th' ? member.caption_th : member.caption_en}
                    </p>
                    <div className='space-y-2'>
                      {member.specialists.map((skill, skillIndex) => (
                        <div key={skillIndex} className='flex items-center gap-3'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <div className='text-sm w-full'>{skill}</div>
                        </div>
                      ))}
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-medium'>Medical School</h3>
                      {member.medical_school.map((school, schoolIndex) => (
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
                    src={`${process.env.STORAGE_PROVIDER_URL}${member.image}`}
                    width={1200}
                    height={1425}
                    alt={member.full_name_th}
                    className='w-full rounded-xl'
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
