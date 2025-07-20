import React from 'react'
import FrameTop from './FrameTop'
import FrameBottom from './FrameBottom'

const MiddleComponent = () => {
  return (
    <div className='inline-flex flex-col gap-[48px] border border-red-600'>
      <FrameTop />
      <FrameBottom />
    </div>
  )
}

export default MiddleComponent
