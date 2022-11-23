import React from "react";
import logo from "../assets/imgs/kubota-logo.png";

function Header() {
  return (
    <div className="flex w-screen sm:h-8 md:h-20 lg:h-24 xl:h-36 bg-brand">
      <img
        src={logo}
        className="m-auto w-2/4 md:w-2/6 lg:w-1/5 mx-auto"
        alt="logo"
      />
    </div>
  );
}

export default Header;
