import React, { ReactNode } from 'react'

interface IDecodeTitle {
    children: ReactNode;
    colorClass?: string;
}

const DecodeTitle = ({ children, colorClass }: IDecodeTitle) => {
    return (
        <div className='absolute left-[6%] text-white pl-[10px] py-0 flex bottom-[60%]'>
            <div className={`w-[10px] my-[20px] mr-[10px] rounded-[10px] border-[1px] border-[#ffffff] ${colorClass}`}>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DecodeTitle