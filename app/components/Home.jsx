import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex justify-between pt-[5.3%] px-8 overflow-hidden w-full">
      <span className="w-[50%] overflow-hidden">test</span>

      <span className="w-[50%] flex flex-col justify-center px-2 text-4xl text-justify overflow-hidden gap-2">
        <h1 className="flex tracking-wider">
          <span className="text-[#397DF0]">Hi,</span>
          <img className="w-[1em]" src="/image/Hi.png" />
        </h1>
        <h1 className="tracking-widest">
          <span className="text-[#397DF0]">I'm N</span>acereddine Chouich,
        </h1>
        <h1 className="tracking-widest">
          <span className="text-[#397DF0]">Welcome</span> to my website.
        </h1>

        <p className="font-serif text-base pt-4 w-[85%]">
          I revolutionize web and mobile applications with innovative full stack
          solutions, enhancing user experiences and business efficiency. Explore
          my portfolio to see how cutting-edge development can transform your
          digital projects.
        </p>

        <Link className="pt-6" href={"/"}>
          <div className="w-max bg-[#397DF0] flex items-center justify-center px-3 py-2 rounded-lg text-white tracking-widest text-xl">
            Hire me
          </div>
        </Link>
      </span>
    </section>
  );
};

export default Home;
