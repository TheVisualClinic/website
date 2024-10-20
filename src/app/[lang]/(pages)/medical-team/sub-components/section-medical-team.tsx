'use client'

import { img1200x1425 } from '@/assets/images'
import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'

const medicalTeam = [
  {
    id: 1,
    name: 'พญ. ชื่อ-นามสกุล',
    nickname: 'คุณหมอ ชื่อเล่น',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum non velit accusamus recusandae ducimus quos, corrupti amet unde placeat adipisci voluptatibus autem? Dolores ea amet dignissimos cumque ducimus veniam.',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    image: img1200x1425,
  },
  {
    id: 2,
    name: 'นพ. ชื่อ-นามสกุล',
    nickname: 'คุณหมอ ชื่อเล่น 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum non velit accusamus recusandae ducimus quos, corrupti amet unde placeat adipisci voluptatibus autem? Dolores ea amet dignissimos cumque ducimus veniam.',
    skills: ['Skill A', 'Skill B', 'Skill C'],
    image: img1200x1425,
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
