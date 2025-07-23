import React from 'react'
import MiddleComponent from './MiddleComponent'

const TopComponent = () => {
  return (
    <div className=' -black inline-flex w-[1440px] pt-[120px] pb-[60px] justify-center items-center'>  
      <MiddleComponent/>
    </div>
  )
}

export default TopComponent
