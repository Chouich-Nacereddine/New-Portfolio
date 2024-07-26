"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPersonWalkingLuggage,
} from "react-icons/fa6";
import { BsCamera2 } from "react-icons/bs";
import { GiBoatFishing, GiBoxingGloveSurprise } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import ScrollReveal from "scrollreveal";

const About = () => {
  const [hover, setHover] = useState(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const sr = ScrollReveal({
  //       distance: "50px",
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       reset: true,
  //     });

  //     sr.reveal(".reveal-left", { origin: "left" });
  //     sr.reveal(".reveal-right", { origin: "right" });
  //     sr.reveal(".reveal-top", { origin: "top" });
  //     sr.reveal(".reveal-bottom", { origin: "bottom" });
  //     sr.reveal(".reveal-fade", { opacity: 0, distance: "0px" });
  //   }
  // }, []);
  return (
    <section className="w-full h-[48vh] bg-[#D2E5FF]">
      <div className="w-full h-full bg-transparent flex flex-col">
        <h1 className="flex self-center py-10 text-3xl tracking-wider reveal-top">
          About
        </h1>

        <div className="flex text-base">
          <span className="w-[30%] flex flex-col px-10 items-center reveal-left">
            <h2 className="text-[#397DF0] text-2xl pb-2">Hobbies</h2>
            <ul className="w-[60%] flex flex-col justify-center items-center px-16 gap-1">
              <li className="flex justify-center items-center gap-1">
                Photography <BsCamera2 />
              </li>
              <li className="flex justify-center items-center gap-1">
                Fishing <GiBoatFishing />
              </li>
              <li className="flex justify-center items-center gap-1">
                Drawing <TfiWrite />
              </li>
              <li className="flex justify-center items-center gap-1">
                Traveling <FaPersonWalkingLuggage />
              </li>
              <li className="flex justify-center items-center gap-1">
                Boxing <GiBoxingGloveSurprise />
              </li>
            </ul>
          </span>

          <span className="h-[100%] w-[1px] border border-[#397DF0] reveal-fade"></span>
          <span className="w-[40%] flex flex-col items-center px-10 reveal-right">
            <p className="text-center">
              I am Nacereddine Chouich, a passionate Full Stack Developer,
              graduated in 2024 from ENSA of Fès, Morocco. I am a quick learner,
              especially when it comes to topics related to IT and coding
              languages or frameworks.
            </p>
            <div>
              <div className="flex pt-10 gap-8">
                <Link
                  href="https://www.instagram.com/nacer_edd/?igsh=ZHY2bnB1d2puMWMy&utm_source=qr"
                  target="_blank"
                >
                  <span
                    className="p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white"
                    onMouseEnter={() => setHover("instagram")}
                    onMouseLeave={() => setHover(null)}
                  >
                    <FaInstagram
                      type="logo"
                      name="instagram"
                      color={hover === "instagram" ? "#397DF0" : "#397DF0"}
                      className="h-10 w-10"
                    />
                  </span>
                </Link>
                <Link
                  href="https://github.com/Chouich-Nacereddine"
                  target="_blank"
                >
                  <span
                    className="p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white"
                    onMouseEnter={() => setHover("github")}
                    onMouseLeave={() => setHover(null)}
                  >
                    <FaGithub
                      name="github"
                      type="logo"
                      color={hover === "github" ? "#397DF0" : "#397DF0"}
                      className="h-10 w-10"
                    />
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nacreddine-chouich/"
                  target="_blank"
                >
                  <span
                    className="p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white"
                    onMouseEnter={() => setHover("linkedin")}
                    onMouseLeave={() => setHover(null)}
                  >
                    <FaLinkedinIn
                      name="linkedin"
                      type="logo"
                      color={hover === "linkedin" ? "#397DF0" : "#397DF0"}
                      className="h-10 w-10"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </span>

          <span className="h-[100%] w-[1px] border border-[#397DF0] reveal-fade"></span>
          <span className="w-[30%] flex flex-col items-center px-10 reveal-left">
            <span className="w-[30%] flex flex-col px-10 items-center">
              <ul className="w-[60%] flex flex-col justify-center items-center px-16 gap-1">
                <li className="flex justify-center items-center gap-4">
                  Arabic{" "}
                  <img
                    className="w-12"
                    src="/image/100percent.png"
                    alt="100%"
                  />
                </li>
                <li className="flex justify-center items-center gap-4">
                  French{" "}
                  <img className="w-12" src="/image/75percent.png" alt="75%" />
                </li>
                <li className="flex justify-center items-center gap-4">
                  English{" "}
                  <img className="w-12" src="/image/50percent.png" alt="50%" />
                </li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
