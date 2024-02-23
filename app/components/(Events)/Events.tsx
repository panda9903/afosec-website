import React from "react";
import Image from "next/image";
import EventCarousel from "./EventCarousel";
import IdeationCarousel from "./IdeationCarousel";
const Events = () => {
  return (
    <section id="events">
      <h2 className="text-6xl font-bold text-center mt-20 mb-10">Central Events</h2>
      <div className="relative flex flex-col md:flex-row justify-around items-start">
        <div className="absolute z-0 top-0 left-0 w-full h-full flex items-center justify-center">
        {/*  <Image
            src={}
            alt="events"
            width={620}
            height={620}
          />
  */}
          
        </div>

        <div className="z-10 w-full md:w-auto">
          <h3 className="text-4xl font-bold text-center mb-5">Ideation & Project Expo</h3>
          <IdeationCarousel/>
        </div>
        <div className="z-10 w-full md:w-auto mt-10 md:mt-0">
          <h3 className="text-4xl font-bold text-center mb-5">Literary & Cultural Events</h3>
          <EventCarousel />
        </div>
      </div>
    </section>
  );
};

export default Events;