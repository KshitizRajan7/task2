import React from 'react'
import Frame1 from './frame bottom/Frame1'
import Frame2 from './frame bottom/Frame2'
import { clarity, job, learn, mentor } from '@/data/data'
import Card from './Dynamic Card/Card'

const DynamicBottom = () => {
  return (
    <div className='inline-flex flex-col gap-[24px] relative'>
      {/* frame 811888 */}
      <div className='inline-flex gap-[32px] '>
        <Card title={"clarity"} {...clarity} />
        <Card title={"learn"} {...learn} />
      </div>
      {/* frame 811887 */}
      <div className='inline-flex gap-[32px] '>
        <Card title={"mentor"} {...mentor} />
        <Card title={"job"} {...job} />
      </div>
    </div>
  )
}

export default DynamicBottom
