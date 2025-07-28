import React from 'react'

const MiddleCard = ({ title, text1, text2, text3 }) => {
  return (
    <div className='relative'>
      {/* MiddleTop  */}
      <div className={`inline-flex flex-col gap-[10px] w-[351px]  ${(title == "clarity" || title == "mentor") && 'justify-end items-end'}`}>
        {/* top middle top  */}
        <div className='inline-flex gap-[10px] '>
          <p className={`border font-nohemi  ${title == "clarity" && 'w-[270px]'} ${title == "learn" && 'w-[228px]'} ${title == "mentor" && 'w-[417px]'} ${title == "job" && 'w-[324px]'} h-[38px] font-bold text-[32px] leading-[120%] tracking-[0%] text-[#FAFAFA] text-center`}>
            {text1}
          </p>
        </div>
        {/* TopMiddleTop text */}
        <p className={`font-outfit border ${title == "clarity" && 'w-[339px]'} ${title == "learn" && 'w-[301px]'} ${title == "mentor" && 'w-[270px]'} ${title == "job" && 'w-[368px]'} h-[30px] font-medium text-[23px] leading-[100%] tracking-[0%] text-[#FFFFFF] text-center`}>
          {text2}
        </p>
      </div>
      <p className={`border font-outfit font-normal ${title == "mentor" && 'w-[311px]'} ${title == "job" && 'w-[337px]'} ${title == "learn" && 'w-[351px]'} ${title == "clarity" && 'w-[351px]'} h-[115px] text-lg leading-[100%] tracking-[0%] text-[#FAFAFA] ${(title == "clarity" || title == "mentor")  && 'text-left'}`}>
        {text3}</p>
    </div>
  )
}
export default MiddleCard
