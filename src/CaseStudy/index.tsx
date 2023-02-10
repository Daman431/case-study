import React, { Children, ReactNode, useState, useEffect } from 'react'

// Allowed minimum 2
interface ICaseStudy {
  children: ReactNode[];
}

const CaseStudy = ({ children }: ICaseStudy) => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const nextHandler = () => {
    if (currentPage !== children.length - 1) {
      setCurrentPage(page => page + 1)
    }
  }
  const prevHandler = () => {
    if (currentPage !== 0) {
      setCurrentPage(page => page - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextHandler()
      }
      if (e.key === 'ArrowLeft') {
        prevHandler()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentPage])

  const progressWidth = `${(currentPage + 1) / children.length * 100}%`
  return (
    <div>
      {children[currentPage]}
      <div className='absolute bottom-[45px] text-white flex gap-4 right-[20px]'>
        <p onClick={prevHandler}>
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-6.99382e-07 14L27 27.8564L27 0.143595L-6.99382e-07 14Z" fill={`${currentPage === 0 ? '#858585' : '#ffffff'}`} />
          </svg>
        </p>
        <p onClick={nextHandler}>
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 14L-1.30507e-06 27.8564L-9.36995e-08 0.143593L27 14Z" fill={`${currentPage === children.length - 1 ? '#858585' : '#ffffff'}`} />
          </svg>
        </p>
      </div>
      <div className="w-full h-[20px] bg-gray-200 rounded-0 dark:bg-gray-700 absolute bottom-[10px]">
        <div className="h-[20px] rounded-0 bg-[#669E38]" style={{ width: `${progressWidth}` }}></div>
      </div>
    </div>
  )
}

export default CaseStudy