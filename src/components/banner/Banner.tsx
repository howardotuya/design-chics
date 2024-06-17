import React from 'react'


interface IBanner{
    title?: string,
    subTitlte?: string,
    className?: string
}

const Banner = ({ title, subTitlte , className}: IBanner) => {
  return (
      <div className={`my-5 text-center ${className}`}>
          <h1 className='text-[32.4px] lg:text-4xl font-roc-grotesk font-bold leading-9 mb-5'>
             {title}
          </h1>
          <p className='text-sm text-[#0B0A0A] font-karla font-thin leading-4'>
              {subTitlte}
          </p>
      </div>
  )
}

export default Banner