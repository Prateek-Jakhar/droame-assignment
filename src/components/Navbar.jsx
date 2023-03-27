import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="h-[3rem] bg-slate-500 flex p-5 items-center shadow-lg">
      <a href="https://www.droame.com/">
        <img src={logo} className="w-[3rem]" />
      </a>
      {/* <span className="text-slate-900">Droame</span> */}
    </nav>
  );
};

export default Navbar;
