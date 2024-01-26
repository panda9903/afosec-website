"use client";

import React from "react";
import eventList from "./events";
import { useRouter } from "next/navigation";

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
            {events.map(({ id, name, description, url }) => {
              return (
                <p
                  key={name}
                  className="text-[1.15rem] mb-2 cursor-pointer hover:underline"
                  onClick={() => {
                    handleClick(url);
                  }}
                >
                  {name}
                </p>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default EventsList;
