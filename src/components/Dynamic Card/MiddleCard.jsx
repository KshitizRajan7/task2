import React from 'react'

const MiddleCard = ({ text1, text2, text3 }) => {
  return (
    <div className='inline-flex flex-col top-[58px] left-[206px] gap-[32px] '>
      {/* MiddleTop  */}
      <div className='inline-flex flex-col gap-[10px]'>
        {/* top middle top  */}
        <div className='inline-flex gap-[10px]'>
          <p className='font-nohemi font-bold text-[32px] leading-[120%] tracking-normal text-center text-[#FAFAFA]'>
            {text1}
          </p>
        </div>
        {/* TopMiddleTop text */}
        <p className='font-outfit w-[339px] h-[30px] font-medium text-xl leading-[100%] tracking-normal text-center text-[#FFFFFF]'>
          {text2}
        </p>
      </div>
      <p className='w-[351px] h-[115px] font-normal text-lg leading-[100%] tracking-normal text-right text-[#FAFAFA]'>
        {text3}</p>
    </div>
  )
}

export default MiddleCard
