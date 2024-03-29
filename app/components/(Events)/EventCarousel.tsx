"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import glimse from "@public/goIn.jpg";
import srujana from "@public/srujana.jpg";
import gab from "@public/gab.jpg";
import wrangle from "@public/debate.jpg";
import melody from "@public/melody.png";
import rev from "@public/rev.png";
import team from "@public/tea.png";

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
    title: "Glimpses Of India",
    date: "India Quiz",
    image: glimse,
  },
  {
    id: 2,
    title: "Srujana",
    date: "Creative Writing",
    image: srujana,
  },
  {
    id: 3,
    title: "Gab Fab",
    date: "Extempore Floor Crossing",
    image: gab,
  },
  {
    id: 4,
    title: "Wrangle",
    date: "The  Debate",
    image: wrangle,
  },
  {
    id: 5,
    title: "Melody Mosaic",
    date: "Feb 28",
    image: melody,
  },
  {
    id: 6,
    title: "Vocal Vortex",
    date: "Feb 28",
    image: glimse,
  },
  {
    id: 7,
    title: "Rhythmic Revelry",
    date: "Feb 28",
    image: rev,
  },
  {
    id: 8,
    title: "Team Tempo",
    date: "Feb 28",
    image: team,
  },
];

const EventCarousel = () => {
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

export default EventCarousel;
