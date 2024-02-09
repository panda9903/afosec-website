import React from "react";
import Socials from "./Socials";
import Contact from "./Contact";
import LocateComponent from "./LocateUsButton";
const Footer = () => {
  return (
    <div className="bg-[#0A0A0A] flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start py-6 px-16">
      <Socials />
      <LocateComponent/>
      <Contact />
    </div>
  );
};

export default Footer;
