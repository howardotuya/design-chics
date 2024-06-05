import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import DesignLogoSM from '@/../public/svg/LogoSM.svg'
import links from './../links.json'
import Button from '../buttons/Button'

const MenuSm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    return (
        <div className='lg:hidden'>
            <div className='bg-[#232323] flex flex-row justify-between items-center p-5 rounded-lg'>
                <Image src={DesignLogoSM} alt={'Image Logo'} />
                <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
                    <DropdownMenuTrigger className='' >
                        {isOpen ? <X /> : <Menu />}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  className='w-screen bg-black text-white border-0  p-0'>
                        <div className='mx-[16px] md:mx-20 bg-[#232323] rounded-b-lg p-2'>
                            {links.map(link => <DropdownMenuItem className={` p-3 ${pathname === link.href ? 'font-bold bg-[#2C2C2C]' : 'font-thin '} :hover:bg-[#2C2C2C]`} key={link.id}>
                                <Link onClick={() => setIsOpen(false)} href={link.href}>
                                    {link.name}
                                </Link>
                            </DropdownMenuItem>)}
                            <Button

                                title='BECOME A PARTNER'
                                // onClick={() => console.log('clicked')}
                                className='bg-brandBlue '
                            />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default MenuSm