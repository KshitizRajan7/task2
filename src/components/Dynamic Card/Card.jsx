import React from 'react'
import TopCard from './TopCard'

const Card = ({ title, text1, text2, text3 }) => {
  return (
    <div className='inline-flex'>
      <div>
        <TopCard title={title} text1={text1} text2={text2} text3={text3} />
      </div>
    </div>
  )
}

export default Card
