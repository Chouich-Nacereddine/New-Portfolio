"use client"

import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { TbZoomExclamation } from "react-icons/tb";
import { TbPlugConnected } from "react-icons/tb";
import { BiSolidBellRing } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="text-black fixed bg-[#FFFFFF] h-[10%] flex items-center z-10 px-8 w-full overflow-hidden">
      
      <span className="w-[20%] text-3xl tracking-wide">
        <span className="text-[#397DF0] text-5xl">N</span>acerddine
      </span>

      <span className="w-[60%] flex justify-center">
        <ul className="flex items-center gap-8 justify-center pt-2">
          <li className="font-mono cursor-pointer">Home</li>
          <li className="font-mono cursor-pointer">About</li>
          <li className="font-mono cursor-pointer">Skills</li>
          <li className="font-mono cursor-pointer">Certifications</li>
          <li className="font-mono cursor-pointer">Portfolio</li>
          <li className="font-mono cursor-pointer">Experience</li>
          <li className="font-mono cursor-pointer">Contact</li>
        </ul>
      </span>
      
      <span className="w-[20%] flex justify-end pt-1">
        <div className="w-max bg-[#397DF0] flex items-center justify-center px-3 py-2 rounded-xl text-white tracking-widest text-xl">
          Hire me
        </div>
      </span>
      
    </header>
  );
};

export default Navbar;
