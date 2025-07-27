import React from 'react'

const HoveredLearn = () => {
    return (
        <div className='inline-flex relative'>
            {/* image */}
            {/* image */}
            {/* text */}
            {/* image1 */}
            {/* image2 */}
            {/* arrow-right */}
            {/* arrow-left */}

            {/* ellispe-left */}
            {/* substract*/}
            <div className='w-[592px] h-[341px] rounded-4xl relative'>
                <img src='learn/learnHoverBg.svg' className='w-[592px] h-[341px]' alt='clarityHover' />
                {/* substract-ellispe-left */}
                <div className='w-[106px] h-[106px] top-[117px] left-[-29px] absolute bg-white rounded-full'>
                </div>
                {/* ellispe left  */}
                <div className='w-[62px] h-[62px] top-[139px]  absolute bg-white rounded-full shadow-lg ' />
                {/* left-arrow */}
                <div className='w-[32px] h-[32px] top-[154px] left-[15px] absolute '>
                    <img src='/arrowLeft.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow left' />
                </div>
                {/* substract-ellispe-right */}
                {/* ellispe-right */}
                <div className='w-[106px] h-[106px] top-[117px] left-[515px] absolute bg-white rounded-full' />
                <div className='w-[62px] h-[62px] top-[139px] left-[530px] absolute bg-white rounded-full shadow-lg' />
                {/* right arrow  */}
                <div className='w-[32px] h-[32px] top-[154px] left-[545px] absolute '>
                    <img src='/arrowRight.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow left' />
                </div>
            </div>
        </div>
    )
}

export default HoveredLearn