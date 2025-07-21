import React from 'react'
import Frame1 from './frame bottom/Frame1'
import Frame2 from './frame bottom/Frame2'

const DynamicBottom = () => {
  return (
    <div className='inline-flex flex-col gap-[24px]'>
      <div className='inline-flex gap-[32px]'>
        <Frame1 title={"clarity"}/>
        <Frame1 title={"learn"}/>
      </div>
      <div className='inline-flex gap-[32px]'>
        <Frame2 title={"mentor"}/>
        <Frame2 title={"job"}/>
      </div>
    </div>
  )
}

export default DynamicBottom
