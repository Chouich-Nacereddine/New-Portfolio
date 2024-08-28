"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [selectedBTN, setselectedBTN] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-black fixed bg-[#FFFFFF] h-[10%] flex items-center z-10 px-8 w-full overflow-hidden">
      <Link className="text-3xl tracking-wide" href="/" onClick={() => setselectedBTN("home")}>
        <span className="text-[#397DF0] text-5xl">N</span>acerddine
      </Link>

      {/* Mobile Menu Icon */}
      <span className="ml-auto z-30 md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </span>

      {/* Desktop Menu */}
      <span className="hidden md:flex justify-center flex-grow">
        <ul className="flex items-center gap-8 justify-center pt-2">
          <Link href="/" onClick={() => setselectedBTN("home")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "home" ? "text-[#397DF0] font-semibold" : ""}`}>Home</li>
          </Link>
          <Link href="#about" onClick={() => setselectedBTN("about")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "about" ? "text-[#397DF0] font-semibold" : ""}`}>About</li>
          </Link>
          <Link href="#skills" onClick={() => setselectedBTN("skills")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "skills" ? "text-[#397DF0] font-semibold" : ""}`}>Skills</li>
          </Link>
          <Link href="#certifications" onClick={() => setselectedBTN("certifications")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "certifications" ? "text-[#397DF0] font-semibold" : ""}`}>Certifications</li>
          </Link>
          <Link href="#experience" onClick={() => setselectedBTN("experience")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "experience" ? "text-[#397DF0] font-semibold" : ""}`}>Experience</li>
          </Link>
          <Link href="#portfolio" onClick={() => setselectedBTN("portfolio")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "portfolio" ? "text-[#397DF0] font-semibold" : ""}`}>Portfolio</li>
          </Link>
          <Link href="#contact" onClick={() => setselectedBTN("contact")}>
            <li className={`font-mono cursor-pointer hover:text-[#397DF0] transition-[.3s] ${selectedBTN === "contact" ? "text-[#397DF0] font-semibold" : ""}`}>Contact</li>
          </Link>
        </ul>
      </span>

      {/* Hire Me Button */}
      <span className="hidden md:flex justify-end pt-1">
        <div className="w-max bg-[#397DF0] flex items-center justify-center px-3 py-2 rounded-xl text-white tracking-widest text-xl hover:text-[#D2E5FF] hover:scale-90 transition-[.3s]">
          Hire me
        </div>
      </span>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-[10%] left-0 w-full h-full z-20 flex">
          <div className={`bg-[#397DF0] w-1/2 min-w-max p-6 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <ul className="flex flex-col items-start gap-8">
              <Link href="/" onClick={() => {setselectedBTN("home"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "home" ? "text-3xl font-bold" : ""}`}>Home</li>
              </Link>
              <Link href="#about" onClick={() => {setselectedBTN("about"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "about" ? "text-3xl font-bold" : ""}`}>About</li>
              </Link>
              <Link href="#skills" onClick={() => {setselectedBTN("skills"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "skills" ? "text-3xl font-bold" : ""}`}>Skills</li>
              </Link>
              <Link href="#certifications" onClick={() => {setselectedBTN("certifications"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "certifications" ? "text-3xl font-bold" : ""}`}>Certifications</li>
              </Link>
              <Link href="#experience" onClick={() => {setselectedBTN("experience"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "experience" ? "text-3xl font-bold" : ""}`}>Experience</li>
              </Link>
              <Link href="#portfolio" onClick={() => {setselectedBTN("portfolio"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "portfolio" ? "text-3xl font-bold" : ""}`}>Portfolio</li>
              </Link>
              <Link href="#contact" onClick={() => {setselectedBTN("contact"); toggleMenu();}}>
                <li className={`font-mono cursor-pointer hover:font-extrabold hover:text-3xl transition-[.3s] ${selectedBTN === "contact" ? "text-3xl font-bold" : ""}`}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
