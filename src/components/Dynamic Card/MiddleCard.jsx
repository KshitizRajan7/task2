import React from 'react'

const MiddleCard = ({ text1, text2, text3 }) => {
  return (
    <div className='relative border'>
      {/* MiddleTop  */}
      <div className='inline-flex flex-col gap-[10px]'>
        {/* top middle top  */}
        <div className='border inline-flex gap-[10px] '>
          <p className='border font-nohemi  w-[270px] h-[38px] font-bold text-[32px] leading-[120%] tracking-[0%] text-[#FAFAFA] text-center'>
            {text1}
          </p>
        </div>
        {/* TopMiddleTop text */}
        <p className='font-outfit border w-[359px] h-[30px] font-medium text-[23px] leading-[100%] tracking-[0%] text-[#FFFFFF] text-center'>
          {text2}
        </p>
      </div>
      <p className='font-outfit font-normal w-[351px] h-[115px] text-lg leading-[100%] tracking-[0%] text-[#FAFAFA] text-right'>
        {text3}</p>
    </div>
  )
}
export default MiddleCard
