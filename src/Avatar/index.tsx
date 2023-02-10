import React from 'react'
import alekhImage from "../assets/alekh/alekh_1.svg";

interface IAvatar {
    imgSrc: string;
}

const Avatar = ({ imgSrc }: IAvatar) => {
    return (
        <img className='absolute bottom-[10%] left-[6%]' src={imgSrc}></img>
    )
}

export default Avatar