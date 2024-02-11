import React, { useEffect } from "react";
import Image from "next/image";
import RegisterButton from "../(Hero Section)/RegisterButton";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col md:-mt-16">
      <div className="mb-4">
        <video
          autoPlay
          controls={false}
          muted
          playsInline
          preload="true"
          loop
          className="w-screen h-screen object-cover"
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
