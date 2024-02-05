import React from "react";
import Image from "next/image";
import EventCarousel from "./EventCarousel";
import Doodle1 from "@public/BalletDoodle.svg";
import IdeationCarousel from "./IdeationCarousel";
import Ideation from "@public/EmpInd.svg";
const Events = () => {
  return (
    <section id="events">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Central Events</h2>
      <div className="relative flex flex-col md:flex-row justify-around items-start">
        <div className="absolute z-0 top-0 left-0 w-full h-full flex items-center justify-center">
          <Image
            src={Doodle1}
            alt="events"
            width={620}
            height={620}
          />
          
        </div>

        <div className="z-10 w-full md:w-auto">
          <Image src={Ideation} alt="Ideation" width={200} height={200} />
          <IdeationCarousel/>
        </div>
        <div className="z-10 w-full md:w-auto mt-10 md:mt-0">
          <h3 className="text-2xl font-bold text-center mb-5">Literary &
Cultural Events</h3>
          <EventCarousel />
        </div>
      </div>
    </section>
  );
};

export default Events;