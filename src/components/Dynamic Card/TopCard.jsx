import React from 'react'
import MiddleCard from './MiddleCard'
import Group from './Group'

const TopCard = ({ title, text1, text2, text3 }) => {
  return (
    <div className={`inline-flex rounded-[30px] w-[592px] h-[341px] ${title === 'clarity' && 'bg-[#F45B5B]'} ${title === 'learn' && 'bg-[#5492A0]'} ${title === 'mentor' && 'bg-[#6C64A8]'} ${title === 'job' && 'bg-[#A88964]'} relative`}>
      {/* group */}
      {title === "clarity" || title === "mentor" ? (
        <Group title={title} />
      ) : (
        <div className={`top-[58px] left-[35px] absolute  text-left`}>
          <MiddleCard text1={text1} text2={text2} text3={text3} />
        </div>
      )
      }

      {title === "clarity" || title === "mentor" ? (<div className='inline-flex flex-col w-[351px] top-[58px] left-[206px] gap-[32px] absolute'>
        <MiddleCard text1={text1} text2={text2} text3={text3} />
      </div>) :
        (
          <Group title={title} />
        )
      }
    </div>
  )
}

export default TopCard
