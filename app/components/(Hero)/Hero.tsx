import React, { useEffect } from "react";
import RegisterButton from "../(Hero Section)/RegisterButton";
import Video from "./Video";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col md:-mt-16">
      <Video />
      <RegisterButton />

      {/*  <DownArrow /> */}
    </div>
  );
};

export default Hero;
