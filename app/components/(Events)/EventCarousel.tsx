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
    title: "Event 1",
    date: "2021-01-01",
  },
  {
    id: 2,
    title: "Event 2",
    date: "2021-01-02",
  },
  {
    id: 3,
    title: "Event 3",
    date: "2021-01-03",
  },
  {
    id: 4,
    title: "Event 4",
    date: "2021-01-04",
  },
  {
    id: 5,
    title: "Event 5",
    date: "2021-01-05",
  },
  {
    id: 6,
    title: "Event 6",
    date: "2021-01-06",
  },
  {
    id: 7,
    title: "Event 7",
    date: "2021-01-07",
  },
  {
    id: 8,
    title: "Event 8",
    date: "2021-01-08",
  },
  {
    id: 9,
    title: "Event 9",
    date: "2021-01-09",
  },
  {
    id: 10,
    title: "Event 10",
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
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from(eventDetails).map((event) => (
            <CarouselItem key={event.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 flex-col bg-black text-primary-foreground rounded-[0.5rem]">
                    <span className="text-4xl font-semibold">
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
