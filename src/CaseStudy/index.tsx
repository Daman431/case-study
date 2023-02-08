import React, { ReactNode } from 'react'

interface ICaseStudy {
  children: ReactNode
}

const CaseStudy = ({ children }: ICaseStudy) => {
  return (
    <div className={`h-[100vh] w-[100vw] !bg-[url(./assets/big_basket.png)]`}>
      <div className={`h-[100vh] w-[100vw] !bg-[#000000]/80`}>
        {children}
      </div>
    </div>
  )
}

export default CaseStudy