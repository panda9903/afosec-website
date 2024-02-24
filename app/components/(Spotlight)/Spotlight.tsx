import React from "react";
import Image from "next/image";
import SpotLightCarousel from "./SpotLightCarousel";

const SpotLight = () => {
  return (
    <section id="events">
      <h2 className="text-4xl font-bold text-center mt-20 mb-10">Spotlight</h2>
      <div className="relative flex flex-col md:flex-row justify-around items-start">
        <div className="absolute z-0 top-0 left-0 w-full h-full flex items-center justify-center">
        {/*  <Image
            src={}
            alt="events"
            width={620}
            height={620}
          />*/}
          
        </div>
        <div className="z-10 w-full md:w-auto">
          <SpotLightCarousel />
        </div>
      </div>
    </section>
  );
};

export default SpotLight;