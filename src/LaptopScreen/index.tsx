import React from 'react'
import screenImage from "../assets/screen/screen_1.png";

interface ILaptopScreen {
    imgSrc: string;
}

const LaptopScreen = ({ imgSrc }: ILaptopScreen) => {
    return (
        <div className={`absolute top-0 bottom-0 m-auto right-[0%] align-middle max-h-[80vh] min-w-[50%] zoomOut align-middle`}>
            <img className={`object-contain max-h-[80vh]`} src={imgSrc}></img>
        </div>
    )
}

export default LaptopScreen