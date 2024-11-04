'use client'

import ToolsPromotionsCard from './tools-promotions-card'
import ToolsServicesCard from './tools-services-card'
import ToolsTagsCard from './tools-tags-card'

export default function ToolsBar() {
  return (
    <div className='space-y-6 text-[#483E3B]'>
      <ToolsPromotionsCard />
      <ToolsServicesCard />
      <ToolsTagsCard />
    </div>
  )
}
