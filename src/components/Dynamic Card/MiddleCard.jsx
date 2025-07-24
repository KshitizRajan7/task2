import React from 'react'

const MiddleCard = ({ text1, text2, text3 }) => {
  return (
    <div className='inline-flex flex-col top-[58px] left-[206px] gap-[32px] w-[351px] border'>
      {/* MiddleTop  */}
      <div className='inline-flex flex-col gap-[10px] '>
        {/* top middle top  */}
        <div className='inline-flex gap-[10px]'>
          <p className='font-nohemi border w-[417px] font-bold text-[20px] leading-[120%] tracking-normal text-[#FAFAFA]'>
            {text1}
          </p>
        </div>
        {/* TopMiddleTop text */}
        <p className='font-outfit w-[350px] font-medium text-xl leading-[100%] tracking-normal text-[#FFFFFF]'>
          {text2}
        </p>
      </div>
      <p className=' font-normal text-lg leading-[100%] tracking-normal text-[#FAFAFA]'>
        {text3}</p>
    </div>
  )
}
export default MiddleCard
