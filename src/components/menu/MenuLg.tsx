import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


import links from './../links.json'

const MenuLg = () => {
    const pathname = usePathname()
    return (
        <div className="container w-full fixed top-10 left-0 right-0 z-999 flex items-center justify-between">
            <Image src='/svg/LogoLG.svg' alt={'Image Logo'} width={77} height={46} />
            <div className="p-2.5 bg-neutral-800 rounded-[515.61px] backdrop-blur-[20.62px] justify-center items-center gap-2.5 flex">
                {links.map(link => <Link href={link.href} key={link.id} className={`px-3 py-2  rounded-[100px] justify-center items-center gap-[10.31px] flex ${pathname === link.href ? "bg-neutral-700" : ''}`}>
                    <span className=" h-5 text-center text-stone-50 text-base font-medium font-roc-grotesk uppercase tracking-tight">{link.name}</span>
                </Link>)}
            </div>
            <div className="px-4 py-[18px] bg-brandBlue rounded-[515.61px] justify-center items-center ">
                <div className="w-[120px] h-5 text-center text-neutral-950 text-base font-bold font-roc-grotesk uppercase tracking-tight">Support Us</div>
            </div>
        </div>
    )
}

export default MenuLg