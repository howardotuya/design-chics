'use client'
import React from 'react'

import MenuLg from './menu/MenuLg'
import MenuSm from './menu/MenuSm'

const Header = () => {
    return (
        <div className='container relative my-10 font-roc-grotesk font-thin'>
            <>
                <MenuLg />
                <MenuSm />
            </>
        </div>
    )
}

export default Header
