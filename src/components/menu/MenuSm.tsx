import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import links from "./../links.json";

const MenuSm = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownOpen = () => setIsDropDownOpen(!isDropDownOpen);
  const pathname = usePathname();
  return (
    <div className="mx-3 lg:hidden relative">
      <div className="bg-[#232323] flex flex-row justify-between items-center px-4 py-4 rounded-full">
        <Image
          src="/svg/LogoLG.svg"
          alt={"Image Logo"}
          width={50}
          height={50}
        />
        <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {isDropDownOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isDropDownOpen && (
        <div className="bg-[#232323] top-[70px] absolute -mt-[3px] w-full px-4 py-4 rounded-3xl text-[14px]">
          {links.map((link) => (
            <Link
              className={`p-3 block rounded-full uppercase font-normal ${pathname === link.href && " bg-[#2C2C2C] font-semibold"
                } :hover:bg-[#2C2C2C]`}
              onClick={handleDropDownOpen}
              key={link.id}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSm;
