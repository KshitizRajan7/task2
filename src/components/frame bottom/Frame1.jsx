import React from 'react'
import Card from '../Dynamic Card/Card'

const Frame1 = ({title}) => {
    return (
    <div className='inline-flex left-[-1.5px] gap-[32px] '>
      <Card title={title}/>
    </div>
  )
}

export default Frame1
