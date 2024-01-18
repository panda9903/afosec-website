import React from "react";
import Link from "next/link";
import Image from "next/image";

const Links = () => {
  return (
    <div className="flex justify-stretch">
      <a href="https://www.instagram.com" target="_blank">
        <Image
          src="/Group.svg"
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <Image
          src="/Group (1).svg"
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <Image
          src="/Group (2).svg"
          height={30}
          width={30}
          alt="Logo"
          className="my-4"
        ></Image>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <Image
          src="/Vector.svg"
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
