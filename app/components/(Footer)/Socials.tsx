import React from "react";
import Image from "next/image";
import Logo from "@images/favicon.ico";

import Links from "./Links";

const Socials = () => {
  return (
    <div
      className="flex flex-col text-xl text-center justify-center items-center mb-16 
    md:mb-0"
    >
      Connect with us
      <Image src={Logo} height={100} width={100} alt="Logo" />
      <Links />
    </div>
  );
};

export default Socials;
