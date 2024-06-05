import React from 'react'

interface IButton {
  title: string,
  className?: string,
  // onClick: () => void
}
const Button = ({ title, className}: IButton) => {
  return (
    <button className={`w-full rounded-full text-center font-bold p-3 ${className}`} >
      {title}
    </button>
  )
}

export default Button