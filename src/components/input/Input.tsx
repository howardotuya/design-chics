import React from 'react'

interface IProps {
    placeholder: string,
    type: string,
    name: string,
    className:string
}

const Input = ({ placeholder, type, name, className }: IProps) => {
    return (
        <input className={`w-full p-3 placeholder-brandblack font-light  rounded-full focus:outline-none focus:ring-0  ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input