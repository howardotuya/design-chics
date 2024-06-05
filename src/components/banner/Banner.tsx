import React from 'react'


interface IBanner{
    title: string,
    subTitlte: string
}

const Banner = ({ title, subTitlte }: IBanner) => {
  return (
      <div className='my-5 text-center'>
          <h1 className='text-[32.4px] font-roc-grotesk font-bold leading-9 mb-5'>
             {title}
          </h1>
          <p className='text-sm text-[#BABABA] font-karla font-thin leading-4'>
              {subTitlte}
          </p>
      </div>
  )
}

export default Banner