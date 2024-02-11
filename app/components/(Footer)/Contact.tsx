import React from "react";
import Image from "next/image";
import Logo from "@public/logo.png";
import LocateComponent from "./LocateUsButton";

const Contact = () => {
  return (
    <div className="max-w-md p-8">
      <div className="flex flex-col items-center">
        <p className="text-xl">Contact Us</p>
        <Image src={Logo} height={100} width={100} alt="Logo" />
      </div>
      <div className="flex items-center justify-center">
        <LocateComponent />
      </div>
      {/* <p className="text-center md:text-left">
        Velagapudi Ramakrishna Siddhartha Engineering College, Chalasani Nagar,
        Kanuru, Vijayawada, Andhra Pradesh 520007.
      </p> */}
    </div>
  );
};

export default Contact;
