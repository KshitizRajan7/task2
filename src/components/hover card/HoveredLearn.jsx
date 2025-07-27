import React, { useState } from 'react'

const HoveredLearn = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = 1;

    const goNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    const goPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }
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
            <div className='w-[592px] h-[341px] rounded-4xl relative overflow-hidden' style={{ display: currentIndex == 0 ? "block" : "none" }}>
                <img src='learn/learnHoverBg.svg' className='w-[592px] h-[341px]' alt='clarityHover' />
                <img src='learn/learnImage.png' className='w-[572px] h-[329px] top-[38px] left-[62px] absolute' alt='learnImage' />
                {/* text */}
                <p className='w-[241px] h-[48px] top-[36px] left-[80px] absolute font-nohemi font-bold text-xl leading-[120%] tracking-normal text-[#FFFFFF]'>
                    Focused faces—learning mode: ON!
                </p>
                {/* substract-ellispe-left */}
                <div onClick={() => goPrev()} className='cursor-pointer'>
                    <div className='w-[106px] h-[106px] top-[117px] left-[-29px] absolute bg-white rounded-full '>
                    </div>
                    {/* ellispe left  */}
                    <div className='w-[62px] h-[62px] top-[139px]  absolute bg-white rounded-full shadow-lg' />
                    {/* left-arrow */}
                    <div className='w-[32px] h-[32px] top-[154px] left-[15px] absolute '>
                        <img src='/arrowLeft.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow left' />
                    </div>
                </div>

                <div onClick={() => goNext()} className='cursor-pointer'>
                    {/* substract-ellispe-right */}
                    {/* ellispe-right */}
                    <div className='w-[106px] h-[106px] top-[117px] left-[515px] absolute bg-white rounded-full' />
                    <div className='w-[62px] h-[62px] top-[139px] left-[530px] absolute bg-white rounded-full shadow-lg cursor-pointer' onClick={() => goNext()} />
                    {/* right arrow  */}
                    <div className='w-[32px] h-[32px] top-[154px] left-[545px] absolute '>
                        <img src='/arrowRight.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow right' />
                    </div>
                </div>
            </div>
            {/* substract*/}
            <div className='w-[592px] h-[341px] rounded-4xl relative overflow-hidden' style={{ display: currentIndex == 1 ? "block" : "none" }}>
                <img src='learn/learnHoverBg.svg' className='w-[592px] h-[341px]' alt='clarityHover' />
                <img src='learn/learnImage2.png' className='w-[572px] h-[329px] top-[24px] left-[10px] absolute' alt='learnImage2' />
                {/* text */}
                <p className='w-[353px] h-[48px] top-[41px] left-[119px] absolute font-nohemi font-bold text-xl leading-[120%] tracking-normal text-[#FFFFFF] text-center'>
                    Laptops, lessons, and a whole lot of growth!
                </p>
                {/* substract-ellispe-left */}

                <div onClick={() => goPrev()} className='cursor-pointer'>
                    <div className='w-[106px] h-[106px] top-[117px] left-[-29px] absolute bg-white rounded-full' onClick={() => goPrev()}>
                    </div>
                    {/* ellispe left  */}
                    <div className='w-[62px] h-[62px] top-[139px]  absolute bg-white rounded-full shadow-lg ' />
                    {/* left-arrow */}
                    <div className='w-[32px] h-[32px] top-[154px] left-[15px] absolute '>
                        <img src='/arrowLeft.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow left' />
                    </div>
                </div>
                {/* substract-ellispe-right */}

                <div onClick={() => goNext()} className='cursor-pointer'>
                    {/* ellispe-right */}
                    <div className='w-[106px] h-[106px] top-[117px] left-[510px] absolute bg-white rounded-full' />
                    <div className='w-[62px] h-[62px] top-[139px] left-[530px] absolute bg-white rounded-full shadow-lg' />
                    {/* right arrow  */}
                    <div className='w-[32px] h-[32px] top-[154px] left-[545px] absolute '>
                        <img src='/arrowRight.svg' className='w-[22.4px] h-[19.6px] top-[6.2px] left-[4.8px] absolute' alt='arrow right' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoveredLearn