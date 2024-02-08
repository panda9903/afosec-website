/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import image from "@public/svgAfosec.svg";

const About = () => {
  return (
    <section id="about" className="relative z-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mt-1 md:mb-1">About</h2>
        <Image
          src={image}
          alt="AFOSEC 2024"
          width={300}
          height={300}
          className="md:mt-1 md:mb-0 mb-10"
        />
      </div>

      <div className="text-center mx-10 md:mt-8 md:mx-48">
      AFOSEC-2024 (Annual Festival of Siddhartha Engineering College) is the national
      level Techno Cultural Festival of Velagapudi Ramakrishna Siddhartha Engineering College.
      Every department organises many technical and non technical events. Come,
      Participate And Win Exciting Prizes. VRSEC warmly WELCOMES you.....
      </div>
    </section>
  );
};

export default About;