import React from 'react'
import DynamicBottom from './DynamicBottom'
import { clarity, job, learn, mentor } from '@/data/data'
import Frame1 from './frame bottom/Frame1'
import Frame2 from './frame bottom/Frame2'
import Card from './Dynamic Card/Card'

const FrameBottom = () => {
  return (
    <div className='inline-flex flex-col w-[1213px] border relative'>
      {/* frame 811888 */}
      <div className='inline-flex left-[1.5px] gap-[32px] absolute '>
        <Card title={"clarity"} {...clarity} />
        <Card title={"learn"} {...learn} />
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
