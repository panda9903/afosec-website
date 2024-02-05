"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
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
  },
  {
    id: 2,
    title: "Srujana",
    date: "Creative Writing",
  },
  {
    id: 3,
    title: "Gab Fab",
    date: "Extempore Floor Crossing",
  },
  {
    id: 4,
    title: "Wrangle",
    date: "The  Debate",
  },
  {
    id: 5,
    title: "Melody Mosaic",
    date: "2021-01-05",
  },
  {
    id: 6,
    title: "Vocal Vortex",
    date: "2021-01-06",
  },
  {
    id: 7,
    title: "Rhythmic Revelry",
    date: "2021-01-07",
  },
  {
    id: 8,
    title: "Team Tempo",
    date: "2021-01-08",
  },
  {
    id: 9,
    title: "DJ Night",
    date: "2021-01-09",
  },
  {
    id: 10,
    title: "Camp Fire",
    date: "2021-01-10",
  },
];

const EventCarousel = () => {
  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="md:w-full max-w-[16rem] md:max-w-xs"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from(eventDetails).map((event) => (
            <CarouselItem key={event.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 flex-col bg-black text-primary-foreground rounded-[0.5rem]">
                    <span className="text-3xl font-semibold">
                      {event.title}
                    </span>
                    <span className="text-md font-medium">{event.date}</span>
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
