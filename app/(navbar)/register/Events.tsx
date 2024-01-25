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
      name: "XOXOXOX",
      state: false,
    },
    {
      name: "ABABAB",
      state: false,
    },
  ],
  ECE: [
    {
      name: "Event 1",
      state: false,
    },
    {
      name: "Event 2",
      state: false,
    },
  ],
  IT: [
    // ... events for IT
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
