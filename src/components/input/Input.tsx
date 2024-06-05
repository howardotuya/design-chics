import React from 'react'

interface IProps {
    placeholder: string,
    type: string,
    name: string,
    className:string
}

const Input = ({ placeholder, type, name, className }: IProps) => {
    return (
        <input className={`w-full p-3 placeholder-brandblack font-thin  rounded-full ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input