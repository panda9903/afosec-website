import React, { useEffect } from "react";
import Image from "next/image";
import RegisterButton from "../(Hero Section)/RegisterButton";
import DownArrow from "../(Hero Section)/Down Arrow";

const Hero = () => {
  return (
    <div className=" flex flex-col">
      <div style={{ position: "relative" }}>
        <Image
          src="/favicon.ico"
          alt="Picture of the author"
          height={400}
          width={400}
          className="mx-auto mt-4 mb-4 "
        />
      </div>

      <div className="text-center mx-10 md:mx-48 my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam
        commodi distinctio aliquid quae consectetur maxime eveniet nesciunt
        magnam non debitis, vero dolore quia doloremque doloribus, harum facere
        iste deserunt accusamus eligendi aliquam ut voluptas quidem ad.vero
        dolore quia doloremque doloribus, harum facere iste deserunt accusamus
        eligendi aliquam ut voluptas quidem ad.
      </div>

      <RegisterButton />

      <DownArrow />
    </div>
  );
};

export default Hero;