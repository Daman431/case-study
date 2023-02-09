import React, { ReactNode } from 'react'
import bulbImage from '../assets/bulb.svg'
interface IInsight {
    children: ReactNode
}

const Insight = ({ children }: IInsight) => {
    return (
        <div className=' absolute !aspect-[1.2] bg-[#ffffff] rounded-[7px] p-[15px] border-l-[5px] border-[#FFB789] right-[2%] top-[5%] slideInTop'>
            <h1 className='flex text-[26px] leading-[36px] pl-[15px]'>
                Insight
                <img src={bulbImage} className='w-[22px] h-[32px] mt-[-10px] my-auto mx-[10px] mt-auto' />
            </h1>
            <div className='pl-[15px]'>
                {children}
            </div>
        </div>
    )
}

export default Insight