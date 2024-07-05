"use client";
import React from "react";

import MenuLg from "./menu/MenuLg";
import MenuSm from "./menu/MenuSm";

const Header = () => {
  return (
    <div className="container sticky top-0 z-20 pt-5 md:pt-10 font-roc-grotesk font-thin">
      <>
        <MenuLg />
        <MenuSm />
      </>
    </div>
  );
};

export default Header;
