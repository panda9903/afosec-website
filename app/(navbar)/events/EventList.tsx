"use client";

import React from "react";
import eventList from "./events";
import { useRouter } from "next/navigation";
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
          <div className="mb-8 flex flex-col" key={department}>
            <p className="text-2xl mb-4 text-[#EA8814] text-center md:text-left">
              {department}
            </p>
            <div className="flex md:flex-row gap-4 flex-col flex-wrap justify-center items-center md:justify-start">
              {events.map(({ id, name, description, url, deg, from, to }) => {
                return (
                  <div key={name}>
                    <div className="flip-card" key={name}>
                      <div
                        className="flip-card-inner"
                        style={{
                          backgroundImage: `linear-gradient(${deg}deg, ${from}, ${to})`,
                        }}
                      >
                        <div className="flip-card-front flex items-center justify-center text-2xl">
                          <p>{name}</p>
                        </div>
                        <div
                          className="flip-card-back flex flex-col items-center justify-center px-4"
                          style={{
                            backgroundImage: `linear-gradient(${deg}deg, ${from}, ${to})`,
                          }}
                        >
                          <p>{description}</p>
                          <Button
                            className="bg-[#EA8814] mt-4"
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
