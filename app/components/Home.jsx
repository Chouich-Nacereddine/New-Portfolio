"use client";

import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    // Initialize ScrollReveal and define the animation properties
    const sr = ScrollReveal({
      delay: 200,
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      reset: true, // animations reset every time they come into view
    });

    // Specific animation settings for different elements
    sr.reveal(".reveal-right", { origin: "right" });
    sr.reveal(".reveal-left", { origin: "left" });
    sr.reveal(".reveal-top", { origin: "top" });
    sr.reveal(".reveal-bottom", { origin: "bottom" });
    sr.reveal(".reveal-fade", { opacity: 0, distance: "0px" });
  }, []);

  return (
    <section className="min-h-max flex px-8 overflow-hidden w-full">
      <span className="w-[50%] overflow-hidden reveal-left">
        <div className="relative w-full">
          <img
            className="absolute -z-30 reveal-fade"
            src="/image/home-bg-1.png"
            alt="Background"
          />
        </div>
        <img className="reveal-left" src="/image/me.png" alt="Me" />
      </span>

      <span className="w-[50%] flex flex-col justify-center px-2 text-4xl text-justify overflow-hidden gap-2">
        <h1 className="flex tracking-wider">
          <span className="text-[#397DF0] reveal-top">Hi,</span>
          <img className="w-[1em] reveal-fade" src="/image/Hi.png" alt="Hi" />
        </h1>
        <h1 className="tracking-widest reveal-bottom">
          <span className="text-[#397DF0]">I'm N</span>acereddine Chouich,
        </h1>
        <h1 className="tracking-widest reveal-bottom">
          <span className="text-[#397DF0]">Welcome</span> to my website.
        </h1>

        <p className="text-base pt-4 w-[85%] reveal-fade">
          I revolutionize web and mobile applications with innovative full stack
          solutions, enhancing user experiences and business efficiency. Explore
          my portfolio to see how cutting-edge development can transform your
          digital projects.
        </p>

        <Link className="pt-6 reveal-bottom" href={"/"}>
          <div className="w-max bg-[#397DF0] flex items-center justify-center px-3 py-2 rounded-xl text-white tracking-widest text-xl">
            Hire me
          </div>
        </Link>
      </span>
    </section>
  );
};

export default Home;
