import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import DesignLogoLg from '@/../public/svg/LogoLG.svg'
import links from './../links.json'
import Button from '../buttons/Button'

const MenuLg = () => {
    const pathname = usePathname()
    return (
        <div className='flex flex-row justify-between items-center'>
            {/* logo */}
            <Image src={DesignLogoLg} alt={'Image Logo'} width={130} />
            {/* links */}
            <div className='flex flex-row md:space-x-2 p-4 bg-[#232323] rounded-full'>
                {links.map(link => <Link
                    className={` px-5  ${pathname === link.href ? 'bg-brandGrey rounded-full' : ''}`}
                    key={link.id}
                    href={link.href}>
                    {link.name.toUpperCase()}
                </Link>)}
            </div>
            {/* become a partner */}
            <Button
                title='BECOME A PARTNER'
                // onClick={() => console.log('clicked')}
                className='bg-brandBlue '
            />
        </div>
    )
}

export default MenuLg