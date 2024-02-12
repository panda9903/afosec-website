"use client";

import React from "react";
import eventList from "./events";
import { useRouter } from "next/navigation";
import "./styles.css";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import ReactDOM from "react-dom";

type Event = {
  id: string;
  name: string;
  description: string;
  url: string;
  deg: number;
  from: string;
  to: string;
};

const EventsList = () => {
  const events = Object.entries(eventList);
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleClick = (event: any) => {
    setSelectedEvent(event);
    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {selectedEvent && (
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className=" overflow-x-auto overflow-y-scroll  fixed md:left-1/4 md:right-1/4 top-1/4 left-[10%] right-[10%] bottom-8 backdrop-blur-3xl bg-gray-900 px-4 py-4"
        >
          <Modal.Header closeButton className="flex flex-row justify-between">
            <Modal.Title className="text-white text-3xl mb-8 ">
              {selectedEvent.name}
            </Modal.Title>
            <Button
              onClick={handleClose}
              className="p-2 h-8 w-8 rounded-full bg-white text-black hover:bg-red-600 md:absolute md:right-8"
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body className="text-white text-base px-2">
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
            {selectedEvent.description}
          </Modal.Body>
          <Modal.Footer className="mt-8">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
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
                              handleClick({
                                id,
                                name,
                                description,
                                url,
                                deg,
                                from,
                                to,
                              });
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
