import React from 'react'
import MiddleTop from './MiddleTop'

const MiddleCard = () => {
  return (
    <div className='inline-flex flex-col top-[58px] left-[206px] gap-[32px] '>
      <MiddleTop />
      <p className='w-[351px] h-[115px] font-normal text-lg leading-[100%] tracking-normal text-right text-[#FAFAFA] bg-red-400'>
        Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.
      </p>
    </div>
  )
}

export default MiddleCard
