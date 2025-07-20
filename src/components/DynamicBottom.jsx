import React from 'react'
import Frame1 from './frame bottom/Frame1'
import Frame2 from './frame bottom/Frame2'

const DynamicBottom = () => {
  return (
    <div className='inline-flex flex-col gap-[24px]'>
      <div className='inline-flex gap-[32px]'>
        <Frame1 />
        <Frame1 />
      </div>
      <div className='inline-flex gap-[32px]'>
        <Frame2 />
        <Frame2 />
      </div>
    </div>
  )
}

export default DynamicBottom
