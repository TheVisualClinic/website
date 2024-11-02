'use client'

import { doctorMeen } from '@/assets/doctor-images'
import { img1200x1425 } from '@/assets/images'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'

const medicalTeam = [
  {
    id: 1,
    name: 'ธนวรรณ โชควัฒนคุปต์',
    nickname: 'หมอ มีน',
    description:
      'M.D., M.Sc.Dermatology Fellowship in Laser & Cosmetic Dermatology, Florida International University',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    image: doctorMeen,
  },
]

export default function MedicalTeamSection() {
  return (
    <section className='bg-[#F9F6F3] py-16 text-[#483E3B]'>
      <div className='max-w-[1080px] mx-auto space-y-24'>
        {medicalTeam.map((member, index) => (
          <div key={member.id} className='grid grid-cols-12 gap-6'>
            {index % 2 === 0 ? (
              <>
                <div className='col-span-4'>
                  <Image src={member.image} alt={member.name} className='w-full rounded-xl' />
                </div>
                <div className='col-span-8 px-6'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {member.name}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl'>{member.nickname}</div>
                    </div>

                    <p>{member.description}</p>

                    <div className='space-y-2'>
                      {member.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='col-span-8 px-6'>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-[#483E3B] text-3xl mx-auto font-semibold'>
                        {member.name}
                      </h2>
                      <div className='text-[#9C6E5A] text-2xl'>{member.nickname}</div>
                    </div>

                    <p>{member.description}</p>

                    <div className='space-y-2'>
                      {member.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className='flex items-center gap-2'>
                          <CheckCheckIcon className='text-[#AA7F65]' />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='col-span-4'>
                  <Image src={member.image} alt={member.name} className='w-full rounded-xl' />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
