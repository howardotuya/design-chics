import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import links from "./../links.json";

const MenuLg = () => {
  const pathname = usePathname();
  return (
    <div className="container w-full lg:flex items-center justify-between hidden">
      <div className="w-1/5">
        <Image
          src="/svg/LogoLG.svg"
          alt={"Image Logo"}
          width={77}
          height={46}
        />
      </div>
      <div className="p-3 bg-neutral-800 rounded-[515.61px] backdrop-blur-[20.62px] justify-center items-center gap-2.5 inline-flex">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={`px-3 py-2  rounded-[100px] justify-center items-center gap-[10.31px] flex ${
              pathname === link.href ? "bg-neutral-700 font-semibold" : ""
            }`}
          >
            <span className=" h-5 text-center text-stone-50 text-base font-roc-grotesk uppercase tracking-tight">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-end w-1/5">
        <button className="slide w-[120px] bg-brandBlue rounded-[515.61px] text-center text-neutral-950 text-base py-3 flex items-center justify-center font-bold font-roc-grotesk uppercase tracking-tight">
          <span className="text">Support Us</span>
        </button>
      </div>
    </div>
  );
};

export default MenuLg;
