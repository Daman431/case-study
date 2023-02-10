import React from 'react'
import screenImage from "../assets/screen/screen_1.png";

interface IMobileScreen {
    position?: 'center' | 'left' | 'right';
    imgSrc: string;
    isLeft?: boolean;
}

const MobileScreen = ({ position = 'center', imgSrc, isLeft }: IMobileScreen) => {
    return (
        <div className={`absolute top-0 bottom-0 m-auto ${isLeft ? ' left-[6%] ' : ' right-[6%] '} align-middle max-h-[80vh] min-w-[50%] zoomOut`}>
            <img className={`object-contain max-h-[80vh] 
            ${position === 'center' && 'mx-auto'}
            ${position === 'left' && 'mr-auto'}
            ${position === 'right' && 'ml-auto'}
            `} src={imgSrc}></img>
        </div>
    )
}

export default MobileScreen