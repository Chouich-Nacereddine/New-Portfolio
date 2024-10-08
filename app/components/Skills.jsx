"use client";

import IconCloud from "@/components/magicui/icon-cloud";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "php",
    "python",
    "flask",
    "streamlit",
    "tkinter",
    "composer",
    "npm",
    "tailwindcss",
    "mongodb",
    "mysql",
    "xampp",
    "postman",
    "springboot",
    "netlify",
    "vite",
    "pandas",
    "plotly",
    "uml",
    "axios",
    "canva",
    "openai",
    "laravel",
    "stackoverflow",
    "eclipseide",
  ];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = ScrollReveal({
        distance: "50px",
        duration: 1000,
        easing: "ease-in-out",
        reset: true,
      });

      sr.reveal(".reveal-left", { origin: "left" });
      sr.reveal(".reveal-right", { origin: "right" });
      sr.reveal(".reveal-top", { origin: "top" });
      sr.reveal(".reveal-bottom", { origin: "bottom" });
      sr.reveal(".reveal-fade", { opacity: 0, distance: "0px" });
    }
  }, []);
  return (
    <section className="min-h-max w-full skills_bg" id='skills'>
      <div className="md:flex-row flex flex-col bg-white md:px-8 p-0 md:py-14 bg-opacity-20">
        <div className="w-[50%] md:flex flex-col justify-center px-10 reveal-left hidden ">
          <h1 className="text-[#397DF0] text-3xl pb-6 pt-10 reveal-top">My Skills!</h1>
          <p className="font-mono text-justify border-r-2 border-b-2 pr-10 pb-6 rounded-br-3xl border-[#397DF0] reveal-bottom ">
            In the skills section of my portfolio, explore a diverse range of
            languages, tools, and frameworks that reflect my proficiency and
            experience. From front-end technologies like JavaScript and React to
            back-end expertise in Python and SQL, discover how I integrate these
            skills to create robust and innovative solutions.
          </p>
        </div>
        <h1 className="md:hidden tracking-wider text-base flex justify-center mt-10">
          <span className="reveal-top font-mono font-semibold text-center">
          Explore a diverse range of <br />
            languages, tools, and frameworks <br /> that reflect my proficiency and
            experience.
          </span>
        </h1>
        <div className="md:w-[50%] w-full flex justify-center items-center reveal-right">
          <div className="relative flex h-full md:w-[30vw] w-[80%] items-center justify-center overflow-hidden rounded-lg bg-background">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
