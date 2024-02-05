import React, { useEffect } from "react";
import Image from "next/image";
import RegisterButton from "../(Hero Section)/RegisterButton";
import DownArrow from "../(Hero Section)/Down Arrow";

const Hero = () => {
  return (
    <div className=" flex flex-col md:-mt-16 sticky">
      <div className="mb-4">
        <video
          autoPlay
          muted
          preload="true"
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="../../../Teaser.mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* <div className="text-center mx-10 md:mx-48 my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam
        commodi distinctio aliquid quae consectetur maxime eveniet nesciunt
        magnam non debitis, vero dolore quia doloremque doloribus, harum facere
        iste deserunt accusamus eligendi aliquam ut voluptas quidem ad.vero
        dolore quia doloremque doloribus, harum facere iste deserunt accusamus
        eligendi aliquam ut voluptas quidem ad.
      </div> */}

      <RegisterButton />

      {/*  <DownArrow /> */}
    </div>
  );
};

export default Hero;
