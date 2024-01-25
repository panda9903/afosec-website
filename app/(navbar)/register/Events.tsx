"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface Events {
  [key: string]: { name: string; state: boolean }[];
}

const events: Events = {
  void: [{ name: "Please select department", state: false }],
  CSE: [
    {
      name: "Secure Knight",
      state: false,
    },
    {
      name: "Shark Tank",
      state: false,
    },
    {
      name: "Trilang Quest",
      state: false,
    },
    {
      name: "Rapid ML",
      state: false,
    },
  ],
  AIDS: [
    {
      name: " Green Gyan",
      state: false,
    },
    {
      name: "Code Wizards",
      state: false,
    },
  ],
  IT: [
    {
      name: "UI Utopia / PixelFiesta",
      state: false,
    },
    {
      name: "Argumentation",
      state: false,
    },
    {
      name: "Fast&Furious",
      state: false,
    },
    {
      name: "Bug Busters",
      state: false,
    },
  ],
  ECE: [
    {
      name: "Technoslide",
      state: false,
    },
    {
      name: "Electronic Circuit Quiz",
      state: false,
    },
    {
      name: "Electronic Project Exhibition",
      state: false,
    },
    {
      name: "Techno Debate",
      state: false,
    },
  ],
  EEE: [
    {
      name: "Tech Broadcast",
      state: false,
    },
    {
      name: "Solder Master",
      state: false,
    },
    {
      name: "D-Tech-Tive",
      state: false,
    },
    {
      name: "tech Debate",
      state: false,
    },
  ],
  Mech: [
    {
      name: "EngineX",
      state: false,
    },
    {
      name: "Lathe War",
      state: false,
    },
    {
      name: "Water Rocket Lavunch",
      state: false,
    },
    {
      name: "Rube Gold Berg Maachine",
      state: false,
    },
  ],
  Civil: [
    {
      name: "Bridge It",
      state: false,
    },
    {
      name: "Seismic Table",
      state: false,
    },
    {
      name: "Auto Cad",
      state: false,
    },
    {
      name: "E-Poster Presentation",
      state: false,
    },
  ],
  MBA: [
    {
      name: "Brain Blasters",
      state: false,
    },
    {
      name: "Waall Street Wizards",
      state: false,
    },
    {
      name: "Market Mavericks",
      state: false,
    },
    {
      name: "Workforce Hives",
      state: false,
    },
  ],
  MCA: [
    {
      name: "Aakritiparva",
      state: false,
    },
    {
      name: "Techno Vidya",
      state: false,
    },
    {
      name: "Avishkar Anveshan",
      state: false,
    },
  ],
  EIE: [
    {
      name: "Kushagra",
      state: false,
    },
    {
      name: "PCB Design",
      state: false,
    },
    {
      name: "Techno Cross Word",
      state: false,
    },
    {
      name: "Tech-Talk",
      state: false,
    },
  ],
};

export function DropdownMenuCheckboxes({
  department: department,
}: {
  department: string;
}) {
  const [selectedEvents, setSelectedEvents] = React.useState<string[]>([]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="outline" className="text-black w-48">
          Events
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {department != "" &&
          events[department].map((event) => (
            <DropdownMenuCheckboxItem
              key={event.name}
              checked={selectedEvents.includes(event.name)}
              onCheckedChange={() => {
                const isChecked = selectedEvents.includes(event.name);
                setSelectedEvents((prevSelectedEvents) =>
                  isChecked
                    ? prevSelectedEvents.filter((e) => e !== event.name)
                    : [...prevSelectedEvents, event.name]
                );
              }}
              className={`${
                selectedEvents.includes(event.name)
                  ? "bg-green-400 rounded-sm"
                  : ""
              }`}
            >
              {event.name}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
