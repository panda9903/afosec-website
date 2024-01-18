import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@public/Group.svg";
import Facebook from "@public/Group (1).svg";
import Twitter from "@public/Group (2).svg";
import Linkedin from "@public/Vector.svg";

const Links = () => {
  return (
    <div className="flex justify-stretch">
      <a href="https://www.instagram.com" target="_blank">
        <Image
          src={Instagram}
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <Image
          src={Facebook}
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <Image
          src={Twitter}
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <Image
          src={Linkedin}
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
    </div>
  );
};

export default Links;
