import React from "react";
import Image from "next/image";
import EventCarousel from "./EventCarousel";
import Doodle1 from "@public/BalletDoodle.svg";

const Events = () => {
  return (
    <section id="events">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Events</h2>
      <div className="flex flex-col md:flex-row justify-around">
        <EventCarousel />

        <div className="flex items-center justify-center">
          <Image
            src={Doodle1}
            alt="events"
            width={undefined}
            height={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
