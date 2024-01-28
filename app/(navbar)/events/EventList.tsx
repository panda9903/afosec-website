"use client";

import React from "react";
import eventList from "./events";
import { useRouter } from "next/navigation";
import Favicon from "@images/down-arrow.png";
import Image from "next/image";
import "./styles.css";
import { Button } from "@/components/ui/button";

const EventsList = () => {
  const events = Object.entries(eventList);
  const router = useRouter();

  const handleClick = (name: string) => {
    router.push(`/events/${name}`);
  };

  return (
    <>
      {events.map(([department, events]) => {
        return (
          <div className="mb-8" key={department}>
            <p className="text-2xl mb-4 text-[#EA8814]">{department}</p>
            <div className="flex flex-col md:flex-row gap-4">
              {events.map(({ id, name, description, url }) => {
                return (
                  <div key={name}>
                    <div className="flip-card" key={name}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front flex items-center justify-center text-2xl">
                          <p>{name}</p>
                        </div>
                        <div className="flip-card-back flex flex-col items-center justify-center">
                          <h1>{name}</h1>
                          <p>{description}</p>
                          <Button
                            className="bg-[#EA8814]"
                            onClick={() => {
                              handleClick(url);
                            }}
                          >
                            Know More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventsList;
