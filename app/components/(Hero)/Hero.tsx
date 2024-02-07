import React, { useEffect } from "react";
import Image from "next/image";
import RegisterButton from "../(Hero Section)/RegisterButton";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col md:-mt-16 sticky">
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

      <RegisterButton />

      {/*  <DownArrow /> */}
    </div>
  );
};

export default Hero;