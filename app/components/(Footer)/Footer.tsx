import React from "react";
import Socials from "./Socials";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="bg-[#0A0A0A] flex justify-between p-8">
      <Socials />
      <Contact />
    </div>
  );
};

export default Footer;
