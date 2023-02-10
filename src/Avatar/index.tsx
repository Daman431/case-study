import money from '../assets/rupee.svg'
interface IAvatar {
    imgSrc: string;
    addMoney?: boolean;
}

const Avatar = ({ imgSrc, addMoney }: IAvatar) => {
    return (
        <div className='absolute bottom-[10%] left-[6%]'>
            <img src={imgSrc}></img>
            {
                addMoney && <img src={money} className='absolute top-[-10px] left-[0%]'></img>
            }
        </div>
    )
}

export default Avatar