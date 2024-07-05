import React from "react";
import footerLinks from "./footerLinks.json";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="sticky w-full bottom-0 -z-10 mt-auto py-10 md:py-20 bg-yellow-50">
      <div className="max-w-[1440px] container flex flex-col space-y-20 md:space-y-0 md:flex-row">
        <div className="w-1/2">
          <Image
            src="/svg/logo_black.svg"
            alt={"Image Logo"}
            width={77}
            height={46}
          />
        </div>
        <div className="w-full md:w-1/2 justify-start md:justify-center items-start gap-20 flex flex-row">
          {footerLinks.map((footer) => (
            <div
              key={footer.id}
              className="flex-col justify-start items-start gap-5 inline-flex"
            >
              <div className="text-neutral-950 text-lg font-bold font-roc-grotesk">
                {" "}
                {footer.title}
              </div>
              <div className="flex-col justify-start items-start gap-[19px] flex">
                {footer.subtitle.map((subT) => (
                  <Link
                    href={subT.href}
                    key={subT.id}
                    className="text-neutral-950 text-base font-normal font-karla"
                  >
                    {subT.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
