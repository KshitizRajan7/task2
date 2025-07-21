import React from 'react'
import TopCard from './TopCard'

const Card = ({title}) => {
  return (
    <div className='inline-flex'>
      <div>
        <TopCard title={title}/>
      </div>
    </div>
  )
}

export default Card
