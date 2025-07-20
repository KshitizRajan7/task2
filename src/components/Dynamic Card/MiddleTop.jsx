import React from 'react'
import TopMiddleTop from './TopMiddleTop'

const MiddleTop = () => {
  return (
    <div className='inline-flex flex-col gap-[10px]'>

      <TopMiddleTop />
      {/* TopMiddleTop text */}
      <p className='font-outfit w-[339px] h-[30px] font-medium text-xl leading-[100%] tracking-normal text-center text-[#FFFFFF] bg-red-400'>
        Step into a better learning path.
      </p>
    </div>
  )
}

export default MiddleTop
