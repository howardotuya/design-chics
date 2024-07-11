import React from "react";
import footerLinks from "./footerLinks.json";
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      logo: <FaSquareXTwitter size={24} />,
      link: "",
    },
    {
      name: "Instagram",
      logo: <FaSquareInstagram size={24} />,
      link: "",
    },
    {
      name: "LinkedIn",
      logo: <FaLinkedin size={24} />,
      link: "",
    },
  ];
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
        <div className="w-full md:w-1/2 justify-start md:justify-center items-start gap-20 flex flex-col sm:flex-row">
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
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.name}
                className="text-black"
              >
                {social.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
