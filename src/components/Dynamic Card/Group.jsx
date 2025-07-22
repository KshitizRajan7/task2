import React from 'react'

const Group = ({ title }) => {
    return (
        <div>
            {/* clarity */}
            {title == "clarity" && (<div className='relative border'>
                <div className='w-[257.39px] h-[338.59px] top-[22px] left-[-49px] absolute shadow-lg'>
                    <img src='clarity/sleeveLine.svg' alt='sleeveLine' className='w-[65.19px] h-[45.69px] top-[182.83px] left-[79.89px] absolute' />
                    <img src='clarity/sleeve.svg' alt='sleeve' className='w-[64.26px] h-[44.77px] top-[183.33px] left-[80.31px] absolute' />
                    <img src='clarity/buttonCover2.svg' alt='button2' className='w-[12.04px] h-[12.04px] top-[192.92px] left-[124.66px] absolute' />
                    <img src='clarity/buttonCover.svg' alt='button1' className='w-[13.05px] h-[13.05px] top-[192.41px] left-[124.15px] absolute' />
                    <img src='clarity/button.svg' alt='button' className='w-[13.05px] h-[13.05px] top-[190.55px] left-[124.49px] absolute' />
                    <img src='clarity/armShadow.svg' alt='button' className='w-[40.92px] h-[92.47px] top-[213.5px] left-[146.6px] absolute' />
                    <img src='clarity/armShadow2.svg' alt='button' className='w-[58.95px] h-[73.08px] top-[276.77px] left-[87.08px] absolute' />
                    <img src='clarity/armShadow3.svg' alt='button' className='w-[59.83px] h-[74.03px] top-[276.27px] left-[86.65px] absolute' />
                    <img src='clarity/arm.svg' alt='button' className='w-[105.14px] h-[138.65px] top-[210.36px] left-[81.95px] absolute' />
                    <img src='clarity/bicepLine.svg' alt='bicepLine' className='w-[70.9px] h-[182.33px] top-[166.91px] left-[137.49px] absolute' />
                    <img src='clarity/bicep.svg' alt='bicep' className='w-[70.03px] h-[181.41px] top-[167.26px] left-[137.83px] absolute' />
                    <img src='clarity/rightArmShadow.svg' alt='rightArmShadow' className='w-[22.22px] h-[18.77px] top-[279.56px] left-[9.12px] absolute' />
                    <img src='clarity/rightArmShadow2.svg' alt='rightArmShadow2' className='w-[23.19px] h-[19.75px] top-[279.08px] left-[8.62px] absolute' />
                    <img src='clarity/rightHandLine.svg' alt='rightHandLine' className='w-[173.94px] h-[184.69px] top-[175.9px] left-[-49px] absolute' />
                    <img src='clarity/rightHand.svg' alt='rightHand' className='w-[172.93px] h-[183.7px] top-[176.32px] left-[-48.5px] absolute' />
                    <img src='clarity/neckShadow.svg' alt='neckShadow' className='w-[24.72px] h-[20.33px] top-[148.25px] left-[62.5px] absolute' />
                    <img src='clarity/neckShadowLine.svg' alt='neckShadowLine' className='w-[25.76px] h-[21.29px] top-[147.78px] left-[62.03px] absolute' />
                    <img src='clarity/finger1.svg' alt='finger1' className='w-[8.55px] h-[24.76px] top-[107.07px] left-[128.67px] absolute' />
                    <img src='clarity/finger2.svg' alt='finger2' className='w-[16.29px] h-[35.72px] top-[96.44px] left-[129.7px] absolute' />
                    <img src='clarity/finger3.svg' alt='finger3' className='w-[4px] h-[27.97px] top-[102.06px] left-[149.03px] absolute' />
                    <img src='clarity/outerFace.svg' alt='outerFace' className='w-[98.25px] h-[131.74px] top-[66.3px] left-[33.06px] absolute' />
                    <img src='clarity/belowFace1.svg' alt='belowFace1' className='w-[5.42px] h-[19.12px] top-[108.15px] left-[126.95px] absolute' />
                    <img src='clarity/belowFace2.svg' alt='belowFace2' className='w-[2.16px] h-[10.34px] top-[98.71px] left-[130.33px] absolute' />
                    <img src='clarity/belowFace3.svg' alt='belowFace3' className='w-[68.34px] h-[100.93px] top-[98.46px] left-[63.69px] absolute' />
                    <img src='clarity/belowFace4.svg' alt='belowFace4' className='w-[23.46px] h-[4.86px] top-[82.09px] left-[56.37px] absolute' />
                    <img src='clarity/belowFace5.svg' alt='belowFace5' className='w-[27.02px] h-[3.04px] top-[72.09px] left-[86.29px] absolute' />
                    <img src='clarity/palm.svg' alt='palm' className='w-[83.22px] h-[106.31px] top-[92.29px] left-[76.25px] absolute' />
                    <img src='clarity/face.svg' alt='face' className='w-[71.95px] h-[50.09px] top-[76.11px] left-[58.9px] absolute' />
                    <img src='clarity/ear.svg' alt='ear' className='w-[10.39px] h-[13.58px] top-[122.98px] left-[41.95px] absolute' />
                    <img src='clarity/ear.svg' alt='ear' className='w-[10.39px] h-[13.58px] top-[122.98px] left-[41.95px] absolute' />
                </div>
            </div>)
            }
            {/* learn */}
            {title == "learn" && <div>learn</div>}
            {/* mentor */}
            {title == "mentor" && <div>mentor</div>}
            {/* job */}
            {title == "job" && <div>job</div>}
        </div >
    )
}

export default Group
