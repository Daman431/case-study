import React, { ReactNode } from 'react'

interface ICaseStudyPage {
  children: ReactNode;
}

const CaseStudyPage = ({ children }: ICaseStudyPage) => {
  return (
    <div className={`h-[100vh] w-[100vw] bg-[url(./assets/big_basket.png)]`}>
      <div className={`h-[100vh] w-[100vw] !bg-[#000000]/80`}>
        {children}
      </div>
    </div>
  )
}

export default CaseStudyPage