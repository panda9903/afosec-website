"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Instagram from "@public/insta.svg";
import Facebook from "@public/facebook.svg";
import YouTube from "@public/youtube.svg";
import Twitter from "@public/twitter.svg";
import Linkedin from "@public/linkedin.svg";

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
    image: Instagram,
  },
  {
    id: 2,
    title: "Srujana",
    date: "Creative Writing",
    image: Facebook,
  },
  {
    id: 3,
    title: "Gab Fab",
    date: "Extempore Floor Crossing",
    image: YouTube,
  },
  {
    id: 4,
    title: "Wrangle",
    date: "The  Debate",
    image: Twitter,
  },
  {
    id: 5,
    title: "Melody Mosaic",
    date: "Feb 28",
    image: Linkedin,
  },
  {
    id: 6,
    title: "Vocal Vortex",
    date: "Feb 28",
    image: Instagram,
  },
  {
    id: 7,
    title: "Rhythmic Revelry",
    date: "Feb 28",
    image: Facebook,
  },
  {
    id: 8,
    title: "Team Tempo",
    date: "Feb 28",
    image: Twitter,
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
                  <Image src={event.image} alt={event.title} width={200} height={200} />
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
