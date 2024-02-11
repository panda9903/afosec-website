import React from "react";
import Socials from "./Socials";
import Contact from "./Contact";
const Footer = () => {
  return (
    <div className="bg-[#0A0A0A] flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start px-8">
      <Socials />
      <Contact />
    </div>
  );
};

export default Footer;
