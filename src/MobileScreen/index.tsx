import React from 'react'
import screenImage from "../assets/screen/screen_1.png";

interface IMobileScreen {
    position?: 'center' | 'left' | 'right';
    imgSrc: string;
}

const MobileScreen = ({ position = 'center', imgSrc }: IMobileScreen) => {
    return (
        <div className='absolute top-0 bottom-0 m-auto right-[6%] align-middle max-h-[80vh] min-w-[45%]'>
            <img className={`object-contain max-h-[80vh] 
            ${position === 'center' && 'mx-auto'}
            ${position === 'left' && 'mr-auto'}
            ${position === 'right' && 'ml-auto'}
            `} src={imgSrc}></img>
        </div>
    )
}

export default MobileScreen