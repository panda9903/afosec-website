"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

import Empowered from "@public/EmprIn.svg";
import Thriving from "@public/susEng.svg";
import Innovation from "@public/InvSc.svg";
import Good from "@public/GudGov.svg";
import India from "@public/IndWld.svg";

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
    title: "Empowered Indians",
    date: "Feb 28",
    image: Empowered,
  },
  {
    id: 2,
    title: "Sustainable Economy",
    date: "Feb 28",
    image: Thriving,
  },
  {
    id: 3,
    title: "Innovation Science & Technology",
    date: "Feb 28",
    image: Innovation,
  },
  {
    id: 4,
    title: "Good Governance & Security",
    date: "Feb 28",
    image: Good,
  },
  {
    id: 5,
    title: "India in the World",
    date: "Feb 28",
    image: India,
  },
];
const IdeationCarousel = () => {
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

export default IdeationCarousel;
