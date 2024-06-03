import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import links from './../links.json'
import Link from 'next/link'
import Image from 'next/image'
import DesignLogoSM from '@/../public/svg/LogoSM.svg'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const MenuSm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    console.log(isOpen)
    return (
        <div className='bg-[#232323] flex flex-row justify-between items-center p-5 rounded-lg'>
            <Image src={DesignLogoSM} alt={'Image Logo'} />
            <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
                <DropdownMenuTrigger className='' >
                    {isOpen ? <X /> : <Menu />}
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={16} className='w-screen bg-black text-white border-0  p-0'>
                    <div className='mx-[16px] md:mx-20 bg-[#232323] rounded-b-lg p-2'>
                        {links.map(link => <DropdownMenuItem className={` p-3 ${pathname === link.href ? 'font-bold bg-[#2C2C2C]' : 'font-thin '} :hover:bg-[#2C2C2C]`} key={link.id}>
                            <Link onClick={() => setIsOpen(false)} href={link.href}>
                                {link.name}
                            </Link>

                        </DropdownMenuItem>)}
                        <button className='p-4 bg-[#9ADBE5] text-black font-bold  rounded-full w-full mb-2'>
                            {'Become a Partner'.toUpperCase()}
                        </button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}

export default MenuSm