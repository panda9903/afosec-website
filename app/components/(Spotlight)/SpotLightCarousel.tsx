"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import DJ from "@images/dj.jpeg"
import Fire from "@images/campfire.jpeg"
import Stalls from "@images/stalls.jpeg"
import Walk from "@images/fashionwalk.jpeg"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const eventDetails = [
  {
    id: 1,
    title: "Music Night",
    date: "India Quiz",
    image: DJ,
  },
  {
    id: 2,
    title: "Camp Fire",
    date: "Creative Writing",
    image: Fire,
  },
  {
    id: 3,
    title: "Fashion Walk",
    date: "Extempore Floor Crossing",
    image: Walk,
  },
  {
    id: 4,
    title: "Stalls",
    date: "The  Debate",
    image: Stalls,
  },
  
];

const SpotLightCarousel = () => {
  return (
    <div className="flex justify-center ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-[21rem] md:max-w-[25rem] h-[25rem]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="bg-black">
          {Array.from(eventDetails).map((event) => (
            <CarouselItem key={event.id}>
              <div className="p-[0.40rem] md:p-[0.45rem]">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center flex-col bg-black text-primary-foreground rounded-[0.5rem] p-2 h-[20rem] md:w-96">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={200}
                      height={200}
                    />
                    <span className="text-3xl font-semibold text-center mt-6">
                      {event.title}
                    </span>
                    <span className="text-md font-medium text-center">
                      {event.date}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SpotLightCarousel;
