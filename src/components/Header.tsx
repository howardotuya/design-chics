'use client'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuLg from './menu/MenuLg'
import MenuSm from './menu/MenuSm'

const Header = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1102px)' })

    return (
        <div className='container my-10 font-roc-grotesk font-thin'>
            <>
                {/* {isLargeScreen ? <MenuLg /> : <MenuSm />} */}
                {/* <MenuLg /> */}
                <MenuSm />
            </>
        </div>
    )
}

export default Header
