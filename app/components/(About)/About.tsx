import React from "react";
import Image from "next/image";
import image from "@public/AFOSEC2024-01.png";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-3xl font-bold text-center mt-20 md:mb-10">About</h2>
        <Image
          src={image}
          alt="AFOSEC 2024"
          width={300}
          height={300}
          className="md:mt-8 md:mb-0 mb-10"
        />
      </div>

      <div className="text-center mx-10 md:mx-48">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        consequuntur velit deleniti, vitae soluta facilis suscipit placeat
        nesciunt omnis nisi ea tempore similique earum quaerat ducimus aperiam
        repellat ab fugiat voluptatibus distinctio rem illo corporis! Qui in
        harum aut expedita laborum, excepturi temporibus provident dicta
        aperiam, voluptatibus eveniet tempore facilis?
      </div>
    </section>
  );
};

export default About;
