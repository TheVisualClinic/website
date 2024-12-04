'use client'

import { useState } from 'react'
import ToolsPromotionsCard from './tools-promotions-card'
import ToolsServicesCard from './tools-services-card'
import ToolsTagsCard from './tools-tags-card'

interface ToolsBarProps {
  onSendTagClick: (tagName: string) => void
}

export default function ToolsBar({ onSendTagClick }: ToolsBarProps) {
  return (
    <div className='space-y-6 text-[#483E3B]'>
      <ToolsPromotionsCard />
      <ToolsServicesCard />
      <ToolsTagsCard onTagClick={onSendTagClick} />
    </div>
  )
}
