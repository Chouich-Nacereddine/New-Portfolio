"use client";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/grid-pattern";
 
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  return (
    <section className="h-screen p-0 md:min-h-max flex md:px-8 overflow-hidden w-full">
      {/* Desktop  */}
      <span className="w-[50%] overflow-hidden reveal-left md:block hidden">
        <div className="relative w-full">
          <img
            className="absolute -z-30 reveal-fade"
            src="/image/home-bg-1.png"
            alt="Background"
          />
        </div>
        <img className="reveal-left h-full" src="/image/me.png" alt="Me" />
      </span>

      <span className="hidden w-[50%] md:flex flex-col justify-center px-2 text-4xl text-justify overflow-hidden gap-2">
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
          <div className="w-max bg-[#397DF0] flex items-center justify-center px-3 py-2 rounded-xl text-white tracking-widest text-xl hover:text-[#D2E5FF] hover:scale-90 transition-[.3s]">
            Hire me
          </div>
        </Link>
      </span>

      {/* Mobile */}
      <div className="md:hidden h-screen w-full flex flex-col items-center  overflow-x-hidden text-2xl">
        
        <img src="/image/phone-me.png" alt="" className="rounded-full h-[50vh] "/>
        <h1 className="flex tracking-wider text-base ">
          <span className="reveal-top font-mono font-semibold">Welcome to my Portfolio</span>
        </h1>
        <h1 className="tracking-wider pt-4 pb-2">
          <span className="reveal-top">Hi, I'm</span>
        </h1>
        <h1 className="tracking-widest reveal-bottom pb-2">
          <span className="text-[#397DF0] ">Nacereddine Chouich</span>
        </h1>
        <h1 className="flex tracking-wider pb-2">
          <span className="reveal-top">Full Stack</span>
        </h1>
        <h1 className="racking-wider ">
          <span className="text-[#397DF0] reveal-top">Engineer</span>
        </h1>
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

      </div>
    </section>
  );
};

export default Home;
