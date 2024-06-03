'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import DesignLogoLg from '@/../public/svg/LogoLG.svg'
import links from './links.json'


const Header = () => {

    const pathname = usePathname()

    return (
        <div className='py-10 px-20'>
            <div className='flex flex-row justify-between items-center'>
                {/* logo */}
              <Image src={DesignLogoLg} alt={'Image Logo'} width={215} />
                {/* links */}
                <div className='flex flex-row space-x-10 p-4 bg-[#232323] rounded-full'>
                    {links.map(link => <Link
                        className={` px-5 py-2 ${pathname === link.href ? 'bg-[#393939] rounded-full' : ''}`}
                        key={link.id}
                        href={link.href}>
                        {link.name.toUpperCase()}
                    </Link>)}
                </div>
                {/* become a partner */}
                <button>
                    Become a Partner
                </button>
            </div>
        </div>
    )
}

export default Header