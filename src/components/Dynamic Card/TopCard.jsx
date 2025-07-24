import React from 'react'
import MiddleCard from './MiddleCard'
import Group from './Group'

const TopCard = ({ title, text1, text2, text3 }) => {
  return (
    <div className={`inline-flex rounded-[30px] w-[592px] ${title === 'clarity' && 'bg-[#F45B5B]'} ${title === 'learn' && 'bg-[#5492A0]'} ${title === 'mentor' && 'bg-[#6C64A8]'} ${title === 'job' && 'bg-[#A88964]'} relative`}>
      {/* group */}
      {title === "clarity" || title === "mentor" ? (
        <Group title={title} />
      ) : (
        <div className={`${ title == 'clarity' && 'top-[1px] left-[px] absolute'} p-10 text-left`}>
          <MiddleCard text1={text1} text2={text2} text3={text3} />
        </div>
      )
      }

      {title === "clarity" || title === "mentor" ? (<div className='top-[58px] left-[206px] p-10 text-right'>
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
