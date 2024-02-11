import React from "react";
import Image from "next/image";
import Logo from "@images/favicon.ico";

import Links from "./Links";

const Socials = () => {
  return (
    <div
      className="flex flex-col text-xl text-center justify-center items-center mb-16 
    md:mb-0 p-8"
    >
      <p className="text-xl">Connect With Us</p>
      <Image src={Logo} height={100} width={100} alt="Logo" />
      <Links />
      <a
        className="text-white text-lg cursor-pointer"
        href="mailto:afosec@vrsiddhartha.ac.in"
      >
        afosec@vrsiddhartha.ac.in
      </a>
    </div>
  );
};

export default Socials;
