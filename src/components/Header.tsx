'use client'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuLg from './menu/MenuLg'
import MenuSm from './menu/MenuSm'

const Header = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1102px)' })

    return (
        <div className='py-[24px] md:py-10 px-[16px] md:px-20'>
            {isLargeScreen ? <MenuLg /> : <MenuSm />}
        </div>
    )
}

export default Header
