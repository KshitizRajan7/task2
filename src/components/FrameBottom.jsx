'use client'
import React, { useState } from 'react'
import DynamicBottom from './DynamicBottom'
import { clarity, job, learn, mentor } from '@/data/data'
import Frame1 from './frame bottom/Frame1'
import Frame2 from './frame bottom/Frame2'
import Card from './Dynamic Card/Card'
import HoveredClarity from './hover card/HoveredClarity'
import HoveredLearn from './hover card/HoveredLearn'

const FrameBottom = () => {
  const [isHoveredClarity, setIsHoveredClarity] = useState(false);
  const [isHoveredLearn, setIsHoveredLearn] = useState(false);
  return (
    <div className='inline-flex flex-col w-[1213px] border relative'>
      {/* frame 811888 */}
      <div className='inline-flex w-[592px] left-[1.5px] gap-[32px] absolute '>

        <div onMouseEnter={() => setIsHoveredClarity(true)} onMouseLeave={() => setIsHoveredClarity(false)} className='w-[592px] h-[341px] border'>
          {isHoveredClarity ? <HoveredClarity /> : <Card title={"clarity"} {...clarity} />}
        </div>
        <div onMouseEnter={() => setIsHoveredLearn(true)} onMouseLeave={() => setIsHoveredLearn(false)} className='w-[592px] h-[341px] border'>
          {isHoveredLearn ? <HoveredLearn /> : <Card title={"learn"} {...learn} />}
        </div>
      </div>
      {/* frame 811887 */}
      <div className='inline-flex top-[381.17px] left-[2.5px] gap-[32px] absolute'>
        <Card title={"mentor"} {...mentor} />
        <Card title={"job"} {...job} />
      </div>
    </div>
  )
}

export default FrameBottom
