import React from "react";
import { Logo } from "../constants";

const Header = () => {
  return (
    <div className="absolute w-full z-30 px-[6vw] bg-gradient-to-b from-black">
      <div className="w-28 sm:w-52">
        <img
          className="h-full w-full pointer-events-none select-none"
          alt="logo"
          src={Logo}
        />
      </div>
    </div>
  );
};

export default Header;
