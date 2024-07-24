"use client"

import React, { useEffect } from "react";
import MarqueeDemo from "./MarqueeDemo";
import ScrollReveal from 'scrollreveal';

const Certifications = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });

    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
  }, []);

  return (
    <section className="w-[full] overflow-hidden px-8">
      <div className="bg-[#d2e5ff] w-full h-[48vh] flex flex-col gap-3 justify-center items-center reveal-top">
        <h1 className="py-2 text-3xl tracking-wider reveal-top">Certifications</h1>
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Certifications;
