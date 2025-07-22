import React from 'react'
import Card from '../Dynamic Card/Card'

const Frame2 = ({ title, text1, text2, text3 }) => {
  return (
    <div className='inline-flex top-[381.17px] left-[-2.5px] gap-[32px]'>
      <Card title={title} text1={text1} text2={text2} text3={text3} />
    </div>
  )
}

export default Frame2
