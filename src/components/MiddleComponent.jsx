import React from 'react'
import FrameTop from './FrameTop'
import FrameBottom from './FrameBottom'

const MiddleComponent = () => {
  return (
    <div className='inline-flex flex-col w-[1213px] gap-[48px] border'>
      <FrameTop />
      <FrameBottom />
    </div>
  )
}

export default MiddleComponent
