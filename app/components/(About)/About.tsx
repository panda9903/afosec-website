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

      <div className=" mx-10 md:mt-8 md:mx-48 text-lg">
        AFOSEC 2024 is the annual Techno-Cultural-Literary Fest organized by the
        Department of Computer Science and Engineering of Velagapudi Ramakrishna
        Siddhartha Engineering College (VRSEC), one of the top engineering
        colleges in Andhra Pradesh. It is a two-day techno-cultural that
        showcases the talents and skills of students from various colleges
        across the state and beyond. It features a plethora of events, such as
        paper presentations, technical quizzes, coding contests, hackathons,
        gaming tournaments, mind games, and more. It also offers a platform for
        cultural and literary expression, with events like dance, music, drama,
        fashion show, debate, poetry, and more. AFOSEC 2024 aims to provide an
        enriching and enjoyable experience for all the participants, as well as
        to foster a spirit of innovation, creativity, and collaboration among
        the community. AFOSEC 2024 invites you to join us on
        <span className="text-[#EA8814]"> February 28th and 29th, 2024</span>,
        and be a part of this grand celebration of technology, culture, and fun.
        Don't miss this opportunity to witness, learn, and compete with the best
        of the best.
        <p className="text-[#EA8814] text-2xl mt-4 text-center">
          Register now and get ready for AFOSEC 2024!
        </p>
      </div>
    </section>
  );
};

export default About;
