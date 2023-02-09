import React, { ReactNode } from 'react'

interface IThoughtRectangle {
    children:ReactNode
}

const ThoughtRectangle = ({children}:IThoughtRectangle) => {
  return (
      <div className={`!bg-[url(./assets/thought_rectangle.svg)] !aspect-[3.03] p-[30px] max-w-[613px]  !bg-cover bg-no-repeat absolute left-[10%] font-[400] bottom-0 top-0 h-max my-auto align-middle`}>
          {children}
      </div>
  )
}

export default ThoughtRectangle