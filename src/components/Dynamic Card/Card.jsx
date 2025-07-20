import React from 'react'
import TopCard from './TopCard'

const Card = () => {
  const title = "learn";
  return (
    <div className='inline-flex'>
      <div>
        <TopCard title={title}/>
      </div>
    </div>
  )
}

export default Card
