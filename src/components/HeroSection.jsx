"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  return (
    <main>
      <section
        id="home"
        className="  bg-no-repeat bg-cover relative -z-10 active hero"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ec8223] text-white py-2 px-5 w-fit leading-none rounded-full">Available for projects</div>
          <h1 className="lg:text-[70px] md:text-[35px] text-[28px] mt-5  text-white font-bold leading-none">
            We Provide the
          </h1>
          <h1 className="lg:text-[70px] md:text-[35px] text-[28px]   text-white font-bold leading-none pt-1">
            Best Development Services
          </h1>
          <p className="text-white lg:text-xl text-sm mt-5 max-w-3xl">
            For Activecraft client satisfaction is most important. Activecraft
            always try to provide designs to the client as per their
            requirements and ideas in their minds
          </p>
        </div>
      </section>
    </main>
  );
}
