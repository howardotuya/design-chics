import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import DesignLogoLg from '@/../public/svg/LogoLG.svg'
import links from './../links.json'

const MenuLg = () => {
    const pathname = usePathname()
    return (
        <div className='hidden lg:flex flex-row justify-between items-center'>
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
            <button className='p-4 bg-brandBlue text-black font-bold  rounded-full'>
                {'Become a Partner'.toUpperCase()}
            </button>
        </div>
    )
}

export default MenuLg