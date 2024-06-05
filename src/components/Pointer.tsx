import React from 'react'
import { MousePointer2 } from 'lucide-react'


interface IProps{
    title: string,
    position: 'left' | 'right',
    className: string,
    bgColor: string
}
const Pointer = ({ title, position,bgColor, className}: IProps) => {
    return (
        <div className={`absolute ${className}`}>
            <MousePointer2 className={`text-${bgColor} absolute -top-7 ${position === 'left' ? '-left-7 rotate-0' : '-right-7 rotate-90'} `} fill='currentColor' />
            <span className={`py-2 px-4 text-xs font-karla  font-medium bg-brandBlue  rounded-full bg-${bgColor}`}>{title}</span>
        </div>
    )
}

export default Pointer