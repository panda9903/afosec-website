import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@public/insta.svg";
import Facebook from "@public/facebook.svg";
import YouTube from "@public/youtube.svg";
import Twitter from "@public/twitter.svg";
import Linkedin from "@public/linkedin.svg";

const Links = () => {
  return (
    <div className="flex justify-stretch">
      <a href="https://www.instagram.com/afosec_vrsec" target="_blank">
        <Image
          src={Instagram}
          height={30}
          width={30}
          alt="Logo"
          className="my-4 mr-2"
        ></Image>
      </a>
      <a href=" https://www.facebook.com/profile.php?id=61554640401260&mibextid=LQQJ4d " target="_blank">
        <Image
          src={Facebook}
          height={30}
          width={30}
          alt="Logo"
          className="my-4 mx-2"
        ></Image>
      </a>
      <a href=" https://www.youtube.com/@afosecVrsec" target="_blank">
        <Image
          src={YouTube}
          height={30}
          width={30}
          alt="Logo"
          className="my-4 mx-2"
        ></Image>
      </a>
      <a href=" https://x.com/AFOSECVRSEC " target="_blank">
        <Image
          src={Twitter}
          height={30}
          width={30}
          alt="Logo"
          className="my-4 mx-2"
        ></Image>
      </a>
      <a href=" https://www.linkedin.com/in/afosec-vrsec-2k24 " target="_blank">
        <Image
          src={Linkedin}
          height={30}
          width={30}
          alt="Logo"
          className="my-4 ml-2"
        ></Image>
      </a>
    </div>
  );
};

export default Links;
