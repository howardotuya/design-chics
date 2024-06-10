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


import links from './../links.json'
import Button from '../buttons/Button'

const MenuSm = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const handleDropDownOpen = () => setIsDropDownOpen(!isDropDownOpen)
    const pathname = usePathname()
    return (
        <div className='lg:hidden'>
            <div className='bg-[#232323] flex flex-row justify-between items-center p-5 rounded-lg'>
                <Image src='/svg/LogoLG.svg' alt={'Image Logo'} width={65} height={65} />
                <DropdownMenu onOpenChange={handleDropDownOpen} open={isDropDownOpen}>
                    <DropdownMenuTrigger className='' >
                        {isDropDownOpen ? <X /> : <Menu />}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  className='w-screen bg-black text-white border-0  p-0'>
                        <div className='mx-6  bg-[#232323] rounded-b-lg p-2'>
                            {links.map(link => <div onClick={handleDropDownOpen} className={` p-3 ${pathname === link.href ? 'font-bold bg-[#2C2C2C]' : 'font-thin '} :hover:bg-[#2C2C2C]`} key={link.id}>
                                <Link  href={link.href}>
                                    {link.name}
                                </Link>
                            </div>)}
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