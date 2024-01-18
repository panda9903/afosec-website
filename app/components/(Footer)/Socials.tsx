import React from "react";
import Image from "next/image";

import Links from "./Links";

const Socials = () => {
  return (
    <div className="flex flex-col">
      Connect with us
      <Image
        src="/favicon.ico"
        height={100}
        width={100}
        alt="Logo"
        className="my-4"
      ></Image>
      <Links />
    </div>
  );
};

export default Socials;
