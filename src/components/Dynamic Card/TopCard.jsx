import React from 'react'
import MiddleCard from './MiddleCard'

const TopCard = ({title}) => {
  return (
    <div className='inline-flex rounded-[30px] border'>
      {/* group */}
      {title === "learn" || title === "job" ? (<div className='top-[22px] left-[-49px] w-[257.39px] h-[338.59px] shadow-sm border'>
        Group
      </div>) : (
        <div className='top-[58px] left-[206px]  border'>
          <MiddleCard />
        </div>
      )
      }

      {title === "learn" || title ==="job" ? (<div className='top-[58px] left-[206px]  border'>
        <MiddleCard />
      </div>) :
        (<div className='top-[22px] left-[-49px] w-[257.39px] h-[338.59px] shadow-sm border'>
          Group
        </div>)
      }
    </div>
  )
}

export default TopCard
