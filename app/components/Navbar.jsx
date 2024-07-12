import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { TbZoomExclamation } from "react-icons/tb";
import { TbPlugConnected } from "react-icons/tb";
import { BiSolidBellRing } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="text-white fixed bg-black bg-opacity-30 h-[10%] flex items-center px-8 w-full">
        
    
      <div className="w-[33.33%] text-2xl">
        <span className="text-4xl text-blue-600 font-bold tracking-wider">
          A
        </span>
        uto
        <span className="text-4xl text-blue-600 font-bold tracking-wider">
          P
        </span>
        iece
      </div>

      <div className="w-[33.33%] flex items-center justify-center gap-10">
        <span>
          <div className="flex justify-center items-center">
            <Link
              className="group text-xl flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r bg-transparent text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:text-blue-600"
              href="/"
            >
              <FaHome />
              <span className="absolute opacity-0 text-md group-hover:opacity-100 group-hover:text-blue-600 group-hover:text-sm group-hover:-translate-y-5 duration-700">
                Home
              </span>
            </Link>
          </div>
        </span>
        <span>
          <div className="flex justify-center items-center">
            <Link
              className="group text-xl flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r bg-transparent text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:text-blue-600"
              href="/"
            >
              <TbZoomExclamation />
              <span className="absolute opacity-0 text-md group-hover:opacity-100 group-hover:text-blue-600 group-hover:text-sm group-hover:-translate-y-5 duration-700">
                About
              </span>
            </Link>
          </div>
        </span>
        <span>
          <div className="flex justify-center items-center">
            <Link
              className="group text-xl flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r bg-transparent text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:text-blue-600"
              href="/"
            >
              <TbPlugConnected />
              <span className="absolute opacity-0 text-md group-hover:opacity-100 group-hover:text-blue-600 group-hover:text-sm group-hover:-translate-y-5 duration-700">
                Contact
              </span>
            </Link>
          </div>
        </span>
      </div>
      <div className="w-[33.33%] flex items-center justify-end">
        <button class="Btn">
          <div class="sign">
            <BiSolidBellRing />
          </div>
          <div class="text">Get notified</div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
