import React from 'react'
import Card from '../Dynamic Card/Card'

const Frame1 = ({ title, text1, text2, text3 }) => {
  return (
    <div className='inline-flex left-[-1.5px] gap-[32px]'>
      <Card title={title} text1={text1} text2={text2} text3={text3} />
    </div>
  )
}

export default Frame1
