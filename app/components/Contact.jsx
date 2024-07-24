"use client"

import React from "react";

const Contact = () => {
  return (
    <section className="min-h-max w-full overflow-hidden px-8 mt-6">
      <div className="w-full h-max overflow-hidden flex items-center">
        <span className="w-[50%]">
          <img className="w-[85%]" src="/image/contact.jpg" />
        </span>
        <span className="w-[50%] flex flex-col gap-2">
          <h1 className="text-[#397DF0] text-3xl">Let's Connect</h1>
          <p className="font-mono tracking-normal text-justify w-[70%] pb-6">
            If you have any questions, want to discuss a project, or just want
            to say hi, feel free to reach out to me.
          </p>
          <span className="font-mono">Full Name</span>
          <input
            className="bg-transparent px-4 py-3 outline-none w-[70%] text-black font-mono rounded-lg border border-[#A2A2A2] transition-colors duration-100  focus:border-[#397DF0] focus:border-2"
            name="Full Name"
            placeholder="Full Name"
            type="text"
          />
          <span className="font-mono">Email</span>
          <input
            className="bg-transparent px-4 py-3 outline-none w-[70%] text-black font-mono rounded-lg border border-[#A2A2A2] transition-colors duration-100  focus:border-[#397DF0] focus:border-2"
            name="Email"
            placeholder="Email"
            type="email"
          />
          <span className="font-mono">Message</span>
          <textarea
            className="bg-transparent px-4 py-3 outline-none w-[70%] text-black font-mono rounded-lg border border-[#A2A2A2] transition-colors duration-100  focus:border-[#397DF0] focus:border-2"
            name="text"
            placeholder="Enter email or username"
            type="text"
          />
          <span className="w-[70%] bg-[#397DF0] mt-3 flex items-center justify-center px-3 py-2 rounded-lg text-white tracking-widest text-xl">
            send
          </span>
        </span>
      </div>
    </section>
  );
};

export default Contact;
