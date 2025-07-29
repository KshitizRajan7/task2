'use client'
import React, { useState } from 'react'
import { clarity, job, learn, mentor } from '@/data/data'
import Card from './Dynamic Card/Card'
import HoveredClarity from './hover card/HoveredClarity'
import HoveredLearn from './hover card/HoveredLearn'

const FrameBottom = () => {
  const [isHoveredClarity, setIsHoveredClarity] = useState(false);
  const [isHoveredLearn, setIsHoveredLearn] = useState(false);
  return (
    <div className='inline-flex flex-col w-[1213px] h-[722px]  relative'>
      {/* frame 811888 */}
      <div className='inline-flex w-[1216px] left-[-1.5px] gap-[32px] absolute '>
        {/* clarity */}
        <div
          onMouseEnter={() => setIsHoveredClarity(true)}
          onMouseLeave={() => setIsHoveredClarity(false)}
          className="relative w-fit"
        >
          {/* Default Card */}
          <div
            className={` transition-opacity duration-300 ${isHoveredClarity ? 'opacity-0 animate-fade-out' : 'opacity-100'
              }`}
          >
            <Card title="clarity" {...clarity} />
          </div>

          {/* Hovered Version */}
          <div
            className={`absolute top-0 left-0 transition-opacity duration-300 ${isHoveredClarity ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'
              }`}
          >
            <HoveredClarity />
          </div>
        </div>
         
         {/* learn */}
        <div
          onMouseEnter={() => setIsHoveredLearn(true)}
          onMouseLeave={() => setIsHoveredLearn(false)}
          className="relative w-fit"
        >
          {/* Default Card */}
          <div
            className={`absolute top-0 left-0 transition-opacity duration-300 ${isHoveredLearn ? 'opacity-0 animate-fade-out' : 'opacity-100'
              }`}
          >
            <Card title="learn" {...learn} />
          </div>

          {/* Hovered Version */}
          <div
            className={`absolute top-0 left-0 transition-opacity duration-300 ${isHoveredLearn ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'
              }`}
          >
            <HoveredLearn />
          </div>
        </div>
        
        {/* <div onMouseEnter={() => setIsHoveredLearn(true)} onMouseLeave={() => setIsHoveredLearn(false)}>
          {isHoveredLearn ? <HoveredLearn /> : <Card title={"learn"} {...learn} />}
        </div> */}
      </div>
      {/* frame 811887 */}
      <div className='inline-flex w-[1217px] h-[341px] top-[381.17px] left-[-2.5px] gap-[32px] absolute'>
        <Card title={"mentor"} {...mentor} />
        <Card title={"job"} {...job} />
      </div>
    </div>
  )
}

export default FrameBottom
