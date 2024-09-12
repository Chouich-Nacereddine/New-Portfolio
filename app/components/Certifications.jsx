"use client";

import React, { useEffect } from "react";
import MarqueeDemo from "./MarqueeDemo";

const Certifications = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then(({ default: ScrollReveal }) => {
        const sr = ScrollReveal({
          distance: "50px",
          duration: 1000,
          easing: "ease-in-out",
          reset: true,
        });

        sr.reveal(".reveal-top", { origin: "top" });
        sr.reveal(".reveal-bottom", { origin: "bottom" });
      });
    }
  }, []);

  return (
    <section className="w-full md:overflow-hidden overflow-visible md:px-8 px-0 md:mt-16 mt-24" id='certifications'>
      <div className="bg-[#d2e5ff] w-full md:h-[48vh] h-max flex flex-col md:gap-3 gap-0 justify-center items-center reveal-top">
        <h1 className="md:text-3xl text-4xl tracking-wider md:translate-y-0 -translate-y-6 ">Certifications</h1>
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Certifications;
