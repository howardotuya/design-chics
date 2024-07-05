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
    <div className="lg:hidden relative">
      <div className="bg-[#232323] flex flex-row justify-between items-center px-3 py-4 rounded-lg">
        <Image
          src="/svg/LogoLG.svg"
          alt={"Image Logo"}
          width={65}
          height={65}
        />
        <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {isDropDownOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isDropDownOpen && (
        <div className="bg-[#232323] border-t absolute -mt-[3px] w-full border-gray-500 px-4 py-4 rounded-br-lg rounded-bl-lg text-xl">
          {links.map((link) => (
            <Link
              className={`p-3 block ${
                pathname === link.href ? "font-bold bg-[#2C2C2C]" : "font-thin "
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
