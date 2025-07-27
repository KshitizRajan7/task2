import React from 'react'

const HoveredClarity = () => {
    return (
        <div className='inline-flex relative'>
            {/* image */}
            {/* image */}
            {/* text */}
            {/* image1 */}
            {/* image2 */}

            {/* substract*/}
            <div className='w-[592px] h-[341px] rounded-4xl relative'>
                <img src='clarity/clarityHoverBg.svg' className='w-[592px] h-[341px]' alt='clarityHover' />
                <img src='clarity/image.png' className='w-[88px] h-[88px] top-[24px] left-[67px] rotate-[11.91deg] absolute'/>
                <img src='clarity/image.png' className='w-[88px] h-[88px] top-[193px] left-[385px] rotate-[14.52deg] transfrom scale-x-[-1] absolute'/>
                {/* text  */}
                <p className='w-[241px] h-[72px] top-[56px] left-[326px] absolute font-nohemi font-bold text-xl leading-[120%] tracking-normal text-[#FFFFFF]'>
                    Clarity unlocked—stickers, sips, and skills all in one go!
                </p>
                {/* image1 */}
                <img src='clarity/image1.png' className='w-[352px] h-[323px] top-[18px] left-[35px] absolute rounded-bl-3xl brightness-0' alt='image1' />
                {/* image2  */}
                <img src='clarity/image1.png' className='w-[352px] h-[323px] top-[18px] left-[24px] absolute rounded-bl-3xl ' alt='image2' />
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

export default HoveredClarity
HoveredClarity