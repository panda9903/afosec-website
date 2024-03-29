"use client";

import { Button } from "@/components/ui/button";
import eventList from "./CentralEvents";
import "./styles.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ideathon from "@images/ideathon.jpg";
import Link from "next/link";

type Event = {
  id: string;
  name: string;
  description: string;
  deg: number;
  from: string;
  to: string;
  DesX: string;
};

const CentralEventsList = () => {
  const events = Object.entries(eventList);

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
          className=" overflow-x-auto overflow-y-auto p-4 fixed md:left-1/4 md:right-1/4 top-1/4 left-[10%] right-[10%] bottom-8 no-scrollbar bg-slate-700 bg-opacity-70 backdrop-blur-3xl  px-4 py-4"
          style={{
            background: `linear-gradient(${selectedEvent.deg}, ${selectedEvent.from}, ${selectedEvent.to})`,
          }}
        >
          <Modal.Header closeButton className="flex flex-row justify-between ml-2">
            <Modal.Title className="text-[#EA8814] text-3xl mb-8 w-11/12">
              {selectedEvent.name}
            </Modal.Title>
            <Button
              onClick={handleClose}
              className="p-2 h-8 w-8 rounded-full bg-white text-black hover:bg-red-600 absolute right-8"
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body className="text-white text-base px-2">
            {selectedEvent.DesX.split('<br>').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </Modal.Body>
          <Modal.Footer className="mt-8 ml-2">
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
            {department === "Cultural Events" && <p className="mb-4 text-lg">
              Register <a className="text-[#EA8814] underline" href="https://forms.gle/zScjBt4xKRQ2VegZ8" target="_blank">here</a>
              </p>}

            {department === "Ideation" && <p className="mb-4 text-lg">
            Register <a className="text-[#EA8814] underline" href="https://forms.gle/neQDz7j5rn2EERRT9" target="_blank">here</a></p>}

            <div className="flex md:flex-row gap-4 flex-col flex-wrap justify-center items-center md:justify-start">
              {events.map(({ id, name, description, deg, from, to, DesX }) => {
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
                                deg,
                                from,
                                to,
                                DesX,
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
            {department === "Ideation" && <a href="https://forms.gle/neQDz7j5rn2EERRT9" target="_blank"><Image className="mt-8" src={ideathon} alt="Ideathon Image" width={200}></Image></a>} 

          </div>
        );
      })}
    </>
  );
};
export default CentralEventsList;
