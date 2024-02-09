import React from "react";
import Image from "next/image";
import Logo from "@public/logo.png";

const Contact = () => {
  return (
<div className="max-w-md ">
  <div className="flex flex-col items-center">
    <p className="text-lg">Contact Us</p>
    <Image src={Logo} height={100} width={100} alt="Logo" />
  </div>
    <p>
      Velagapudi Ramakrishna Siddhartha Engineering College,
      Chalasani Nagar, Kanuru, Vijayawada, Andhra Pradesh 520007.
    </p>
    <p>Email: afosec.cse@vrsiddhartha.ac.in </p>
  </div>

  );
};

export default Contact;
